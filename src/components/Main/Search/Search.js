import React from 'react';

const Search = ({serch,setSearch}) => {
    return (
        <div className='flex'>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" className='border rounded-lg py-2 px-2 w-full outline-none border-slate-400' placeholder='Search player...'/>
            <button className='bg-yellow-500 py-2 px-7 rounded-lg font-semibold text-white outline-none'>Search</button>
        </div>
    );
};

export default Search;