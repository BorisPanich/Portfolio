import React from 'react'
import s from './Button.module.css'

export const Button = React.memo((
    {
        className, name, newStyle, button, ...props
    }
) => {

    const finalClassName = newStyle ? `${className} ${s.defaultBtn}` : `${s.buttonWrapper} ${className}`
    return (
        <>
            {!button
                ? <div className={finalClassName}>
                    <a href='#'>{name}</a>
                </div>
                : <button type={'submit'} className={finalClassName}>
                    <span>{name}</span>
                </button>
            }
        </>
    )
})