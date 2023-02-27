import React from 'react';
import { useState, useEffect } from 'react';

function ApiHandler() {
    
    // const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setresults] = useState([]);
    // the useEffect hook is telling react that the component needs to do something after render. In this case the Api call is made, data is recieved and then applied to the structure that we have set in our other component that creates the page itself. 
    useEffect(() => {
        const api1 = 'https://dummyjson.com/products/?limit=0';
        const api2 = 'https://dummyjson.com/products/categories';
        const promises = [fetch(api1), fetch(api2)];
        Promise.all(promises)
        .then(responses => {
            return Promise.all(responses.map(res => res.json()))
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setresults(result);
                console.log(result); 
            },
            // Error Handling
            // (error) => {
            //     setIsLoaded(true);
            //     setError(error);
            // }
        )
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default ApiHandler;

// https://dummyjson.com/docs/products PROVIDES DUMMY JSON DATA FOR THE PRODUCTS