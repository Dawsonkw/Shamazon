import React, { useContext } from 'react';
import Header from '../components/Header';
import DataContext from '../context/DataContext';

function HealthBeauty(props) {
    
    const healthBeautyData = useContext(DataContext).filter(
        (item) => item.group === 'Health and Beauty'
    )

    return (
        <div>
            <Header />
            <div className='px-4 py-4'>
                <h1>Health and Beauty</h1>
                { healthBeautyData.map((product) => (
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

export default HealthBeauty;