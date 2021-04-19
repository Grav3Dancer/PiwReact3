import React, { useState } from'react';
import './App.css';
import SearchStudent from "./SearchStudent";
import StudentList from "./StudentList";
import NewStudent from "./NewStudent";
import SearchInfo from "./SearchInfo";
import logo from "./myLogoo.png";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Michał",
      surname: "Skrok",
      desc: "Czasem nie wiem co robię, ale google przychodzi z pomocą. Lubię gry, samochody i koty.",
      tags: ["c++","java","sql"],
    },
    {
      name: "Alicja",
      surname: "Zmyślona",
      desc: "Studiuję na wydziale budownictwa, chętnie pomagam każdemu w potrzebie :) Budownictwo fajna sprawa, beton, cement i zaprawa :o",
      tags: ["cad","psb","statyka_budowlana","c++"],
    },
    {
      name: "Jan",
      surname: "Kowalski",
      desc: "Cześć! Jestem Janek, studiuję na 3-cim roku informatyki,"+
       " uwielbiam grafikę i ogólnie pojęte tworzenie stron i aplikacji webowych. Chętnie dołączę się do ciekawych projektów :)",
      tags: ["java","html","JavaScript","react", "frontend"],
    },
  ]);

  const addStudent = (studentData) => {
    setStudents([studentData,...students]);
  };

  const [tagSearch, setTagSearch] = useState("");
  const [descSearch, setDescSearch] = useState("");
  const [foundStudents, setFoundStudents] = useState("");

  return (
    <div>
      <div className="logocss">
        <h1><img src={logo} alt="logoApki"></img></h1>
        <h3>Wyszukiwarka najlepszych studentów<br/> do TWOJEGO projektu</h3>
      </div>
      <div className="mainDiv">
        <SearchStudent tagSearch={tagSearch} descSearch={descSearch} setTagSearch={setTagSearch} setDescSearch={setDescSearch}/>
        <SearchInfo amount={foundStudents}/>
        <div className="listDiv">
          <StudentList ListOfStudents={students} tagToSearchFor={tagSearch} descToSearchFor={descSearch} setFoundStudents={setFoundStudents}/>
        </div>
      </div>
      <div className="addDiv">
        <NewStudent addStudent={addStudent}/>
      </div>
      <p className="signP">Made by Michał Skrok, 248827</p>
    </div>
  );
}

export default App;
