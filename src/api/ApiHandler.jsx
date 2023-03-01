import React from 'react';
import { useState, useEffect } from 'react';
import Electronics from '../pages/Electronics';
import DataContext from '../context/DataContext';

function ApiHandler(props) {
    const [electronicsData, setElectronicsData] = useState([]);
    const [clothingData, setClothingData] = useState([]);
    const [healthBeautyData, setHealthBeautyData] = useState([]);
    const [groceriesData, setGroceriesData] = useState([]);
    const [accessoriesData, setAccessoriesData] = useState([]);
    const [homeDecoData, setHomeDecoData] = useState([]);
    const [automotiveData, setAutomotiveData] = useState([]);
    const [data, setData] = useState([]);


    const mapToCategories = {
        'smartphones': 'Electronics',
        'laptops': 'Electronics',
        'womens-dresses': 'Clothing',
        'tops': 'Clothing',
        'womens-shoes': 'Clothing',
        'mens-shirts': 'Clothing',
        'mens-shoes': 'Clothing',
        'mens-watches': 'Accessories',
        'womens-watches': 'Accessories',
        'womens-bags': 'Accessories',
        'sunglasses': 'Accessories',
        'womens-jewellery': 'Accessories',
        'fragrances':'Health and Beauty',
        'skincare': 'Health and Beauty',
        'groceries': 'Groceries',
        'home-decoration': 'Home Decoration and Furniture',
        'furniture': 'Home Decoration and Furniture',
        'lighting': 'Home Decoration and Furniture',
        'automotive': 'Automotive',
        'motorcycle': 'Automotive'
    };


    const productFetch = 'https://dummyjson.com/products/?limit=0';

    useEffect(() => {
        fetch(productFetch)
        .then(response => response.json())
        .then(data => {
          const mappedData = data.products.map(item => {
              const category = item.category;
              const group = mapToCategories[category];
              return{
                  ...item, 
                  group
              };
          }).flat();

          setData(mappedData)

          const electronics = mappedData.filter((item) => item.group === 'Electronics');
          const clothing = mappedData.filter((item) => item.group === 'Clothing');
          const healthAndBeauty = mappedData.filter((item) => item.group === 'Health and Beauty');
          const accessories = mappedData.filter((item) => item.group === 'Accessories');
          const groceries = mappedData.filter((item) => item.group === 'Groceries');
          const homeDeco = mappedData.filter((item) => item.group === 'Home Decoration and Furniture');
          const automotive = mappedData.filter((item) => item.group === 'Automotive');      
          
          setElectronicsData(electronics);
          setClothingData(clothing);
          setHealthBeautyData(healthAndBeauty);
          setAccessoriesData(accessories);
          setGroceriesData(groceries);
          setHomeDecoData(homeDeco);
          setAutomotiveData(automotive);
          
          console.log(mappedData);
        })
        .catch(error => console.error(error));

    }, [])
    
    
    


    return (
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    );
}

export default ApiHandler;

// https://dummyjson.com/docs/products PROVIDES DUMMY JSON DATA FOR THE PRODUCTS


// {products.map(product => (
//     <div key={product.id}>{product.title}</div>
// ))}

// const clothingSubcategories = Object.keys(mapSubsToCategories).filter(key => mapSubsToCategories[key] === 'Clothing');
//     const clothingData = products.filter(product => clothingSubcategories.includes(product.category));


// {categories['Electronics'] && <Electronics electronicsData={categories['Electronics']} />}