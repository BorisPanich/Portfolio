import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../../src/Common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../Common/components/title/Title";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"} />
                <div className={style.projects}>
                    <Project title={"Social Network"} discription={"small social network"} />
                    <Project title={"TodoList"} discription={"a little bit of everything"} />
                </div>
            </div>
        </div>
    )
}

export default Projects;