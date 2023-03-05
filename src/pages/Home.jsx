import React from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import char3 from '../images/shamazonThirdCharEdit.png'
import char4 from '../images/shamazonFourthCharEdit.png'


function Home(props) {
    return (
        <div className='bg-gray-300'>
            <div >
                <Header />
                <Carousel />
                <div className='items-center -mt-72 w-1/2  flex'>
                    <img className='' src={char3} alt="" />
                    <img className='' src={char4} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;