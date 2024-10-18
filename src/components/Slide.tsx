import React from 'react';
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
    return (
        <div className="outline-none border-none relative p-4"> 
            <Image
                className="w-full h-[250px] md:h-auto rounded-xl object-cover object-left" 
                src={img}
                alt="banner"
                width={2000}
                height={2000}
            />
            <div className="absolute left-20 top-[50%] -translate-y-[50%] max-w-[300px] bg-[#ffffffa] p-4 rounded-lg z-10"> {/* Adjusted padding and max width */}
                <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
                <h2 className="text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
                    {mainTitle}
                </h2>
                <h3 className="text-[24px] text-gray-500">
                    starting at{" "}
                    <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
                    .00
                </h3>
                <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
                    Shop Now
                </div>
            </div>
        </div>
    );
};

export default Slide;
