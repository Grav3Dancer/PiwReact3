import React, { useState, useContext } from 'react';
import {Form} from "react-bootstrap";
import { auth } from './Firebase';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import UserContext from './UserContext';

const Navs = () => {

    const {logged, setLogged} = useContext(UserContext);

    if(logged==="Nie zalogowano")
    {
    return (
        <nav>
        <div><NavLink to="/PiwReact3/" exact>Przeglądanie studentów</NavLink></div>
        <div><NavLink to="/PiwReact3/groups">Przeglądanie grup</NavLink></div>
        <div><NavLink to="/PiwReact3/Login">Logowanie</NavLink></div>
        <div><NavLink to="/PiwReact3/newStudent">Rejestracja</NavLink></div>
      </nav>
    );
    } else return (
        <nav>
        <div><NavLink to="/PiwReact3/" exact>Przeglądanie studentów</NavLink></div>
        <div><NavLink to="/PiwReact3/groups">Przeglądanie grup</NavLink></div>
        <div><NavLink to="/PiwReact3/newGroup">Dodawanie nowej grupy</NavLink></div>
      </nav>
    );
}
export default Navs;