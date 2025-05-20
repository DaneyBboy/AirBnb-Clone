import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Bottom from '../Components/Bottom'
import '../App'
import Data from '../Data'

export default function Layout() {

  const cards = Data.map((items) => {
    return (
      <Bottom
        item = {items}
        /*different methods of spreading objects
        {...items}*/
      />
    )
  })


  return (
    <div>
      <Navbar />
      <Main />
      <div className="contain">
      {cards}
      </div>
      

    </div>
  )
}


