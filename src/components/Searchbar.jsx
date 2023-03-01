import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function Searchbar({searchValue, handleChange}) {
    const [searchResultsData, setSearchResultsData] = useState([]);

    const  navigate = useNavigate();
    
    const search = async () => {
        try {
            const response = await fetch(
                `https://dummyjson.com/products/?limit=0&search=${searchValue}`
            );
            const data = await response.json();
            const products = Array.isArray(data.products) ? data.products : [];
            const filteredData = products.filter((item) => 
            item.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            
            setSearchResultsData(filteredData);

            navigate('/searchResults', {state: { searchResultsData: filteredData }});
            
            console.log('Search results: ', filteredData);
        } catch (error) {
            console.error('Error: ', error)
        }   
    };

    return (
        <div className='py-4 flex items-center bg-shamazonOrange px-5 rounded-lg'>
            <BsSearch 
                className=' mr-4 text-3xl hover:cursor-pointer hover:text-kitsuneBlue3' 
                onClick={search}
            />
            <input 
                className=' border border-shamazonGreen px-4 py-2 w-full' 
                type="text" 
                placeholder='Search Shamazon...' 
                value={searchValue} 
                onChange={handleChange} 
                onKeyDown={(e) => {if(e.key === 'Enter') search()}} 
            />
        </div>
    );
}


export default Searchbar;