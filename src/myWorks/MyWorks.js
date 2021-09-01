import React from 'react';
import s from './MyWorks.module.scss';
import sContainer from './../../src/Common/styles/Container.module.css'
import todoList from "../assets/images/todoList.png";
import Sfinks from "../assets/images/Sfinks.jpg";
import MyWork from "./myWork/MyWork";

function MyWorks() {
    const todoImage = {
        backgroundImage: `url(${todoList})`
    };
    const socialImage = {
        backgroundImage: `url(${Sfinks})`
    }

    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <MyWork projectName={"Social Network"}
                            discription={"small social network"}
                    />
                    <MyWork projectName={"TodoList"}
                            discription={"a little bit of everything"}
                    />
                </div>
            </div>
        </div>
    )
}

export default MyWorks;