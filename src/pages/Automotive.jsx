import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import DataContext from '../context/DataContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase';

function Automotive(props) {
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    const automotiveData = useContext(DataContext).filter(
        (item) => item.group === 'Automotive'
    )

    const handleAddToCart = (product, user) => {
        const existingCartItem = cartItems.find((item) => item.id === product.id);

        if(existingCartItem) {
            const updatedCartItems = cartItems.map((item) => 
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            );
            setCartItems(updatedCartItems)
        } else {
            const updatedCartItems = [...cartItems, {...product, quantity: 1}];
            setCartItems(updatedCartItems);
            navigate('/cart', { state: { addItemToCart: updatedCartItems }});
        }      
    }  



    return (
        <div>
            <Header />
            <div className='px-4 py-4 bg-gray-200'>
                <h1 className='text-center font-bold text-5xl py-6'>Automotive</h1>
                <div className='grid grid-cols-3 mx-4 gap-3 gap-x-6 my-3'>
                    { automotiveData.map((product) => (
                        <div key={product.id} >
                        <div className='px-6 hover:bg-kitsuneBlue h-full pb-4'>
                            <div className='pt-4 justify-between w-full inline-flex'>
                                <h2 className='text-3xl pr-2 pb-4'>{product.title}</h2>
                                <p className='items-end'>{product.rating}</p>
                            </div>
                            <img src={product.thumbnail} alt="" className='mx-auto' />
                            <p>{product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                            <p className='pb-4'>{product.description}</p>
                            <div className='flex-col space-y-5'>
                                <p>Available Quantity: {product.stock}</p>
                                <button className='py-2 px-4 my-2 bg-kitsuneOrange2' onClick={() => handleAddToCart(product)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Automotive;