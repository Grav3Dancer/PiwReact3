import React, { useState } from 'react';
import './App.css';

import SearchStudent from "./StudentComponents/SearchStudent";
import StudentList from "./StudentComponents/StudentList";
import NewStudent from "./StudentComponents/NewStudent";
import SearchInfo from "./StudentComponents/SearchInfo";

import GroupList from "./GroupComponents/GroupList";
import NewGroup from "./GroupComponents/NewGroup";
import SearchGroup from "./GroupComponents/SearchGroup";
import GroupSearchInfo from "./GroupComponents/GroupSearchInfo";

import logo from "./myLogoo.png";
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'

function App() {
  const [students, setStudents] = useState([
    {
      name: "Michał",
      surname: "Skrok",
      desc: "Czasem nie wiem co robię, ale google przychodzi z pomocą. Lubię gry, samochody i koty.",
      tags: ["c++", "java", "sql"],
    },
    {
      name: "Alicja",
      surname: "Zmyślona",
      desc: "Studiuję na wydziale budownictwa, chętnie pomagam każdemu w potrzebie :) Budownictwo fajna sprawa, beton, cement i zaprawa :o",
      tags: ["cad", "psb", "statyka_budowlana", "c++"],
    },
    {
      name: "Jan",
      surname: "Kowalski",
      desc: "Cześć! Jestem Janek, studiuję na 3-cim roku informatyki," +
        " uwielbiam grafikę i ogólnie pojęte tworzenie stron i aplikacji webowych. Chętnie dołączę się do ciekawych projektów :)",
      tags: ["java", "html", "javascript", "react", "frontend"],
    },
  ]);

  const [groups, setGroups] = useState([
    {
      name: "Projekt Zespołowy",
      size: "4",
      desc: "Grupa wykonująca aplikację do wideokonferencji w ramach projektu zespołowego",
      tags: ["kotlin", "java", "sql", "angular"],
    },
    {
      name: "UCiSW 2",
      size: "2",
      desc: "Projekt z układów cyfrowych - przesyłanie znaków dźwiękowo kodem morse'a",
      tags: ["ucisw_2", "vhdl", "kabelki"],
    },
  ]);

  const addGroup = (groupData) => {
    setGroups([groupData, ...groups]);
  };

  const addStudent = (studentData) => {
    setStudents([studentData, ...students]);
  };

  const [tagSearchGrp, setTagSearchGrp] = useState("");
  const [descSearchGrp, setDescSearchGrp] = useState("");
  const [foundGroups, setFoundGroups] = useState("");

  const [tagSearch, setTagSearch] = useState("");
  const [descSearch, setDescSearch] = useState("");
  const [foundStudents, setFoundStudents] = useState("");

  return (
    <Router>
      <div className="logocss">
        <h1><img src={logo} alt="logoApki"></img></h1>
        <h3>Wyszukiwarka najlepszych studentów i grup<br /> do TWOJEGO projektu</h3>
      </div>
      
      <nav>
        <div><NavLink to="/" exact>Przeglądanie studentów</NavLink></div>
        <div><NavLink to="/newStudent">Dodawanie nowego studenta</NavLink></div>
        <div><NavLink to="/groups">Przeglądanie grup</NavLink></div>
        <div><NavLink to="/newGroup">Dodawanie nowej grupy</NavLink></div>
      </nav>
      
      <Switch>
        <Route path="/" exact>
          <div className="mainDiv">
            <SearchStudent tagSearch={tagSearch} descSearch={descSearch} setTagSearch={setTagSearch} setDescSearch={setDescSearch} />
            <SearchInfo amount={foundStudents} />
            <div className="listDiv">
              <StudentList ListOfStudents={students} tagToSearchFor={tagSearch} descToSearchFor={descSearch} setFoundStudents={setFoundStudents} />
            </div>
          </div>
          </Route>
          
          <Route path="/groups">
          <div className="mainDiv">
            <SearchGroup tagSearch={tagSearchGrp} descSearch={descSearchGrp} setTagSearch={setTagSearchGrp} setDescSearch={setDescSearchGrp} />
            <GroupSearchInfo amount={foundGroups} />
            <div className="listDiv">
              <GroupList ListOfGroups={groups} tagToSearchFor={tagSearchGrp} descToSearchFor={descSearchGrp} setFoundGroups={setFoundGroups} />
            </div>
          </div>
        </Route>

        <Route path="/newStudent">
          <div className="addDiv">
            <h2>Dodaj nowego studenta</h2>
            <NewStudent addStudent={addStudent} />
          </div>
        </Route>

        <Route path="/newGroup">
          <div className="addDiv">
            <h2>Dodaj nową grupę</h2>
            <NewGroup addGroup={addGroup} />
          </div>
        </Route>
          
        <Route>
          <h2>404 Not Found</h2>
        </Route>
      </Switch>

      <p className="signP">Made by Michał Skrok, 248827</p>
    </Router>
  );
}

export default App;
