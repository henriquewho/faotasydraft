import React from 'react'

function Button({onClick, text, teams}) {
    return (
        <button className={(teams.length>0) ? 'btn' : 'btn restart'} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
