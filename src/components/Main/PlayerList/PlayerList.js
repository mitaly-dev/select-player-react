import React from 'react';

const PlayerList = ({player}) => {
    return (
        <li className='text-white text-lg'>{player.strPlayer}</li>
    );
};

export default PlayerList;