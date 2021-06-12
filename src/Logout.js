import React, { useState, useContext } from 'react';
import {Form} from "react-bootstrap";
import { auth } from './Firebase';
import UserContext from './UserContext';

const Logout = () => {

    const {logged, setLogged} = useContext(UserContext);

    const logoutHandler = () => {
        auth.signOut()
        .then(() => {
            alert("Wylogowano");
            setLogged("Nie zalogowano");
          })
          .catch((error) => {
            alert(error);
          });
    }

    if(logged==="Nie zalogowano")
    {
    return (
        <div>
        </div>
    );
    } else return (
        <div>
            <button type="button" onClick={logoutHandler}>Wyloguj</button>
        </div>
    );
}
export default Logout;