import PropTypes from 'prop-types'

const Cart = ({newfish}) => {
  return (
    <div>
        <h3 className='text-2xl my-4 font-black'>Thanks For Visiting Us🥰🥰</h3>
        {
            newfish.map((fish) => (
                <div className='my-10' key={fish.ID}>

                </div>
            ))
        }
    </div>
  )
}

Cart.propTypes = {
    newfish: PropTypes.array
}

export default Cart