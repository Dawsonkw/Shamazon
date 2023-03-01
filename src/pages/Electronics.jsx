import React, { useState, useContext } from 'react';
import DataContext from '../context/DataContext';
import Header from '../components/Header';
import ApiHandler from '../api/ApiHandler';


function Electronics(props) {

    const electronicsData = useContext(DataContext).filter(
        (item) => item.group === 'Electronics'
      );
        

    

    return (
        <div >         
            <Header />
            <div className='px-4 py-4'>
                <h1>Electronics</h1>
                <div>
                    { electronicsData.map((product) => (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <img src={product.images[0]} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Electronics;
