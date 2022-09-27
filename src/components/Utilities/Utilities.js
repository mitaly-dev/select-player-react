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

// const addPlayerInLS=(playerName)=>{
//     let neww=[]
//     let playerList=getPlayerLS()
//     let play=playerList.find(player=>player===playerName)
//     if(!play){
//        let neww=[...playerList,playerName]
//        localStorage.setItem('playerList',JSON.stringify(neww))
//     }
//     else{
//         let play=playerList.filter(player=>player!==playerName)
//         neww=[...play,playerName]
//     }
//     localStorage.setItem('playerList',JSON.stringify(neww))
// }

export{
    getPlayerLS,
    getBookMarkLS
}