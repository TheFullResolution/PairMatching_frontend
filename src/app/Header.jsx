import React from 'react';
import { Link } from 'react-router';

import logo from 'img/codaisseur-logo.png';
import style from 'scss/components/Header.scss';

const Header = () => (
    <header className={style.header}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <Link to="signup" className={style.link}>Sign Up</Link>
          <Link to="login" className="btn_green btn">Login</Link>
        </nav>
    </header>
);

export default Header;
