import React from 'react';
import s from './Skills.module.css';
import sContainer from './../../src/Common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"}
                           discription={"Text of lesson JS"}
                    />
                    <Skill title={"TS"}
                           discription={"Text of lesson TS"}
                    />
                    <Skill title={"React"}
                           discription={"Text of lesson React"}
                    />
                    <Skill title={"Redux"}
                           iscription={"Text of lesson Redux"}
                    />
                    <Skill title={"Material UI"}
                           discription={"Text of lesson Material UI"}
                    />
                    <Skill title={"Story Book"}
                           discription={"Text of lesson Story Book"}
                    />
                    <Skill title={"NodeJS"}
                           discription={"Back-end JavaScript runtime environment"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;