import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { getAllStudents, addNewStudent } from '../Firebase';
import Student from "./Student";

function StudentList(props) {

    const [searchedList, setSearchedList] = useState(props.ListOfStudents);

    function formatTags(elem)
    {
        elem.tags = elem.tags.toLowerCase().split(" ");
    }

    useEffect(()=>{
        const getData = async () => {
            const studentsData = await getAllStudents();

            let studentsArray = [];

            studentsData.forEach((doc) => {
                studentsArray.push(doc.data());
            });
            studentsArray.forEach(formatTags);
            props.setStudents(studentsArray);

        };

        getData();
    }, []);

    useEffect(() => {
        setSearchedList(
            props.ListOfStudents.filter((student) => {

                if (props.tagToSearchFor==="" && props.descToSearchFor===""){
                    return student;
                }

                if (student.tags.includes(props.tagToSearchFor.toLowerCase()) && props.tagToSearchFor !==""){
                    return student;
                }

                if (student.desc.toLowerCase().split(" ").some(r=> props.descToSearchFor.toLowerCase().split(" ").includes(r)) && props.descToSearchFor !==""){
                    return student;
                }
            })
        );
    }, [props.tagToSearchFor, props.descToSearchFor, props.ListOfStudents]);

    useEffect(()=>{
        props.setFoundStudents(searchedList.length);
    },[searchedList]);

    return (
        <div>
            {searchedList.map((student) => (
                <Student key={uuidv4()} name={student.name} surname={student.surname} username={student.username} desc={student.desc} tags={student.tags} />
            ))}
        </div>
    );
}

export default StudentList;