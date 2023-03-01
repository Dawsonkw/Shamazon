import React, { useContext } from 'react';
import Header from '../components/Header';
import DataContext from '../context/DataContext';

function Automotive(props) {

    const automotiveData = useContext(DataContext).filter(
        (item) => item.group === 'Automotive'
    )

    return (
        <div>
            <Header />
            <div className='px-4 py-4'>
                <h1>Automotive</h1>
                { automotiveData.map((product) => (
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

export default Automotive;