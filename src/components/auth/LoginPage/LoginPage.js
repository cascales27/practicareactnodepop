import T from "prop-types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Button from "../../common/Button";
import { login } from "../service";
import FormField from "../../common/FormField";

import { useLocation, useNavigate } from "react-router-dom";

function LoginPage({ onLogin }) {

    const ref = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    const [ credentials, setCredentials] = useState({
        email: "",
        password: "",
        remember: false,
    });


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        ref.current.focus();
    }, []);

    const { email, password, remember} = credentials;

    const handleChange = useCallback((event) => {
        setCredentials((credentials) => ({
            ...credentials,
            [event.target.name]:
            event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
        }));
    }, []);
    const resetError = () => setError(null);

    const handlesubmit = async event => {
        event.preventDefault();
        
        try {
            resetError();
            setIsLoading(true);
            await login(credentials);
            setIsLoading(false);
            onLogin();
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
        
    };

    const buttonDisabled = useMemo(() => {
        return !email || !password || isLoading;
    }, [email, password, isLoading]);

    return (

        <div className="loginPage">
            <h1 className="loginPage-title">Entra en la tienda</h1>
            <form onSubmit={handlesubmit}>
                <FormField
                    type="email"
                    name="email"
                    label="email"
                    value={email}
                    onChange={handleChange}
                    ref={ref}
                />
                <FormField
                    type="password"
                    name="password"
                    label="password"
                    value={password}
                    onChange={handleChange}
                    ref={ref}
                />

                <FormField
                    type="checkbox"
                    name="remember"
                    checked={remember}
                    onChange={handleChange}
                ></FormField>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={buttonDisabled}>
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


LoginPage.propTypes = {
    onLogin: T.func,
};

export default LoginPage;

