
import { useState } from "react";
import Button from "../../common/Button";

function LoginPage() {

    const [credentials, setCredentials] = useState({
        username: '',
         password: '',
        });

        const handleChange = event => {
            setCredentials(credentials => ({
                ...credentials,
                [event.target.name]: event.target.value,
            }));
        };
    return (

    <div className="loginPage">
        <h1 className="loginPage-title">Entra en la tienda</h1>
        <form>
            <input 
            type="text"
            name="username" 
            value={credentials.username}
             onChange={handleChange}
            
            />
            <input
             type="password" 
            name="pasword"
             value={credentials.password}
            onChange={handleChange}>
                </input>
            <Button type="submit" variant="primary" > Entra</Button>
        </form>
    </div>
     );
}

export default LoginPage;