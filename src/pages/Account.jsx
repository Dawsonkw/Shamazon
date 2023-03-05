import React from 'react';
import Header from '../components/Header';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import char2 from '../images/shamazonSecondCharEdit.png'

function Account(props) {

    const navigate = useNavigate();
    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                //Sign out successful
                })
                .then(navigate('/'))
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className='h-screen bg-gray-300'>
            <Header />
            <div className='flex justify-center'>
                <div className='flex-col bg-gray-300 w-screen'>
                    <div className='flex-row text-center w-full'>
                        <h2 className='text-5xl font-bold'>Welcome to Shamazon</h2>
                        <button
                            className=' p-5 bg-kitsuneBlue my-5  rounded-lg'
                            type='submit'
                            onClick={handleSubmit}
                            >
                                Sign Out
                        </button>
                    </div>
                    <p className='text-xl text-center font-bold px-5'>You can add items to your cart by navigating to the page or searching for a product and clicking on add to cart.</p>
                    <img src={char2} alt="" className='items-center justify-center mx-auto -mt-14'/>
                
                    
                </div>
            </div>
        </div>
    );
}

export default Account;