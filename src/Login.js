import { auth } from './Firebase';

import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from './UserContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {logged, setLogged} = useContext(UserContext);

    const login = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((loggedUser) => {
                alert("Zalogowano");
                setLogged(loggedUser.user.displayName);
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div>
            <input
                className="form-input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                className="form-input"
                placeholder="Hasło"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={login}>Zaloguj</button>
        </div>

    );
}
export default Login;