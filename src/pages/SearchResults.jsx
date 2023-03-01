import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { SiGhostery } from 'react-icons/si'

function SearchResults(props) {
    const location = useLocation();
    const searchResultsData = location.state?.searchResultsData || [];

    if (searchResultsData.length === 0) {
        return (
            <div>
                <Header />
                <div className='flex justify-center items-center pt-60 '>
                    <SiGhostery className='text-7xl text-kitsuneBlue' />
                    <h1 >There is nothing to see here...</h1>
                </div>
            </div>
        )
    }


    return (
        <div className='bg-gray-200'>
            <Header />
                <h1 className='text-center font-bold text-5xl py-6'>Search Results: </h1>
                    <div className='grid grid-cols-2 gap-3 gap-x-6 my-3'>
                        {searchResultsData.map((product) => (
                            <div key={product.id} >
                            <div className='px-6 hover:bg-kitsuneBlue h-full pb-4'>
                                <div className='pt-4 justify-between w-full inline-flex'>
                                    <h2 className='text-3xl pr-2'>{product.title}</h2>
                                    <p className='items-end'>{product.rating}</p>
                                </div>
                                <img src={product.thumbnail} alt="" className='mx-auto' />
                                <p>{product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                                <p className='pb-4'>{product.description}</p>
                                <div className='flex-col space-y-5'>
                                    <p>Available Quantity: {product.stock}</p>
                                    <button className='py-2 px-4 mb-2 bg-kitsuneOrange2 rounded-lg'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

        </div>
    );
}

export default SearchResults;