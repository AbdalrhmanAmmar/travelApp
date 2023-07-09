import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'



function Navbar() {

    
    




  return (
      <>
          <div className="navbar">
              <div className="navbarItem ">
                  <h2>Trippy</h2>
              <ul className='navbarLinks'>
                     <li>
                          <Link to='/'>
                              <i class="fa-solid fa-house-user"></i>
                              Home
                          
                          </Link>
                     </li>
                     <li>
                          <Link to='About'>
                             <i class="fa-solid fa-circle-exclamation"></i>
                              About
                          
                          </Link>
                     </li>
                     <li>
                          <a>
                              <i class="fa-solid fa-briefcase"></i>
                              Services
                          
                          </a>
                     </li>
                     <li>
                          <a>
                              <i class="fa-solid fa-address-book"></i>
                              Contact
                          
                          </a>
                      </li>
                      
                  </ul>
          <a className="icon-bar" >
  <i className="fa-solid fa-bars fa-2x"></i>
</a>   
              </div>
              
          </div>
      
      </>
  )
}



export default Navbar