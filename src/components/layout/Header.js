import classNames from 'classnames';
import React from "react";
import Button from "../common/Button";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/icono.svg';
import AuthButton from "../auth/AuthButton";

function Header ({ className}) {
   
    return (
        <header className={classNames('header', className)}>
            <Link to="/">
            <div>
                <img src={logo} alt="logo"></img>
            </div>
            </Link>
            <nav>
             <NavLink
             to="/adverts/new"
             >
                 Nuevo anuncio
             </NavLink>

             <NavLink
             to="/adverts"
             >
                 Ver todos los anuncios
             </NavLink>

             <AuthButton></AuthButton>
                
            </nav>
        </header>
    );
}

export default Header;