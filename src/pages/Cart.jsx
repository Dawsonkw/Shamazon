import React, { useContext } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

function Cart() {
    const location = useLocation();
    const addItemToCart = location.state?.addItemToCart || [];
    console.log(addItemToCart)

    return (
        <div className='bg-gray-200'>
            <Header />
            <h1 className='text-center font-bold text-5xl py-6'>Cart</h1>
                <div className='grid grid-cols-3 gap-3 gap-x-6 my-3'>
                    {addItemToCart.map((product) => (
                        <div key={product.id} >
                        <div className='px-6 hover:bg-kitsuneBlue h-full pb-4'>
                            <div className='pt-4 justify-between w-full inline-flex'>
                                <h2 className='text-3xl pr-2 pb-4'>{product.title}</h2>
                            </div>
                            <img src={product.thumbnail} alt="" className='mx-auto' />
                            <p>{product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                            <p>Quantity: {product.quantity}</p>
                        </div>
                    </div>
                    ))}
                </div>
        </div>
    );
}

export default Cart;

//