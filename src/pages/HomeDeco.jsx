import React, { useContext } from 'react';
import Header from '../components/Header';
import DataContext from '../context/DataContext';

function HomeDeco(props) {

    const homeDecoData = useContext(DataContext).filter(
        (item) => item.group === 'Home Decoration and Furniture'
    )

    return (
        <div >
            <Header />
            <div className='px-4 py-4'>
                <h1>Home Decoration and Furniture</h1>
                { homeDecoData.map((product) => (
                    <div key={product.id} >
                        <h2>{product.title}</h2>
                        <img src={product.images[0]} alt="" />
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeDeco;