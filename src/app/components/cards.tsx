import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Define the shape of the card data
interface CardData {
    id: number;
    first_name: string;
    gender: string;
    avatar: string;
}

const Cards: React.FC = () => {
    // State to hold the card data
    const [cardData, setCardData] = useState<CardData[]>([]);

    useEffect(() => {
        // Fetch card data from the API when the component mounts
        fetch('https://random-data-api.com/api/users/random_user?size=10')
            .then((response) => response.json())
            .then((data) => {
                // Update the card data state with the fetched data
                setCardData(data);
            })
            .catch((error) => {
                console.error('Error fetching card data:', error);
            });
    }, []);

    return (
        <div className="flex min-h-[92vh] flex-row flex-wrap items-center bg-primary text-black justify-center p-24">
            {cardData.map((card) => (
                <div key={card.id} className="card flex flex-col flex-wrap  border-2 m-3 p-3 w-[165px] h-[165px]
                md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] text-center items-center justify-center  bg-white rounded-2xl">
                    <Image className='border-2 rounded-full border-black md:w-[130px] md:h-[130px] 
                    lg:w-[150px] lg:h-[150px]' src={card.avatar} alt='avatar' width={70} height={70} />
                    <h3 className='text-sm md:text-[18px] lg:text-2xl'>{card.first_name}</h3>
                    <p className='text-sm md:text-[18px] lg:text-2xl'>{card.gender}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;