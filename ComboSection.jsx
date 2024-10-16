import React, { useState } from 'react';
import lone from '../assets/Shipone.jpg';
import ltwo from '../assets/Shipone.jpg';
import lthree from '../assets/Shipone.jpg';
import rone from '../assets/Shipone.jpg';
import rtwo from '../assets/Shipone.jpg';
import rthree from '../assets/Shipone.jpg';

const ComboSection = () => {
  const data = [
    {
      icon: "",
      heading: "Dhow Cruise + Desert Safari",
      leftimg: lone,
      rightimg: rone,
      description: "Experience the luxury of a Dubai Dhow Cruise followed by an adrenaline-pumping desert safari in the mesmerizing Arabian dunes. Witness the sunset over the desert and enjoy activities like dune bashing, camel riding, and a traditional Arabian BBQ dinner under the stars. It’s the ideal fusion of luxury and excitement in one amazing package."
    },
    {
      icon: "",
      heading: "Dhow Cruise + Dubai City Tour Combo",
      leftimg: ltwo,
      rightimg: rtwo,
      description: "Take in the stunning night view of skyline and sights of the city as you cruise down the Dubai Marina. Then go on a thorough city tour of Dubai, sighting the Burj Khalifa, the Dubai Museum, the Jumeirah Mosque, and more. Experience the city’s rich culture, fascinating past, and cutting-edge wonders all at once."
    },
    {
      icon: "",
      heading: "Dhow Cruise + Wild Wadi Water Park",
      leftimg: lthree,
      rightimg: rthree,
      description: "Enjoy stunning views of the city’s attractions as you enjoy the picturesque Dubai Creek cruise. At Wild Wadi Water Park, an aquatic wonderland with exhilarating rides and water activities, you can later chill off and have a splash-tastic time. Enjoy this unparalleled combination of calm and adventure."
    }
  ];

  // State to track the index of the visible combo
  const [visibleIndex, setVisibleIndex] = useState(null);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8"> 
    <div className="items-center self-center">
        <h1 className="text-gray-900 text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl title-font font-medium mb-4">
        Dubai Dhow Cruise Combo Packages
        </h1>
        <div className="flex justify-center m-5">
          <p className="w-full md:w-1/2 text-center">
          Save up to 40% when you Book Dhow Cruise Dubai with any other tour. We provide Desert Safari, Dubai City Tours, Waterparks tickets, Theme Parks tickets, Shopping tours, and much more. Also, you can avail of free pick and drop (hotel transfer) when booking a Marina cruise dinner with Desert Safari. You can select your own dates, time and even discuss with us to make a complete excursion plan for you. Our dedicated guest-care team will guide you through the process.
          </p>
        </div>
      </div>{/* Add padding for different screen sizes */}
      <div className="w-full max-w-6xl"> {/* Limit the max width for responsiveness */}
        
        {/* Button row */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6"> {/* Flex-wrap for responsiveness */}
          {data.map((item, index) => (
            <div key={index} className=" p-4 mb-4 w-full sm:w-auto"> {/* Full width on small screens */}
              <button
                onClick={() => setVisibleIndex(visibleIndex === index ? null : index)}
                className="font-bold text-gray-700 active:text-orange-400 text-center w-full"
              >
                {item.icon}
                {item.heading}
              </button>
            </div>
          ))}
        </div>

        {/* Content display */}
        {data.map((item, index) => (
          visibleIndex === index && (
            <div key={index} className="w-full flex justify-center mt-4">
              <div className="w-full max-w-4xl"> {/* Set a max width for the content */}
                <div className="flex flex-col items-center"> {/* Flexbox to center elements */}
                  
                  {/* Responsive images */}
                  <div className="flex flex-col sm:flex-row justify-center w-full mb-4"> {/* Stack images on small screens */}
                    <img src={item.leftimg} alt="Left img" className="w-full sm:w-1/2 md:w-1/3 mx-2 mb-4 sm:mb-0" /> {/* Responsive left image */}
                    <img src={item.rightimg} alt="Right img" className="w-full sm:w-1/2 md:w-1/3 mx-2" /> {/* Responsive right image */}
                  </div>
                  
                  {/* Description */}
                  <div className="w-full text-center px-4 md:px-6"> {/* Add padding for better readability */}
                    <h2 className="text-lg">{item.description}</h2> {/* Center the description */}
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ComboSection;
