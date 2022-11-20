import React from 'react';
import Login from './WelcomePage/Login';
import { ImSpoonKnife } from "react-icons/im";
import SignUp from './WelcomePage/SignUp';
import "./index.css"
import MenuPage from './Food_Pages/MenuPage';
import ThankYou from './Food_Pages/ThankYou';
import FoodItems from './Food_Pages/FoodItems';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './WelcomePage/Home';



function App() {
  return (
    <div className="App">
    <div className='header'>
    <ImSpoonKnife className='knife'/> <b className='food_logo'>Shubh Heaven Restaurant</b>
    
    </div>
         
    <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MenuPage' element={<MenuPage/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path='/FoodItems' element={<FoodItems/>}/>
        <Route path='/ThankYou' element={<ThankYou/>}/>
      </Routes>
    </BrowserRouter>
    
    

    </div>
  );
}

export default App;
