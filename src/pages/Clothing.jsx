import React, { useState, useContext } from 'react';
import DataContext from '../context/DataContext';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';


function Clothing(props) {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const auth = getAuth();
    let user = null; 

    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            user = firebaseUser;
            console.log(user.uid)
        } else {
            user = null;
        }
    });

    const clothingData = useContext(DataContext).filter(
        (item) => item.group === 'Clothing'
    )

    const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

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
        <div>
            <Header />
            <div className='px-4 py-4 bg-gray-300'>
                <h1 className='text-center font-bold text-5xl py-6'>Clothing</h1>
                <div className='grid grid-cols-3 mx-4 gap-3 gap-x-6 my-3'>
                    { clothingData.slice(0, 1).concat(clothingData.slice(2)).map((product) => (
                        <div key={product.id} >
                        <div className='px-6 hover:bg-kitsuneBlue h-full pb-4' >
                            <div className='pt-4 justify-between w-full inline-flex'>
                                <h2 className='inline-flex text-3xl pr-2 pb-4'>{product.title}</h2>
                                <p className='items-end'>Rating: {product.rating} / 5</p>
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

export default Clothing;