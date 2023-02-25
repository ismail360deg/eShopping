import React, {useRef,useEffect} from 'react';
import './header.css';
import {NavLink,Link } from 'react-router-dom';

import {motion} from 'framer-motion';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';
import { useSelector} from 'react-redux';

const Header = () => {

  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const menuRef = useRef(null)

  const stickyHeaderFunc =() => {
    window.addEventListener('scroll',() =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop
         > 80){
          headerRef.current.classList.add('sticky__header');
         } else{
          headerRef.current.classList.add('sticky__header');
         }
    });
  };

  useEffect(()=>{
    stickyHeaderFunc();

    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  const nav__links = [
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '/shop',
      display: 'Shop'
    },
    {
      path: '/cart',
      display: 'Cart'
    },
  ]

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
          <Link to='/home'>
          <div className='logo'>
              <img src={logo} alt="logo" />
            <div>
              <h1>e-Shopping</h1>
            </div>
          </div>
          </Link>

          <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>

                {
                  nav__links.map((item, index) => (
                   <li className='nav__item' key={index}>
                     <NavLink to={item.path} className={(navClass) => 
                    navClass.isActive ? 'nav__active' : ''
                    }
                    >
                      {item.display}</NavLink>
                   </li>
                  ))
                }

                {/* <li className='nav__item'>
                    <NavLink to='home'>Home</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='shop'>Shop</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='cart'>Cart</NavLink>
                </li> */}
              </ul>
          </div>

              <div className='nav__icons'>

                <span className='fav__icon'>
                  <i className='ri-heart-line'></i>
                  <span className='badge'>1</span>
                  </span>
                <span className='cart__icon'><i className='ri-shopping-bag-line'></i>
                <span className='badge'>{totalQuantity}</span>
                </span>

                <span><motion.img whileTap={{scale:1.1}} src={userIcon} alt="user_icon" /></span>
                <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
              </div>


          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header