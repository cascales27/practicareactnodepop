import React from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import logo from '../../assets/icono.svg';
import { logout } from "../auth/service";

function Header ({ className, isLogged, onLogout}) {
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
    }
    return (
        <header>
            <Link to="/">
            <div>
                <img src={logo} alt="logo"></img>
            </div>
            </Link>
            <nav>
                <Button as={Link} to="advert"
                variant="primary">Nuevo anuncio</Button>
                <Button as={Link} to="/"
                variant="primary">Principal</Button>
                
            </nav>
        </header>
    );
}

export default Header;