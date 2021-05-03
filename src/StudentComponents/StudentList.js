import React, { useEffect, useState } from 'react';
import Student from "./Student";

function StudentList(props) {

    const [searchedList, setSearchedList] = useState(props.ListOfStudents);

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
                <Student key={student.surname} name={student.name} surname={student.surname} desc={student.desc} tags={student.tags} />
            ))}
        </div>
    );
}

export default StudentList;