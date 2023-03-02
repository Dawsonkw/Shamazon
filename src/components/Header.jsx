import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
    const [searchValue, setSearchValue] = useState('');
    const addItemToCart = location.state?.addItemToCart || [];

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
        navigate('/cart');
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };



    return (
        <div >
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
                                        <a className='hover:border-kitsuneOrange2 rounded-md hover:border py-2 px-3' href="#" onClick={() => handleNavClick(item.path)}>{item.label}</a>
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
                            <Searchbar searchValue={searchValue} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <nav>
                    <ul className='flex flex-row justify-between px-3 py-6 bg-kitsuneBlue'>
                        {menuNavItems.map((item => (
                            <li key={item.path}>
                                <a className='inline-block rounded-md bg-kitsuneOrange2 hover:border-shamazonGreen hover:border hover:translate-y-0 hover:translate-x-0 py-1 px-3 mobile:text-xs sm:text-xs md:text-lg h-10 leading-10' href="#" onClick={() => handleNavClick(item.path)}>{item.label}</a>
                            </li>
                        )))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;