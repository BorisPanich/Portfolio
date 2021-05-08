import React from 'react';
import style from './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import WorkingConditions from "./workingConditions/WorkingConditions";
import Contacts from "./contacts/Contacts";
import Footers from "./footer/Footers";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <WorkingConditions/>
            <Contacts/>
            <Footers/>
        </div>
    );
}

export default App;
