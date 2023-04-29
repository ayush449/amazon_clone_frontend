import React from 'react'
 import "./NavBar.css"

 import SearchIcon from "@material-ui/icons/Search";
 import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
 import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="header">
      <NavLink to="/">
      <img
      className="header__logo"
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''
    />
      </NavLink>
    
  

  <div className="header__search">
    <input className="header__searchInput" type="text" />
    <SearchIcon className="header__searchIcon" />
  </div>

  <div className="header__nav">
    
      <div className="header__option">
        <span className="header__optionLineOne">Hello Guest</span>
        <span className="header__optionLineTwo">
        <NavLink style={{color: "white"}} to="/login">Sign in</NavLink>


          
          </span>
      </div>
    

    
      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
      </div>
    
    

    <div className="header__option">
      <span className="header__optionLineOne">Your</span>
      <span className="header__optionLineTwo">Prime</span>
    </div>

    
      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">
          0
        </span>
      </div>
    
  </div>
 
</div>
  )
}

export default Navigation

