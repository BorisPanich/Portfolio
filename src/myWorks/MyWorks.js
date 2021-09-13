import React from 'react';
import s from './MyWorks.module.scss';
import one from '../assets/images/projects/giris.jpeg';
import {Title} from "../Common/components/title/Title";
import MyWork from "./myWork/MyWork";
import Fade from 'react-reveal/Fade';

export const MyWorks = React.memo(() => {
    const oneWork = {
        backgroundImage: `url(${one})`
    }

    return (
        <div className={s.worksBlock} id='works'>
            <div className={s.container}>
                <Fade right>
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
                                link={'https://github.com/BorisPanich/TodoList'}    // problem with gh-pages
                                repLink={'https://github.com/BorisPanich/TodoList'}
                                projectName={'Todo List'}
                                description={
                                    'This project uses modern libraries, their logic and practical application.\n' +
                                    'And Redux-toolkit contains the best practices of all React developers. This project demonstrates redux-toolkit and its strict limitations.'
                                }
                        />
                        <MyWork style={oneWork}
                                link={'https://github.com/BorisPanich/react_KKP'}
                                repLink={'https://github.com/BorisPanich/react_KKP'}
                                projectName={'Storybook miniProject'}
                                description={
                                    'Project using storybook. In this project, components are viewed, and various states of these components are examined and tested.'
                                }
                        />
                    </div>
                </Fade>
            </div>
        </div>
    )
})
