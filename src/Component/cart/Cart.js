import React from 'react'
import "./cart.css"
import { Divider } from '@material-ui/core'

function Cart() {
  return (
    <div>
       <div className="cart_section">
           <div classname="cart_container">
               <div className="left_cart">

               <img src="https://th.bing.com/th/id/OIP.8aCVFQQ1G-q11LdmiRTQDQHaE7?pid=ImgDet&rs=1"/>
               <div className="cart_btn">
                            <button className="cart_btn1" >Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>
               </div>

               <div className='right_cart'>
                <h3>Fitness Gear</h3>

                <Divider/>
                <p className='mrp'>M.R.P : ₹ 1195</p>
                <p> Deal of the Day: </p>

               </div>   

               <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}></span> </h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>

           </div>
       </div>
    </div>
  )
}

export default Cart
