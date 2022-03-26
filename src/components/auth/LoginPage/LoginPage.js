import T from "prop-types";
import { useState } from "react";
import Button from "../../common/Button";
import { login } from "../service";
import { FormField } from "../../common";
import { AuthContextConsumer } from "../context"; 

function LoginPage({ onLogin, history, location }) {

    const [value, setValue] = useState({ email: "", password: "" });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const resetError = () => setError(null);

    const handleChange = (event) => {
        setValue((prevState) =>({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };
    

    const handlesubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        resetError();
            
        try {
            await login(value);
            setIsLoading(false);
            onLogin();
            const { from } = location.state || { from: { pathname: "/ads"}
            };
            history.replace(from);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
        
    }
    return (

        <div className="loginPage">
            <h1 className="loginPage-title">Entra en la tienda</h1>
            <form onSubmit={handlesubmit}>
                <FormField
                    type="email"
                    name="email"
                    value={value.email}
                    onChange={handleChange}

                />
                <FormField
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                />

                <FormField
                    type="checkbox"
                    name="remember"
                    checked={value.remember}
                    onChange={handleChange}
                ></FormField>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={isLoading || !value.email || !value.password}>
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
    onLogin: T.func.isRequired,
};

const ConnectedLoginPage = (props) => (
    <AuthContextConsumer>
        {(auth) => <LoginPage onLogin={auth.handleLogin} {...props} />}
    </AuthContextConsumer>
)

export default ConnectedLoginPage;

