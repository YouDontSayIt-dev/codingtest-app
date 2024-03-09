import React from 'react';


const Count = () => {
    const [count, setCount] = React.useState(0);
    const [startingCount, setStart] = React.useState(0);
    const [countType, setCountType] = React.useState('');

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
            setCountType('EVEN');
        } else {
            setCountType('ODD');
        }
    }, [count]);

    return (
        <div className="flex min-h-[92vh] flex-row items-center justify-evenly bg-primary p-24">
            {/* <h1 className="text-white text-[12px] md:text-sm lg:text-lg">Counter</h1> */}
            <div className="flex items-start justify-start w-screen">
                <button onClick={decrement} id='btn_minus' className="text-white text-4xl text-center ml-5 p-4 rounded-full bg-transparent border-2 w-[80px] h-[80px] ">-</button>
            </div>
            <div className="flex flex-col h-[70vh] items-center justify-evenly text-center p-8 lg:p-6 text-[12px] md:text-sm lg:text-lg w-screen">
                <h1 id='ds_type' className="text-white text-[40px] md:text-[50px] lg:text-[70px] md:m-10 lg:m-20">{countType}</h1>
                <h1 id='count' className="text-white text-[100px] md:text-[150px] lg:text-[200px]">{count}</h1>
                <button onClick={handleReset} id='btn_plus' className="bg-transparent hover:bg-gray-700 border-2 text-white p-2 md:p-4 lg:p-6 rounded-lg m-6 md:mt-10 lg:mt-20">Reset</button>
                
                
            </div>
            
            <div className='flex items-start justify-end w-screen'>
                <button onClick={increment} id='btn_plus' className="text-white text-xl text-center mr-5 p-4 rounded-full bg-transparent border-2 w-[80px] h-[80px]">+</button>
            </div>
            
        </div>
    );
};

export default Count;