import React from 'react'

function Teams({teams}) {
    return (
        <div id='teamsDiv'>
            <p> {(teams.length>0) ? 'Teams to draft: ' : 'The draft is over!'} {teams.join(', ')}</p>
        </div>
    )
}

export default Teams
