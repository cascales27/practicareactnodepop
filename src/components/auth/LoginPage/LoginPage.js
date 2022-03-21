
import { useState } from "react";
import Button from "../../common/Button";

function LoginPage() {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const { email, password, remember } = credentials;

    const handleChange = event => {
        setCredentials(credentials => ({
            ...credentials,
            [event.target.name]:
             event.target.type === 'checkbox'
              ? event.target.checked
              : event.target.value,
        }));
    };

    const handlesubmit = (event) => {
        event.preventDefault();
    }
    return (

        <div className="loginPage">
            <h1 className="loginPage-title">Entra en la tienda</h1>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}

                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />

                <input
                    type="checkbox"
                    name="remember"
                    checked={remember}
                    onChange={handleChange}
                ></input>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={!email || !password}>
                    Entra</Button>
            </form>
        </div>
    );
}

export default LoginPage;