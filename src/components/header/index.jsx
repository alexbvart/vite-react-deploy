import React from 'react'
import Logo from '../../assets/icons/logo';
import Menu from '../../assets/icons/menu';
import headerStyles from './header.module.scss'

const {header,logo_nike,menu} = headerStyles; 

function Header() {
  return (
    <header className={header}>
        <a href='#' className={logo_nike}>
            <Logo />
        </a>
        <div className={menu}>
          <Menu />
        </div> 
    </header>
  );
};

export default Header;