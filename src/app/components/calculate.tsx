import React, { useEffect, useState } from 'react';

const Calculate = () => {
    const [valueOne, setValueOne] = useState<number>(0);
    const [valueTwo, setValueTwo] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    if (valueOne === null && valueTwo === null) {
        throw new Error("Please enter a number.");
    }else{
        useEffect(() => {
            setResult(valueOne + valueTwo);
        }, [valueOne, valueTwo]);
    }

    

    return (
        <div className="flex align-middle justify-center border-2">
            <input type="number" className='text-black' onChange={(e) => setValueOne(parseInt(e.target.value))} />
            <input type="number" className='text-black' onChange={(e) => setValueTwo(parseInt(e.target.value))} />
            <h1>{result}</h1>
        </div>
    );
}

export default Calculate;