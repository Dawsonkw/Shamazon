import React from 'react';
import Header from '../components/Header';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

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
        <div>
            <Header />
            <h2>Welcome</h2>
            <p>This is the account page!</p>
            <button 
                className=' items-center my-5 p-5 bg-kitsuneBlue mx-auto rounded-lg' 
                type='submit'
                onClick={handleSubmit}
                >
                    Sign Out 
            </button>
        </div>
    );
}

export default Account;