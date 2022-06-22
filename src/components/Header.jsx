import React, { useState } from 'react';
import '../styles/header.css';
import { Icon } from '@iconify/react';
// import { Link } from 'react-router-dom';

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="header-box">
      <img
        className="header-logo"
        src="https://besthqwallpapers.com/Uploads/6-4-2020/127575/thumb2-leandro-4k-wallpapers-with-names-horizontal-text-leandro-name.jpg"
        alt="logo"
        width={80}
      />
        <nav className={
          isNavExpanded ? "nav-header expanded" : "nav-header"
        }>
          <a className="nav-link" to="#">Sobre</a>
          <a className="nav-link" to="#">Projetos</a>
          <a className="nav-link" to="#">Contato</a>
        </nav>
        <Icon
          className="menu-hamburguer"
          onClick={() => {
            console.log('cheguei')
          setIsNavExpanded(!isNavExpanded)}}
          icon="mdi:microsoft-xbox-controller-menu"
        />
    </header>
  )
}

export default Header