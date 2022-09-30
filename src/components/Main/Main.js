import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getBookMarkLS, getPlayerLS } from '../Utilities/Utilities';
import PlayerList from './PlayerList/PlayerList';
import Players from './Players/Players';
import Search from './Search/Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Main = ({addPlayer,setAddPlayer}) => {
    let [search,setSearch]=useState("")
    let [players,setPlayers]=useState([])
    let [prevPlayer,setPrevPlayer]=useState([])

    console.log('prevplayer',prevPlayer)

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
    // for(let player of playerList){
    //   console.log(player)
    //  let exit=prevPlayer.find(play=>play.strPlayer === player)
    //  console.log(exit)
    //  if(exit){
    //   newList.push(exit)
    //  }
    // }
    setAddPlayer(playerList)
  },[])


    const addPlayerInList=(player)=>{
      
      let playerList=getPlayerLS()


      let exit=playerList.find(play=>play.strPlayer===player.strPlayer)
    
      if(!exit){
        localStorage.setItem('playerList',JSON.stringify([...playerList,player]))
      }

    
     let addExit=addPlayer.find(plays=>plays.idPlayer===player.idPlayer)
     if(!addExit){
      let newPlayerList=[...addPlayer,player]
      setAddPlayer(newPlayerList)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
     }
     else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already added!',
        footer: '<a href="">Try another one</a>'
      })
     }
       
    }

    const deletePlayer=(player)=>{
      let nww=[]
       let rest=addPlayer.filter(play=>play.idPlayer!==player.idPlayer)
      setAddPlayer(rest)
      for(let res of rest){
        nww.push(res)
      }
      localStorage.setItem('playerList',JSON.stringify(nww))
      toast(`${player.strPlayer} Player is deleted`);
    }

   
    return (
    <div className='grid grid-cols-7'>
        <div className='col-span-5 mt-14'>
            <div className='w-8/12 m-auto'>
                {
                    <Search search={search} setSearch={setSearch} ></Search>
                }
            </div>
            <div className='mt-16 px-14'>
                <Players players={players} setPlayers={setPlayers} search={search} addPlayer={addPlayer} setAddPlayer={setAddPlayer} bookMark={bookMark} addPlayerInList={addPlayerInList} prevPlayer={prevPlayer} setPrevPlayer={setPrevPlayer}></Players>
            </div>
        </div>
        <div className='col-span-2 bg-gray-700 py-10'>
           <div className='sticky top-0'>
           <h3 className='text-white text-center text-3xl font-semibold border-b-2 pb-3 w-7/12 m-auto mb-8'>Select {addPlayer.length}</h3>

              <ol className='px-10 list-inside list-decimal '>
              {
                  addPlayer.map(player=><PlayerList player={player} key={player.idPlayer} deletePlayer={deletePlayer}></PlayerList>)
              }
              </ol>
           </div>
        </div>
    </div>
    );
};

export default Main;