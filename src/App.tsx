import React from 'react';
import style from './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import WorkingConditions from "./workingConditions/WorkingConditions";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footers";
import MyWorks from "./myWorks/MyWorks";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <WorkingConditions/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
