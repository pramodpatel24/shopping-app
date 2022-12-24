import React from 'react'
import Cart from '../../img/cart.svg';
import './Navbar.css';

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className='nav_box'>
        <span className='nav_shop' onClick={() => setShow(true)}>Shopping Cart</span>
        <div className='cart' onClick={() => setShow(false)}>
          <span>
            <img src={Cart} alt='' />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;