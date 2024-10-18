import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
    originalPrice: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, desc, rating, price, originalPrice }) => {
    return (
        <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
            <div>
                <Image 
                    className="w-full h-auto"
                    src={img}
                    width={200}
                    height={300}
                    alt={title}
                />
            </div>
            <div className="pt-4">
                
                <h2 className="text-lg font-bold uppercase">{title}</h2>
                
                <p className="text-gray-600">{desc}</p>
                
                
                <p className="text-yellow-500 font-bold text-sm">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</p>
                
                
                <div className="flex items-center space-x-2">
                    <p className="text-gray-500 line-through text-sm">${originalPrice}</p>
                    <p className="text-lg font-bold text-black">${price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
