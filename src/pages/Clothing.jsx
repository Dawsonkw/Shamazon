import React, { useContext } from 'react';
import Header from '../components/Header';
import DataContext from '../context/DataContext';

function Clothing(props) {

    const clothingData = useContext(DataContext).filter(
        (item) => item.group === 'Clothing'
    )

    return (
        <div>
            <Header />
            <div className='px-4 py-4'>
                <h1>Clothing</h1>
                { clothingData.map((product) => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <img src={product.images[0]} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clothing;