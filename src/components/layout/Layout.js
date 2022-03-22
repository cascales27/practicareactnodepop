import Header from "./Header";

function Layout({ children, title, isLogged, onLogout}) {
    return (
        <div>
        <Header isLogged={isLogged} onLogout={onLogout}/>
                <main>
                    <h2>{title}</h2>
                    <section>{children}</section>
                </main>
                <footer>© 2022 Cascales ventas</footer>
        </div>
    );
}

export default Layout;