/* eslint-disable */
import React,{ useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    addEventListener('scroll', () => {
      console.log(scrollY);
      if(window.scrollY > 50){
        setShow(true);
      } else{
        setShow(false);
      }
    })
    
    return () => {
      removeEventListener('scroll', () => {});
    }
  }, [])
  

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158'
        alt='Netfilx logo'
        className='nav__logo'
        onClick={() => window.location.reload()}
      />

      <img
        src='https://avatars.githubusercontent.com/u/6759280?v=4'
        alt='User logged'
        className='nav__avatar'
      />

    </nav>
  ) 
}

export default Nav;