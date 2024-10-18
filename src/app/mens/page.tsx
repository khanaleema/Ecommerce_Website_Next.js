import React from 'react';
import Image from 'next/image';

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
        img: "/shirt-1.webp",
        title: "Casual Shirt",
        desc: "Stylish Casual Shirt for Everyday Wear",
        rating: 5,
        price: "45.00",
        originalPrice: "60.00"
    }
];

const Mens = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Men&apos;s Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productData.map((item, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md h-auto flex flex-col">
                        <Image 
                            src={item.img} 
                            alt={`Image of ${item.title}`} // More descriptive alt text
                            className="w-full h-48 object-cover mb-2" 
                            width={300} // Set the width according to your layout
                            height={200} // Set the height according to your layout
                        />
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-red-600 font-bold">${item.price}</span>
                            <span className="line-through text-gray-500">${item.originalPrice}</span>
                        </div>
                        <div className="mt-1">
                            <span className="text-yellow-500">{"⭐".repeat(item.rating)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mens;
