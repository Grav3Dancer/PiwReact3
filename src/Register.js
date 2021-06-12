import { auth } from './Firebase';

import React, { useContext, useState } from 'react';
import UserContext from './UserContext';

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {logged, setLogged} = useContext(UserContext);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(loggedUser => {
                alert("Zarejestrowano");
                loggedUser.user.updateProfile({
                    displayName: username
                })
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div>
            <input
                className="form-input"
                placeholder="Nazwa użytkownika"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
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
            <button onClick={register}>Utwórz konto</button>
        </div>

    );
}
export default Register;