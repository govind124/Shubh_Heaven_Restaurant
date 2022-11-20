 import React from 'react'
import { BsBagCheckFill } from "react-icons/bs";
import "./foodpages.css"



import Comp from '../comp/list.js'
import data from './feeds'

const FoodItems = () => {
  return (
        <div className="main__container">
        <BsBagCheckFill className='bag'/>

                <div className='rightbar'>

                    {

                        data.map((n) => (
                            <Comp
                            image={n.image}
                            name={n.name}
                            price={n.price}
                            />
                        ))
                    }
                </div>
          
        
    </div>
  )
}


export default FoodItems;