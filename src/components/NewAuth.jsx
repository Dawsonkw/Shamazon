import React, { useContext, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { BiShow } from 'react-icons/bi';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import logo from '../images/shamazonLogoEdit2.png'
import Header from './Header';



function NewAuth(props) {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false); 
    const [inputClass, setInputClass] = useState('text-gray-400');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate(); //Change this constant name to something more apt when you get the routing workiog

    // defines authentication for firebase authentication feature
    // Used in both login and password reset features 
    const auth = getAuth();

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === 'email') {
            setEmail(value);
            setInputClass(value || email ? 'text-black' : 'text-gray-400');
        } else {
            setPassword(value);
            setInputClass(value || password ? 'text-black' : 'text-gray-400')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try{
            
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                navigate('/account') // Routes to a dummy page for now, can route wherever
                // const user = userCredential.user;
                
            })
        } catch(error) {
            setError('Invalid email or password')
        }
    }; 

    const loadIcon = () => setLoading(!loading)

    const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red',
        position: 'absolute',
        top: '50%',
        left: '49%',
        transform: 'translate(-50%, -50%)',
    };

    const resetTrigger = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            Swal.fire({ //On successful account creation SWAL fires the confirmation
                icon: 'success',
                title: "We've sent an email to your account with details on how to reset your password"
              })  
        })
        .catch((error) => {
            console.log('Error sending password reset email', error)
        })
    }


    return (
        <div className='bg-gray-300'>
            <Header />
            <div className='mt-10 w-1/2 pb-4 pt-4 mx-auto bg-gray-300'>
                <div className='bg-kitsuneBlue3 rounded-lg p-6 shadow-lg mx-5 pt-5 pb-20 font-robotoSlab'>
                <h1 className='text-center text-5xl font-bold'>Shamazon User Login</h1>
                <p className='text-center py-2'>"Bringing packages, to people. Wherever they may be"</p>
                <img className='flex mx-auto' src={logo} alt="Logo of a blond man riding a delivery cart" />
            
                    <form onSubmit={handleSubmit}  className='bg-gray-200 rounded-lg p-6' action="" autoComplete='off'>
                        <div className='mb-4'>
                            <label htmlFor="email">Email</label>
                            <input
                            type="text"
                            className='mb-5 w-full border border-kitsuneBlue p-2 rounded-lg'
                            id='email'
                            placeholder='Enter your email'
                            onChange={(event)=> setEmail(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <div className='flex-row w-full relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className='mb-5 w-full border border-kitsuneBlue p-2 rounded-lg'
                                    placeholder='Enter your password'
                                    onChange={(event)=> setPassword(event.target.value)}
            
                                />
                                <div className='absolute right-3 top-3 cursor-pointer hover:text-kitsuneBlue text-xl'
                                    onClick={() => setShowPassword(!showPassword)}>
                                    <BiShow />
                                </div>
                            </div>
                        </div>
                            <div className='flex justify-center'>
                                <div className='inline-flex relative content-center'>
                                    <button
                                    // onClick is going to take in the loadIcon function which displays a loading animation as well as the errorRemover function which will remove any error that is created through the form validation
                                        onClick={() => {
                                            if (!loading) {
                                            loadIcon(true);
                                            }
                                        }}
                                        className='bg-kitsuneBlue hover:bg-kitsuneBlue3 font-medium py-2 rounded-lg px-16'
                                        type='submit'
                                        >
                                        Login
                                    </button>
                                <div className='pt-2'>
                                    {loading && (
                                        <RingLoader
                                            color={'#000000'}
                                            loading={loading}
                                            cssOverride={override}
                                            size={25}
                                            aria-label='Loading Spinner'
                                            data-testid='loader'
                                        /> // Ringloader animation is only going to display when the button is clicked and only as long as it takes to load the next page, next page emulation is being provided through the timeout function at top.
                                    )}
                                </div>
                                <div className='flex-col '>
                                    <div className=''>
                                        <p onClick={() => navigate('/creator')} className='text-left ml-5 hover:text-kitsuneBlue hover:cursor-pointer' type='submit'>
                                            Create Account
                                        </p>
                                    </div>
                                    <div className=''>
                                        <p onClick={resetTrigger} className='text-left ml-5 hover:text-kitsuneBlue hover:cursor-pointer'>
                                            Forgot Password
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewAuth;