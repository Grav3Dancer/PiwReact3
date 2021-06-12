import React, { useState, useContext } from 'react';
import {Form} from "react-bootstrap";
import { addNewStudent, auth } from '../Firebase';
import UserContext from '../UserContext';

const NewStudent = ({ addStudent }) => {

    const [nameInput, setNameInput] = useState("");
    const [surnameInput, setSurnameInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [tagsInput, setTagsInput] = useState("");
    function clear() {
        setNameInput("");
        setSurnameInput("");
        setUsernameInput("");
        setEmailInput("");
        setPasswordInput("");
        setDescInput("");
        setTagsInput("");
    };

    const register = () => {
        auth.createUserWithEmailAndPassword(emailInput, passwordInput)
            .then(loggedUser => {
                alert("Zarejestrowano");
                loggedUser.user.updateProfile({
                    displayName: usernameInput
                })
            })
            .catch((error) => {
                alert(error);
            });
    }


    const submitHandler = (e) => {
        e.preventDefault();

        if (nameInput === "" || surnameInput === "" || tagsInput === "") {
            alert("Musisz podać imię, nazwisko, nazwę, oraz przynajmniej jeden tag");
            return;
        }

        if (usernameInput === "" || emailInput === "" || passwordInput === "") {
            alert("Musisz podać email, nazwę użytkownika oraz hasło");
            return;
        }

        let newStudentData =
        {
            name: nameInput,
            surname: surnameInput,
            username: usernameInput,
            desc: descInput,
            tags: tagsInput.toLowerCase().split(" "),
        };

        register();
        //addStudent(newStudentData);
        addNewStudent(nameInput, surnameInput, usernameInput, descInput, tagsInput);
        clear();

    };

    return (
        <div className="AddBorder">
            
            <Form.Group>
                <Form.Control type="text" placeholder="Podaj imię..." value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                <Form.Control type="text" placeholder="Podaj nazwisko..." value={surnameInput} onChange={(e) => setSurnameInput(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Podaj nazwę użytkownika..." value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Podaj email..." value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                <Form.Control type="text" placeholder="Podaj hasło..." value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Control as="textarea" placeholder="Napisz coś o sobie..." rows="8" cols ="43" value={descInput} onChange={(e) => setDescInput(e.target.value)}/>
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" style={{ width:"321px" }} placeholder="Wpisz tagi oddzielone spacją" minLength="50" value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} />
            </Form.Group>
            <button type="button" onClick={submitHandler}>Dodaj studenta</button>
        </div>
    );
}
export default NewStudent;