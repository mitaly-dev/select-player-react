const getPlayerLS=()=>{
    let playerList=JSON.parse(localStorage.getItem('playerList'))
  
    if(!playerList){
        playerList=[]
    }
    return playerList;
}
const getBookMarkLS=()=>{
    let bookmark=JSON.parse(localStorage.getItem('bookmark'))
  
    if(!bookmark){
        bookmark=[]
    }
    return bookmark;
}


export{
    getPlayerLS,
    getBookMarkLS
}