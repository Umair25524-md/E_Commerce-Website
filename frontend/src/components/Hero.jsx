// import React from 'react';
// import model2 from '../assets/model2.jpg';
// import model1 from '../assets/model.jpg';
// import model3 from '../assets/kohli.jpg';

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row border border-gray-400">
//       <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
//         <div className="text-[#414141]">
//           <div className="flex items-center gap-2">
//             <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//             <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
//           </div>
//           <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
//             Latest Arrivals
//           </h1>
//           <div className="flex items-center gap-2 mt-2">
//             <button className="font-semibold text-sm md:text-base hover:underline">
//               SHOP NOW
//             </button>
//             <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
//           </div>
//         </div>
//       </div>
//       <img
//         src={model2}
//         className="w-full h-[500px] sm:w-1/2 object-cover"
//         alt="Fashion model showcasing latest arrivals"
//       />
//     </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';
import model1 from '../assets/model1.jpg';
import model2 from '../assets/model2.jpg';
import model3 from '../assets/model3.jpg';
import model4 from '../assets/model4.jpg';

const images = [model1, model2, model3,model4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <button className="font-semibold text-sm md:text-base hover:underline">
              SHOP NOW
            </button>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <img
        src={images[currentImage]}
        className="w-full h-[450px] sm:w-1/2 object-cover transition-opacity duration-1000 ease-in-out"
        alt="Fashion model showcasing latest arrivals"
      />
    </div>
  );
};

export default Hero;
