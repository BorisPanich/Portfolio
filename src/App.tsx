import React from 'react';
import s from './App.module.css';
import {Skills} from "./skills/Skills";
import WorkingConditions from "./workingConditions/WorkingConditions";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footers";
import {MyWorks} from "./myWorks/MyWorks";
import {ScrollToUp} from './Common/components/ArrowUp/ScrollToUp';
import {Header} from "./header/Header";
import Main from "./main/Main";

function App() {
    return (
        <div className={s.app}>
            <ScrollToUp/>
            <div className={s.fon}>
                <Header/>
                <Main/>
            </div>
            <div>
                <Skills/>
                <MyWorks/>
                <WorkingConditions/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
