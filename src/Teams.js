import React from 'react'

function Teams({teams}) {
    return (
        <div id='teamsDiv'>
            <p>Teams to draft: {teams.join(', ')}</p>
        </div>
    )
}

export default Teams
