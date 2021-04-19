import React, { useState } from 'react';
import {Form} from "react-bootstrap";

const NewStudent = ({ addStudent }) => {

    const [nameInput, setNameInput] = useState("");
    const [surnameInput, setSurnameInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [tagsInput, setTagsInput] = useState("");

    function clear() {
        setNameInput("");
        setSurnameInput("");
        setDescInput("");
        setTagsInput("");
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (nameInput === "" || surnameInput === "" || tagsInput === "") {
            alert("Musisz podać imię, nazwisko oraz przynajmniej jeden tag");
            return;
        }

        let newStudentData =
        {
            name: nameInput,
            surname: surnameInput,
            desc: descInput,
            tags: tagsInput.toLowerCase().split(" "),
        };

        addStudent(newStudentData);

        clear();

    };

    return (
        <div className="AddBorder">
            <Form.Label>Dodaj nowego studenta</Form.Label>
            <Form.Group>
                <Form.Control type="text" placeholder="Podaj imię..." value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                <Form.Control type="text" placeholder="Podaj nazwisko..." value={surnameInput} onChange={(e) => setSurnameInput(e.target.value)} />
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