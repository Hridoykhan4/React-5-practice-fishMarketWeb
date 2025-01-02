// import PropTypes from 'prop-types'

import { useEffect, useState } from "react"
import SingleFish from "../SingleFish/SingleFish"

const AvailableFish = () => {

    const [fishes, setFishes] = useState([])
    useEffect(() => {
        fetch('./fish.json')
        .then(res => res.json())
        .then(data => setFishes(data))
    }, [])


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">   
        {
            fishes.map((fish) => <SingleFish key={fish.ID} fish={fish} ></SingleFish>)
        }
    </div>
  )
}

// AvailableFish.propTypes = {}

export default AvailableFish