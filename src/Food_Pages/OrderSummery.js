import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./foodpages.css"



const OrderSummery = (props) => {
  const [price, setPrice] = useState(props.price);


  const inc = () => {

    setPrice(price + props.price);
  }

  const dec = () => {
    if (price > props.price) {
      setPrice(price - props.price);
    }


  }


  return (


    <div className='popUp' style={{ position: "relative", zIndex: "5", backgroundColor: "gray", color: "white"}}>
      <div role="document">
        <div >
          <div >
            <div className='price_name'>

              <h5 style={{ display: "flex", justifyContent: "space-around" }}>Product Name: {props.name} </h5>
              <h5 style={{ fontWeight: "normal" }}>Price: {price} </h5>
            </div>
            <div className='inc_dec'>
              <button className='inc' onClick={() => { inc() }}>+</button>
              <button className='dec' onClick={() => { dec() }} style={{ backgroundColor: "white", color: "black" }}>-</button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/ThankYou"> <button type="button" className='save'>SAVE AND CHECKOUT</button></Link>
            <button type="button" className='close' onClick={() => props.handletoggle()}>Close</button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default OrderSummery