import Button from "../common/Button";

import logo from '../../assets/icono.svg';
import { logout } from "../auth/service";
function Header ({ className, isLogged, onLogout}) {
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
    }
    return (
        <header>
            <div>
                <img src={logo} alt="logo"></img>
            </div>
            <nav>
                {isLogged ? (
                    <Button onClick={handleLogoutClick}>
                        Logout
                    </Button>
                ) : (
                <Button variant="primary">Login</Button>
                )}
            </nav>
        </header>
    );
}

export default Header;