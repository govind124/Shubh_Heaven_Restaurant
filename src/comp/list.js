import React, { useState } from 'react'
import OrderSummery from '../Food_Pages/OrderSummery';

const Comp = (propos) => {
    const{name, price, image} = propos;
    const [show ,setShow]=useState(false)

  return (
    <div className='all_data'>
      
        <div className="img" >
            <img src={image} alt="" style={{height:"200px",width:"300px",borderRadius:"30px"}} />
        </div>
        <div className="data">
            <h3 className='price'>
                {name}
            </h3>
            <h4 className='price'>
                price: {price} <br />
                
            </h4>
            <span className='btn'>
            <button className='inc' onClick={()=>setShow(true)} >+</button>
             <button className='dec' onClick={()=>setShow(true)} >-</button>

            </span>
        </div>
        {show ?  <OrderSummery name={name} price={price} handletoggle={()=>setShow(false)} /> : " " }
        
    </div>

  )
}

export default Comp
