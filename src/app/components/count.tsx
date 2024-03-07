import React from 'react';


const Count = () => {
    const [count, setCount] = React.useState(0);
    const [startingCount, setStart] = React.useState(0);
    const [countType, setCountType] = React.useState('Even' || 'Odd');

    const handleReset = () => {
        setCount(startingCount);
    };
  
    const increment = () => {
        setCount(count + 1);
    };
  
    const decrement = () => {
        if (count <= 0) {
            setCount(startingCount);
    } else {
        setCount(count - 1);
        }
        
    };

    React.useEffect(() => {
        if (count % 2 === 0) {
            setCountType('Even');
        } else {
            setCountType('Odd');
        }
    }, [count]);

    return (
        <div className="flex min-h-[92vh] flex-col items-center bg-black justify-center p-24">
            <h1 className="text-white text-[12px] md:text-sm lg:text-lg">Counter</h1>
            <div className="flex space-x-4 items-center justify-center text-center align-top p-8 lg:p-6 text-[12px] md:text-sm lg:text-lg">
                <button onClick={decrement} id='btn_minus' className="bg-white text-black p-4 rounded-lg">-</button>
                <h1 id='count' className="text-white text-[12px] md:text-sm lg:text-lg">{count}</h1>
                <button onClick={increment} id='btn_plus' className="bg-white text-black p-4 rounded-lg">+</button>
            </div>
            <button onClick={handleReset} id='btn_plus' className="bg-white text-black p-4 rounded-lg">Reset</button>
            <h1 id='ds_type' className="text-white text-[12px] md:text-sm lg:text-lg">{countType}</h1>
        </div>
    );
};

export default Count;