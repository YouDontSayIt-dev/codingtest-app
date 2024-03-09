import React, { useEffect, useState } from 'react';

const Calculate = () => {
    const [valueOne, setValueOne] = useState<number>();
    const [valueTwo, setValueTwo] = useState<number>();
    const [result, setResult] = useState<number>(0);

    useEffect(() => {
        setResult((valueOne ?? 0) + (valueTwo ?? 0));
    }, [valueOne, valueTwo]);


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
    <div className="flex min-h-[92vh] flex-col items-center bg-primary justify-center p-24 border-2">
        <h1 className="text-white text-[12px] md:text-sm lg:text-4xl mb-20">Simple Calculator</h1>
        <div className="flex flex-col w-auto gap-2 border-2 space-y-4 items-center justify-center text-center align-top p-8 lg:p-6 text-[12px] md:text-sm lg:text-lg">
            <input type="number" placeholder='First Input' value={valueOne} className=' text-black text-center' onChange={addValueOne} />
            <input type="number" placeholder='Second Input' value={valueTwo} className='text-black text-center' onChange={addValueTwo} />
        </div>
        <div className='p-5 flex'>
            <p>
                Sum is: {result}
            </p>
            
            </div>
            <button onClick={handleReset} id='btn_plus' className="bg-white text-black p-4 rounded-lg">Reset</button>
    </div>
            
    );
}

export default Calculate;