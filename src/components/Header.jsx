import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/shamazonLogoEdit2.png'
import Searchbar from './Searchbar';
import ApiHandler from '../api/ApiHandler';
import {HiOutlineShoppingCart} from 'react-icons/hi'
import Home from '../pages/Home';
import NewAuth from './NewAuth';
import Account from '../pages/Account';
import Electronics from '../pages/Electronics';
import Clothing from '../pages/Clothing';
import HealthBeauty from '../pages/HealthBeauty';
import Groceries from '../pages/Groceries';
import HomeDeco from '../pages/HomeDeco';
import Automotive from '../pages/Automotive';
import Accessories from '../pages/Accessories';

function Header() {

    const navigate = useNavigate();

    const topNavItems = [
        {label: 'Home', path: '/', component: <Home />},
        {label: 'Account', path: '/account', component: <Account />},
        {label: 'Login', path: '/userAuth', component: <NewAuth /> }, 
    ];

    const menuNavItems = [
        {label: 'Electronics', path: '/electronics', component: <Electronics /> },
        {label: 'Clothing', path: '/clothing', component: <Clothing /> },
        {label: 'Health and Beauty', path: '/healthBeauty', component: <HealthBeauty /> },
        {label: 'Accessories', path: '/accessories', component: <Accessories />},
        {label: 'Groceries', path: '/groceries', component: <Groceries /> },
        {label: 'Home Decoration and Furniture', path: '/homeDeco', component: <HomeDeco /> },
        {label: 'Automotive', path: '/automotive', component: <Automotive /> }
    ]

    function handleNavClick(path) {
        navigate(path)
    }

    function cartClick() {
        navigate('/cart')
    }


    return (
        <div >
            {/* API HANDLER CAN BE MOVED TO A BETTER PLACE WHEN WE GET THE SITE MORE ESTABLISHED */}
            <ApiHandler />

            <div className='flex px-3 bg-kitsuneBlue3'>
                
                <div className='flex-col mb-2'>
                    <img src={logo}  alt="" className='-mt-2 -px-5 items-center' />
                    <h1 className='text-6xl text-center -mt-4'>Shamazon</h1>
                    <p className='text-center'>"Bringing packages, to people. Wherever they may be"</p>
                </div>

                <div className='flex flex-col justify-center mx-auto w-full'>
                    
                    <div className='flex flex-row justify-between px-5 mb-5 w-full'>
                        <nav className='flex flex-row justify-between px-5 mb-5 w-full'>
                            <ul className='flex flex-row justify-between px-5 mb-5 w-full'>
                                {topNavItems.map((item) => (
                                    <li key={item.path}>
                                        <a className='hover:border-shamazonOrange hover:border py-2 px-3' href="#" onClick={() => handleNavClick(item.path)}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div>
                            <h2 onClick={cartClick} className='hover:cursor-pointer hover:text-shamazonOrange text-4xl justify-end ml-10'><HiOutlineShoppingCart /></h2>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <Searchbar />
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <nav>
                    <ul className='flex flex-row justify-between px-3 py-4 bg-kitsuneBlue'>
                        {menuNavItems.map((item => (
                            <li key={item.path}>
                                <a className='hover:border-kitsuneOrange2 hover:border py-2 px-3' href="#" onClick={() => handleNavClick(item.path)}>{item.label}</a>
                            </li>
                        )))}
                    </ul>
                </nav>
                
                
                
                
                {/* <div>
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
                </div> */}

            </div>
        </div>
    );
}

export default Header;