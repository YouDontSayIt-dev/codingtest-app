import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface CardData {
    id: number;
    first_name: string;
    gender: string;
    avatar: string;
}

const Cards: React.FC = () => {
    const [cardData, setCardData] = useState<CardData[]>([]);

    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user?size=10')
            .then((response) => response.json())
            .then((data) => {
                setCardData(data);
            })
            .catch((error) => {
                console.error('Error fetching card data:', error);
            });
    }, []);

    return (
        <div className="flex min-h-[92vh] flex-row flex-wrap items-center bg-black text-black justify-center p-24 border-2">
            {cardData.map((card) => (
                <div key={card.id} className="card flex flex-col flex-wrap border-2 my-5 mx-5 p-5 w-[200px] h-[200px] text-center items-center  bg-white rounded-2xl">
                    <Image src={card.avatar} alt='avatar' width={100} height={100} />
                    <h3>{card.first_name}</h3>
                    <p>{card.gender}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;