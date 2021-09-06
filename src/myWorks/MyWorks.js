import React from 'react';
import s from './MyWorks.module.scss';
import one from '../assets/images/projects/giris.jpeg';
import {Title} from "../Common/components/title/Title";
import MyWork from "./myWork/MyWork";

export const MyWorks = React.memo(() => {
    const oneWork = {
        backgroundImage: `url(${one})`
    }

    return (
        <div className={s.worksBlock}>
            <div className={s.container} id='works'>
                <Title title={'My works'}
                       titleDescription={'Check out my latest web software development portfolio projects.'}
                       id='works'
                />
                <div className={s.works}>
                    <MyWork style={oneWork}
                            link={'https://BorisPanich.github.io/React-project'}
                            repLink={'https://github.com/BorisPanich/React-project'}
                            projectName={'Social Network'}
                            description={
                                'It is the most biggest project which I refresh every month and learning new technologies. It helps me to be in trends.'
                            }
                    />
                    <MyWork style={oneWork}
                            link={'https://BorisPanich.github.io/TodoList'}
                            repLink={'https://github.com/BorisPanich/TodoList'}
                            projectName={'Todo List'}
                            description={
                                'Redux-toolkit contains the best practice from all React developers. This project shows redux-toolkit and his strict limits.'
                            }
                    />
                    <MyWork style={oneWork}
                            link={''}
                            repLink={'https://github.com/BorisPanich/react_KKP'}
                            projectName={'Storybook miniProject'}
                            description={
                                'Project using storybook'
                            }
                    />
                </div>
            </div>
        </div>
    )
})