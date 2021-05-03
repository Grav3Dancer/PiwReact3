import React, { useState } from 'react';
import {Form} from "react-bootstrap";

const NewGroup = ({ addGroup }) => {

    const [nameInput, setNameInput] = useState("");
    const [sizeInput, setSizeInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [tagsInput, setTagsInput] = useState("");

    function clear() {
        setNameInput("");
        setSizeInput("");
        setDescInput("");
        setTagsInput("");
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (nameInput === "" || sizeInput === "" || tagsInput === "") {
            alert("Musisz podać nazwę grupy, jej liczebność oraz przynajmniej jeden tag");
            return;
        }

        let newGroupData =
        {
            name: nameInput,
            size: sizeInput,
            desc: descInput,
            tags: tagsInput.toLowerCase().split(" "),
        };

        addGroup(newGroupData);

        clear();

    };

    return (
        <div className="AddBorder">
            
            <Form.Group>
                <Form.Control type="text" placeholder="Podaj nazwę..." value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                <Form.Control type="text" placeholder="Podaj liczbę osób..." value={sizeInput} onChange={(e) => setSizeInput(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Control as="textarea" placeholder="Napisz coś o grupie..." rows="8" cols ="43" value={descInput} onChange={(e) => setDescInput(e.target.value)}/>
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" style={{ width:"321px" }} placeholder="Wpisz tagi oddzielone spacją" minLength="50" value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} />
            </Form.Group>
            <button type="button" onClick={submitHandler}>Dodaj grupę</button>
        </div>
    );
}
export default NewGroup;