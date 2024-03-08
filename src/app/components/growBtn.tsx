import React from 'react';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }

const GrowBTN = () => {
    const changeValue = 20;


    const grow = () => {
        const btn = document.getElementById('btn_minus');
        if (btn){
        btn.style.width = (parseFloat(getComputedStyle(btn).width) * 2) + 'px';
        btn.style.height = (parseFloat(getComputedStyle(btn).height) * 2) + 'px';
        btn.style.fontSize = (parseFloat(getComputedStyle(btn).fontSize) + 2) + 'px';
        btn.style.backgroundColor = getRandomColor();
        }

    }

    return (
        <div className="flex min-h-[92vh] flex-col items-center bg-black justify-center p-24">
            <h1 className="text-2xl text-white mb-2">Grow the button</h1>
           <button onClick={grow} id='btn_minus' className="bg-white text-black p-4 rounded-lg">Grow</button>
        </div>
    );
};

export default GrowBTN;