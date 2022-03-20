import Button from "../common/Button";

import logo from '../../assets/icono.svg';
function Header () {
    return (
        <header>
            <div>
                <img src={logo} alt="logo"></img>
            </div>
            <nav>
                <Button variant="primary">Login</Button>
            </nav>
        </header>
    );
}

export default Header;