import React from 'react';
import s from './Skills.module.css';
import sContainer from './../../src/Common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../Common/components/title/Title";

const Skills = React.memo(() => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}
                       titleDiscription={'future description'}
                />
                <div className={s.skills}>
                    <Skill title={"JS"}
                           titleDiscription={"Text of lesson JS"}
                    />
                    <Skill title={"TS"}
                           discription={"Text of lesson TS"}
                    />
                    <Skill title={"React"}
                           discription={"Text of lesson React"}
                    />
                    <Skill title={"Redux"}
                           discription={"Text of lesson Redux"}
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
})

export default Skills;