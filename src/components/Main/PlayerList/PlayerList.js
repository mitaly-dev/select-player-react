import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayerList = ({player,deletePlayer}) => {
    return (
        <div><div className='flex justify-between items-center'>
        <li className='text-white text-lg'>{player.strPlayer}
       
        </li>
        <span onClick={()=>deletePlayer(player)} className='text-white text-xl cursor-pointer'>x</span>
        
    </div>
    <ToastContainer /></div>
     
    );
};

export default PlayerList;