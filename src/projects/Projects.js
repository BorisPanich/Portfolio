import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../../src/Common/styles/Container.module.css'
import Project from "./project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={"Social Network"} discription={"small social network"} />
                    <Project title={"TodoList"} discription={"a little bit of everything"} />
                </div>
            </div>
        </div>
    )
}

export default Projects;