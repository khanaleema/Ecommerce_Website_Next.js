import React from 'react';
import Image from 'next/image'; 

const productData = [
    {
        img: "/frok.webp",
        title: "Floral Dress",
        desc: "Elegant Floral Dress for Every Occasion",
        rating: 5,
        price: "75.00",
        originalPrice: "100.00"
    },
    {
        img: "/beg.jpg",
        title: "Handbag",
        desc: "Stylish Handbag - Perfect for Daily Use",
        rating: 4,
        price: "55.00",
        originalPrice: "80.00"
    },
    {
        img: "/skirt.webp",
        title: "Pencil Skirt",
        desc: "Classic Pencil Skirt - Versatile and Chic",
        rating: 4,
        price: "40.00",
        originalPrice: "60.00"
    }
];

const Womens = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Women&apos;s Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productData.map((item, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md h-auto flex flex-col">
                        <Image 
                            src={item.img} 
                            alt={item.title} 
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

export default Womens;
