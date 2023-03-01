import React, { useContext } from 'react';
import Header from '../components/Header';
import DataContext from '../context/DataContext';

function Accessories(props) {

    const accessoriesData = useContext(DataContext).filter(
        (item) => item.group === 'Accessories'
    )

    return (
        <div >
            <Header />
            <div className='px-4 py-4'>
                <h1>Accessories</h1>
                { accessoriesData.map((product) => (
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

export default Accessories;