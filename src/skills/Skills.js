import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../../src/Common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} discription={"Text of lesson"}/>
                    <Skill title={"TS"} discription={"Text of lesson"}/>
                    <Skill title={"React-Redux"} discription={"Text of lesson"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;