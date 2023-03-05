import React, { useEffect, useState } from 'react';
import ApiHandler from '../api/ApiHandler';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/?limit=0')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProducts(data.products.sort(() => Math.random() - 0.5));
          })
        
        .catch(error => console.error(error));
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,  
    }

    return (
        <div className='-mb-52'>
            <div>
                <h1 className='text-center text-6xl bg-gray-300 py-5'>Here are some of the items we sell on Shamazon!</h1>
            </div>
            <div className='bg-gray-300 px-8 py-10 -my-20'>
                <div className=' max-h-1/2 py-6'>
                    <Slider {...settings} >
                    {products.map((item, index) => (
                        <div key={index}>
                            <h3 className='text-center text-2xl'>{item.title}</h3>
                            <img className='object-center mx-auto my-5 px-2 max-h-200' src={item.images[0]} alt={item.title} />
                            <p className='text-center text-lg'>Price: {item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Carousel;