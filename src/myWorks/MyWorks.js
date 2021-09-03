import React from 'react';
import s from './MyWorks.module.css';
import sContainer from './../../src/Common/styles/Container.module.css'
import todoList from "../assets/images/todoList.png";
import Sfinks from "../assets/images/Sfinks.jpg";
import MyWork from "./myWork/MyWork";
import {Title} from "../Common/components/title/Title";

const MyWorks = React.memo(() => {
    const todoImage = {
        backgroundImage: `url(${todoList})`
    };
    const socialImage = {
        backgroundImage: `url(${Sfinks})`
    }

    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <Title title={'My works'}/>
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
})

export default MyWorks;