import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import FishContainer from './components/FishContainer/FishContainer'
import Header from './components/Header/Header'

function App() {

  const [isActive, setIsActive] = useState(true);

  const handleActiveState = (status) => {
    if(status === 'available'){
      setIsActive(true)
    }else{
      setIsActive(false);
    }
  }

  return (
    <>
        <Header></Header>
        <Banner></Banner>
        <FishContainer handleActiveState={handleActiveState} isActive={isActive}></FishContainer>
    </>
  )
}

export default App
