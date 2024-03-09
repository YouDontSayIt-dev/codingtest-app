import React from 'react';

// Function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

// Component for the Grow Button
const GrowBTN = () => {
  const changeValue = 20;

  // Function to handle the button click event
  const grow = () => {
    const btn = document.getElementById('btn_minus');
    const btn_txt = document.getElementById('grow_txt');
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    if (btn) {
      const newWidth = parseFloat(getComputedStyle(btn).width) * 2;
      const newHeight = parseFloat(getComputedStyle(btn).height) * 2;
      const newFontSize = parseFloat(getComputedStyle(btn).fontSize) + 2;
      const txtnewFontSize = btn_txt ? parseFloat(getComputedStyle(btn_txt).fontSize) + 2 : 0;

      // Check if the new dimensions are within the viewport
      if (newWidth <= viewportWidth && newHeight <= viewportHeight && btn_txt) {
        btn.style.width = newWidth + 'px';
        btn.style.height = newHeight + 'px';
        btn.style.fontSize = newFontSize + 'px';
        btn.style.backgroundColor = getRandomColor();
        btn_txt.style.fontSize = txtnewFontSize + 'px';
      }
    }
  }

  return (
    <div className="flex min-h-[92vh] flex-col items-center bg-primary justify-center p-24">
      <h1 id="grow_txt" className="text-2xl text-white mb-2">Grow the button</h1>
       <button onClick={grow} id='btn_minus' className="bg-white text-black p-4 rounded-lg">Grow</button>
    </div>
  );
};

export default GrowBTN;