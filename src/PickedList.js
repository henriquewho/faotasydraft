import React from 'react'
import PickedTeam from './PickedTeam'

function PickedList({picked}) {

    return (
        picked.map (pickedTeam =>{
            return <PickedTeam key={pickedTeam.key} pickedTeam={pickedTeam.team} order={pickedTeam.order}/>
        })
    )
}

export default PickedList
