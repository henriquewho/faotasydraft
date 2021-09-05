import React from 'react';

function PickedTeam({pickedTeam, order}) {
    return (
        <div>
            The {order}º team to pick is... {pickedTeam}
        </div>
    )
}

export default PickedTeam
