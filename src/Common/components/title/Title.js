import React from 'react';
import s from './Title.module.css';

export const Title = React.memo(({title, className}) => {
    const finalStyle = `${className} ${s.defaulStyle}`

    return <div className={finalStyle}>{title}</div>
})