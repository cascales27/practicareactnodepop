import Button from "../common/Button";
import { logout } from "./service";
import { useAuth } from "./context";

function AuthButton({ className }) {
    const { isLogged, handleLogout: onLogout } = useAuth();

    const handleLogoutClick = async () => {
        if( window.confirm("Estas seguro de abandonar la página")
        ) {
            await logout();
            onLogout();
        }
    };

    return (
        <Button className={className} onClick={handleLogoutClick}>
            Cerrar sesión
        </Button>
    )
}

export default AuthButton;