import { data } from 'autoprefixer';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { addPlayerInLS, getPlayerLS } from '../../Utilities/Utilities';
import Player from '../Player/Player';
import Swal from 'sweetalert2'

const Players = ({search,bookMark,addPlayerInList,players,setPlayers,prevPlayer,setPrevPlayer}) => {


    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.player===null){
                Swal.fire({
                    title: '<strong>Not Found</strong>',
                    icon: 'info',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                  })
                return;
            }
            else{
                setPlayers(data.player)
            }
        })
    },[search])

   
    return (
        <div className='grid grid-cols-3 gap-8'>
            {
                players.map(singlePlayer=><Player singlePlayer={singlePlayer} key={singlePlayer.idPlayer} bookMark={bookMark} addPlayerInList={addPlayerInList}></Player>)
            }
        </div>
    );
};

export default Players;