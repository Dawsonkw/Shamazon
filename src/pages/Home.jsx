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
                <div className='flex justify-center'>
                    <img className='' src={char3} style={{width: '400px', }} alt="" />
                    <img className='' src={char4} style={{width: '400px', }} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;