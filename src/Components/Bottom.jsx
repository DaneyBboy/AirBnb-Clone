import React from 'react'
import '../App'


export default function Bottom(props) {
  let badgeText = ""
  if (props.item.openSpots === 0){
  badgeText = "SOLD OUT"
  }else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }

  return (

    <>
      <box className="card">
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={props.item.coverImg} alt="" />
        <div>
          <img src={props.item.Star} alt="" />
          <span className="bold">({props.item.stats.rating}) </span>
          <span className="gray">({props.item.stats.reviewCount}) </span>
          <span className="gray">{props.item.location}</span>
        </div>

        <p>{props.item.title}</p>
        <p>${props.item.price}/person</p>

      </box>



    </>


  )
}
