import React, { useEffect, useState } from 'react';

const Calculate = () => {
    const [valueOne, setValueOne] = useState<number>(0);
    const [valueTwo, setValueTwo] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [initialValue, setInitialValue] = useState<number>(0);

    if (valueOne === null && valueTwo === null) {
        throw new Error("Please enter a number.");
    }else{
        useEffect(() => {
            setResult(valueOne + valueTwo);
        }, [valueOne, valueTwo]);
    }

    const addValueOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numValue = parseInt(e.target.value);
        if (numValue <= 0){
            setValueOne(0);
        }else{
            setValueOne(numValue);
        }
    }

    const addValueTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numValue = parseInt(e.target.value);
        if (numValue <= 0){
            setValueTwo(0);
        }else{
            setValueTwo(numValue);
        }
    }

    const handleReset = () => {
        setValueOne(0);
        setValueTwo(0);
    }

    

    return (
        
        <div className="flex min-h-[92vh] flex-col items-center bg-black justify-center p-24">
        <h1 className="text-white text-[12px] md:text-sm lg:text-lg">Simple Calculator</h1>
        <div className="flex space-x-4 items-center justify-center text-center align-top p-8 lg:p-6 text-[12px] md:text-sm lg:text-lg">
            <input type="number" value={valueOne} className='text-black' onChange={addValueOne} />
            <input type="number" value={valueTwo} className='text-black' onChange={addValueTwo} />
            
        </div>
        <div className='p-5'>{result}</div>
        <button onClick={handleReset} id='btn_plus' className="bg-white text-black p-4 rounded-lg">Reset</button>
    </div>
            
    );
}

export default Calculate;