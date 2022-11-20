import React from 'react'
import "./foodpages.css"
import { Link } from 'react-router-dom'

const MenuPage = () => {
  return (
    <>
    <div className='welcome'>
        <h1 className='welcome'>Welcome to Food's <br /> Kitchen</h1>
        <Link to="/FoodItems"><button className='go_to_menu'>GO TO MENU</button></Link>
    </div>

    </>
  )
}

export default MenuPage