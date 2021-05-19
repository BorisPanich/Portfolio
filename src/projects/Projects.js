import React from 'react';
import style from './Projects.module.scss';
import styleContainer from './../../src/Common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../Common/components/title/Title";
import todoList from "../assets/images/todoList.png";
import Sfinks from "../assets/images/Sfinks.jpg";

function Projects() {
    const todoImage = {
        backgroundImage: `url(${todoList})`
    };
    const socialImage = {
        backgroundImage: `url(${Sfinks})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"} />
                <div className={style.projects}>
                    <Project style={socialImage} title={"Social Network"} discription={"small social network"} />
                    <Project style={todoImage} title={"TodoList"} discription={"a little bit of everything"} />
                </div>
            </div>
        </div>
    )
}

export default Projects;