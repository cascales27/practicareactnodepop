import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
    return (
        <div>
        <Header />
                <main>
                    <Outlet></Outlet>
                </main>
                <footer>© 2022 Cascales ventas</footer>
        </div>
    );
}

export default Layout;