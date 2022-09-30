import React from 'react';

const Player = ({singlePlayer,bookMark,addPlayerInList}) => {
    let {strThumb,strPlayer,strDescriptionEN,strTeam,strNationality}=singlePlayer
   
    return (
        <div className="card w-full bg-base-100 shadow-xl border" data-aos="fade-up" >
        <figure className='h-[255px] bg-slate-100 rounded-lg'><img src={strThumb?strThumb:'https://www.pngkit.com/png/detail/930-9306658_404-not-found.png'} alt="Shoes" className='rounded-lg w-full h-full object-contain'/></figure>
        <div className="card-body px-4">
          <h2 className="card-title">{strPlayer}</h2>
          <p>{strDescriptionEN?strDescriptionEN.slice(0,60)+'...':"not found"}</p>
          <p className='mt-4'><span className='font-semibold'>Team :</span> {strTeam}</p>
          <p ><span className='font-semibold'>Nationality :</span> {strNationality}</p>
          <div className='text-white mt-5'>
          <button onClick={()=>addPlayerInList(singlePlayer)} className='capitalize bg-blue-800 py-1 w-[110px] px-2 rounded-full mr-2'>Add</button>
          <button  className='capitalize bg-blue-800 py-1 w-[110px] px-2 rounded-full'>Details</button>
          <button onClick={()=>bookMark(singlePlayer)}  className='capitalize bg-blue-800 py-1 w-[110px] px-2 rounded-full mt-2'>bookmark</button>
          </div>
        </div>
      </div>
    );
};

export default Player;

