
import { useState } from "react";
import Button from "../../common/Button";
import { login } from "../service";

function LoginPage({ onLogin }) {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const resetError = () => setError(null);

    const handlesubmit = async event => {
        event.preventDefault();
        try {
            resetError();
            setIsLoading(true);
            await login(credentials);
            setIsLoading(false);
            onLogin();
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
        
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
                    disabled={!email || !password || isLoading}>
                    Entra</Button>
                    </form>
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
        </div>
    );
}

export default LoginPage;