import React from 'react';
import ProductCard from './ProductCard';

const productData = [
    {
        img: "/sports-1.webp",
        title: "Sports",
        desc: "Trekking & Running Shoes - Black",
        rating: 3,
        price: "58.00",
        originalPrice: "75.00" 
    },
    {
        img: "/watch-1.webp",
        title: "Smart Watch",
        desc: "Fitness Tracker with Heart Rate Monitor",
        rating: 4,
        price: "99.00",
        originalPrice: "150.00"
    },
    {
        img: "/watch-2.webp",
        title: "Pocket Watch",
        desc: "Vintage Style Pocket Watch",
        rating: 5,
        price: "120.00",
        originalPrice: "180.00"
    },
    {
        img: "/skirt-1.webp",
        title: "Floral Skirt",
        desc: "Lightweight and Flowing Floral Skirt",
        rating: 4,
        price: "35.00",
        originalPrice: "50.00"
    },
    {
        img: "/jacket-1.webp",
        title: "Jacket",
        desc: "Classic Jacket",
        rating: 4,
        price: "80.00",
        originalPrice: "110.00"
    },
    {
        img: "/shirt-1.webp",
        title: "Casual Shirt",
        desc: "Stylish Casual Shirt for Everyday Wear",
        rating: 5,
        price: "45.00",
        originalPrice: "60.00"
    }
];

const NewProduct = () => {
 return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">New Products</h2> {/* Corrected text size to 2xl */}

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-y-10"> {/* Fixed class names */}
                {productData.map((item, index) => (
                    <ProductCard 
                        key={index} 
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                        originalPrice={item.originalPrice} 
                    />
                ))}
            </div>
        </div>
    </div>
  );
}

export default NewProduct;
