import React from 'react';
import Image from 'next/image'; // Import Image component from next/image

const productData = [
    {
        img: "/ring.jpeg",
        title: "Gold Ring",
        desc: "Elegant Gold Ring - Perfect for Engagements",
        rating: 5,
        price: "150.00",
        originalPrice: "200.00"
    },
    {
        img: "/nekles.jpeg",
        title: "Diamond Necklace",
        desc: "Stunning Diamond Necklace for Special Occasions",
        rating: 4,
        price: "250.00",
        originalPrice: "300.00"
    },
    {
        img: "/ear.jpg",
        title: "Silver Earrings",
        desc: "Stylish Silver Earrings for Daily Wear",
        rating: 4,
        price: "40.00",
        originalPrice: "60.00"
    }
];

const Jewelry = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Jewelry Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productData.map((item, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md h-auto flex flex-col">
                        <Image 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-48 object-cover mb-2" 
                            width={300} // Set width according to your layout
                            height={200} // Set height according to your layout
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

export default Jewelry;
