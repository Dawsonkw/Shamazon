import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { collection, query, where, onSnapshot, getDocs, deleteDoc, limit} from 'firebase/firestore';
import { db } from '../firebase';


function Cart() {
    const location = useLocation();
    const addItemToCart = location.state?.addItemToCart || [];
    const [cartItems, setCartItems] = useState( JSON.parse(localStorage.getItem('cartItems')) || [] );
    
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const userId = user ? user.uid : null;
    
        // Firestore query retrieves all cart items for the current user then unsubs from snapshot to prevent firestore reads
        const cartItemsRef = collection(db, "cartItems");
        const q = query(cartItemsRef, where("userId", "==", userId));
    
        const unsubscribe = 
        onSnapshot(q, (snapshot) => {
          const items = [];
          snapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
          });
          
          if (items.length > 0) {
            setCartItems(items);
          }
          if (items.length > 0 ) {
            localStorage.setItem('cartItems', JSON.stringify(items));
          }
        });

        return unsubscribe;
      }, []);

    // Delete an item from the cart and the firestore database
    const deleteCartItem = async (productId) => {
        const auth = getAuth();
        const user = auth.currentUser;
        const userId = user ? user.uid : null;
    
        const cartItemsRef = collection(db, "cartItems");
        const q = query(cartItemsRef, where("userId", "==", userId), where("productId", "==", productId), limit(1));
    
        const querySnapshot = await getDocs(q);
    
        if (querySnapshot.empty) {
        console.log("No matching documents.");
        return;
        }
    
        const docRef = querySnapshot.docs[0].ref;
        await deleteDoc(docRef);

        setCartItems((prevCartItems) => {
            const updatedCartItems = prevCartItems.filter((item) => item.productId !== productId);
            return updatedCartItems;
        });
        
    
        // Remove "cartItems" key from local storage if cart is empty
        if (cartItems.length === 1) {
            localStorage.removeItem('cartItems');
        }
    };
    
    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.productPrice * item.quantity);
    }, 0)
    
    const noUserMessage = () => {
        if (!user) {
            return <h2 className='text-center text-red-500 font-bold text-xl pb-6'>You must be logged in to add items to your cart!</h2>;
        } else {
            return null;
        }
    }


    return (
        <div className='bg-gray-200'>
            <Header />
            {noUserMessage()}
            <h1 className='text-center font-bold text-5xl py-6'>Cart</h1>
           
            <h2 className='text-center font-bold text-3xl py-6'>Total Cart Price: {totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h2>
                <div className='grid grid-cols-3 gap-3 gap-x-6 my-3'>
                    {cartItems.map((item) => (
                        <div key={item.id} >
                        <div className='px-6 hover:bg-kitsuneBlue h-full pb-4'>
                            <div className='pt-4 justify-between w-full inline-flex'>
                                <h2 className='text-3xl pr-2 pb-4'>{item.productTitle}</h2>
                            </div>
                            <img src={item.thumbnail} alt="" className='mx-auto' />
                            <p>{item.productPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button 
                            onClick={() => deleteCartItem(item.productId)}
                            className='py-2 px-4 mb-2 bg-kitsuneOrange2 rounded-lg'
                            > Remove from Cart</button>
                        </div>
                    </div>
                    ))}
                </div>
        </div>
    );
}

export default Cart;
