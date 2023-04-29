import React from 'react'
import './buynow.css'
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
function Buynow() {
  return (
    <div className="buynow_section">
     
        
      <div className="buynow_container">
         
       <div className='left_buy'>
        <h1>Shopping Cart</h1>
        <p>select all items</p>
        <span className="leftbuyprice">Price</span>
                            <Divider />

                            <Option/>
                            <Subtotal/>
                            <Right/>

       </div>

      </div>
    
   
    </div>
  ) 
}

export default Buynow
