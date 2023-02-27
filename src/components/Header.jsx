import React from 'react';
import logo from '../images/shamazonLogoEdit2.png'
import Searchbar from './Searchbar';

function Header() {
    return (
        <div>
            
            <div className='flex px-3 bg-kitsuneBlue3'>
                
                <div className='flex-col mb-2'>
                    <img src={logo}  alt="" className='-mt-2 -px-5 items-center' />
                    <h1 className='text-6xl text-center -mt-4'>Shamazon</h1>
                    <p className='text-center'>E-commerce for the modern era</p>
                </div>

                <div className='flex flex-col justify-center mx-auto'>
                    
                    <div className='flex flex-row space-x-32 items-center px-5 mb-5'>
                        <div>
                            <h2 className='hover:cursor-pointer'>Account Feature</h2>
                        </div>
                        <div>
                            <h2 className='hover:cursor-pointer'>Cart Feature</h2>
                        </div>
                        <div>
                            <h2 className='hover:cursor-pointer'>User Login portal</h2>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <Searchbar />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='flex flex-row justify-between px-3 py-4 bg-kitsuneOrange'>
                <div>
                    <h2 className='hover:cursor-pointer'>
                        Electronics
                    </h2>
                </div>
                
                <div>
                    <h2 className='hover:cursor-pointer'>
                        Clothing
                    </h2>
                </div>
                
                <div>
                    <h2 className='hover:cursor-pointer'>
                        Health and Beauty
                    </h2>
                </div>
                
                <div>
                    <h2 className='hover:cursor-pointer'>
                        Watches and Jewelery
                    </h2>
                </div>
                
                <div>
                    <h2 className='hover:cursor-pointer'>
                        Groceries
                    </h2>
                </div>
                
                <div>
                    <h2 className='hover:cursor-pointer'>
                        Home Decoration
                    </h2>
                </div>
                
                <div>
                    <h2 className='hover:cursor-pointer'>
                        Automotive
                    </h2>
                </div>

            </div>
        </div>
    );
}

export default Header;