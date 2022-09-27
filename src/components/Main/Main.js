import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getBookMarkLS, getPlayerLS } from '../Utilities/Utilities';
import PlayerList from './PlayerList/PlayerList';
import Players from './Players/Players';
import Search from './Search/Search';

const Main = () => {
    let [search,setSearch]=useState("")
    let [addPlayer,setAddPlayer]=useState([])
    let [players,setPlayers]=useState([])


    const bookMark = (player) => {
      console.log(player)
        let {strPlayer,idPlayer,strNationality}=player
        let info={strPlayer,idPlayer,strNationality}
        let bookmark=getBookMarkLS()
        
        let exit=bookmark.find(book=>book.idPlayer===player.idPlayer)
        if(!exit){
          let neww=[...bookmark,info]
          localStorage.setItem('bookmark',JSON.stringify(neww))
        }

    }

    useEffect(()=>{
      let playerList=getPlayerLS()
      let newList=[]
    for(let player of playerList){
     let exit=players.find(play=>play.strPlayer===player)
     if(exit){
      newList.push(exit)
     }
    }
    setAddPlayer(newList)
  },[players])


    const addPlayerInList=(player)=>{
      let {strPlayer}=player
      let info=strPlayer

      let playerList=localStorage.getItem('playerList')
      playerList=JSON.parse(playerList)
      if(!playerList){
          playerList=[]
      }

      let exit=playerList.find(play=>play===player.strPlayer)
    
      if(!exit){
        localStorage.setItem('playerList',JSON.stringify([...playerList,info]))
      }

        let newPlayerList=[...addPlayer,player]
        setAddPlayer(newPlayerList)
    }

   
    return (
    <div className='grid grid-cols-7'>
        <div className='col-span-5 mt-14'>
            <div className='w-8/12 m-auto'>
                {
                    <Search search={search} setSearch={setSearch}></Search>
                }
            </div>
            <div className='mt-16 px-14'>
                <Players players={players} setPlayers={setPlayers} search={search} addPlayer={addPlayer} setAddPlayer={setAddPlayer} bookMark={bookMark} addPlayerInList={addPlayerInList}></Players>
            </div>
        </div>
        <div className='col-span-2 bg-gray-700 py-10'>
            <h3 className='text-white text-center text-3xl font-semibold border-b-2 pb-3 w-7/12 m-auto mb-8'>Select {addPlayer.length}</h3>

           <ol className='px-10 list-inside list-decimal'>
            {
                addPlayer.map(player=><PlayerList player={player} key={player.idPlayer}></PlayerList>)
            }
           </ol>
        </div>
    </div>
    );
};

export default Main;