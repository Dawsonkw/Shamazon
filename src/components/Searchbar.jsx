import React from 'react';
import {BsSearch} from 'react-icons/bs'

function Searchbar({searchValue, handleChange}) {
    const search = () => {
        // Search logic goes here
        console.log('Searching for item...')
    }



    return (
        <div className='py-4 flex items-center bg-gray-400 px-5'>
            <BsSearch className=' mr-4 text-xl hover:cursor-pointer hover:text-kitsuneOrange2' onClick={search}/>
            <input className=' border border-shamazonGreen px-4 py-2 w-full' type="text" placeholder='Search Shamazon...' value={searchValue} onChange={handleChange} onKeyDown={(e) => {if(e.key === 'Enter') search()}} />
        </div>
    );
}


export default Searchbar;