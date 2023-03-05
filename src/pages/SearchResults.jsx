import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { SiGhostery } from 'react-icons/si'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../firebase';

function SearchResults(props) {
    const [cartItems, setCartItems] = useState([]);
    const auth = getAuth();
    const navigate = useNavigate();
    let user = null; 

    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            user = firebaseUser;
            
        } else {
            user = null;
        }
    });

    const location = useLocation();
    const searchResultsData = location.state?.searchResultsData || [];

    if (searchResultsData.length === 0) {
        return (
            <div>
                <Header />
                <div className='flex justify-center items-center pt-60 '>
                    <SiGhostery className='text-7xl text-kitsuneBlue' />
                    <h1 className='text-2xl'>There is nothing to see here...</h1>
                </div>
            </div>
        )
    }
    const handleAddToCart = (product) => {
        const existingCartItem = cartItems.find((item) => item.id === product.id);
        console.log(product.id)
    
            // Adds item to cart, if item is already in cart, increases item by one.
            if(existingCartItem) {
                const updatedCartItems = cartItems.map((item) => 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
                setCartItems(updatedCartItems)
            } else {
                const updatedCartItems = [...cartItems, {...product, quantity: 1}];
                setCartItems(updatedCartItems);
                
                // Adds item to firestore database for later retrieval
                if (user) {
                    const cartItemsRef = collection(db, 'cartItems')
                    addDoc(cartItemsRef, {
                        //structures data to pass into firestore for storage
                        productId : product.id,
                        productTitle : product.title,
                        productPrice : product.price, 
                        thumbnail : product.thumbnail,
                        userId : user.uid, 
                        quantity : 1, 
                        createdAt: new Date(),
                        updatedAt: new Date()
                    })
                    .then(() => {
                        console.log('Cart Item added to Firestore')
                    })
                    .catch((error) => {
                        console.error('Error adding item', error)
                    });
                }
    
                navigate('/cart', { state: { addItemToCart: updatedCartItems }});
            }       
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
                                    <h2 className='text-3xl pr-2 pb-4'>{product.title}</h2>
                                    <p className='items-end'>{product.rating}</p>
                                </div>
                                <img src={product.thumbnail} alt="" className='mx-auto' />
                                <p>{product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                                <p className='pb-4'>{product.description}</p>
                                <div className='flex-col space-y-5'>
                                    <p>Available Quantity: {product.stock}</p>
                                    <button 
                                    className='py-2 px-4 mb-2 bg-kitsuneOrange2 rounded-lg'
                                    onClick={() => handleAddToCart(product)}
                                    >
                                        Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

        </div>
    );
}

export default SearchResults;