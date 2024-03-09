import React, { useEffect, useState } from 'react';

const Calculate = () => {
    const [valueOne, setValueOne] = useState<number>(); // State variable for the first input value
    const [valueTwo, setValueTwo] = useState<number>(); // State variable for the second input value
    const [result, setResult] = useState<number>(0); // State variable for the sum of the two input values

    useEffect(() => {
        setResult((valueOne ?? 0) + (valueTwo ?? 0)); // Update the result whenever the input values change
    }, [valueOne, valueTwo]);


    const addValueOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numValue = parseInt(e.target.value);
        if (numValue <= 0){
            setValueOne(0); // If the input value is less than or equal to 0, set it to 0
        }else{
            setValueOne(numValue); // Otherwise, set it to the parsed integer value
        }
    }

    const addValueTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numValue = parseInt(e.target.value);
        if (numValue <= 0){
            setValueTwo(0); // If the input value is less than or equal to 0, set it to 0
        }else{
            setValueTwo(numValue); // Otherwise, set it to the parsed integer value
        }
    }

    const handleReset = () => {
        setValueOne(0); // Reset the first input value to 0
        setValueTwo(0); // Reset the second input value to 0
    }

    return (
    <div className="flex min-h-[92vh] flex-col items-center bg-primary justify-center p-24">
        <h1 className="text-white text-[12px] md:text-sm lg:text-4xl mb-20">Simple Calculator</h1>
        <div className="flex flex-col w-auto gap-2 border-2 space-y-4 items-center justify-center text-center align-top p-8 lg:p-6 text-[12px] md:text-sm lg:text-lg">
            <input type="number" placeholder='First Input' value={valueOne} className=' text-black text-center' onChange={addValueOne} />
            <input type="number" placeholder='Second Input' value={valueTwo} className='text-black text-center' onChange={addValueTwo} />
        </div>
        <div className='p-5 flex'>
            <p>
                Sum is: {result} {/* Display the sum of the two input values */}
            </p>
            
            </div>
            <button onClick={handleReset} id='btn_plus' className="bg-white text-black p-4 rounded-lg">Reset</button>
    </div>
            
    );
}

export default Calculate;