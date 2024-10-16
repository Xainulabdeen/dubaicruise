import React from 'react';

const QuickLinks = () => {
  // Define your data with titles and links
  const data = [
    { title: "Dubai Creek Deira", link: "#" },
    { title: "Al Ameerah Dinner Cruise", link: "#" },
    { title: "Lama Dubai Cruise Dinner", link: "#" },
    { title: "Al Jawhara Dhow Cruise", link: "#" },
    { title: "Sultan Sea Cruise", link: "#" },
    { title: "Falcon Oasis Dhow Cruise Deira Creek", link: "#" },
    { title: "Al Shatar Floating Restaurant Diera", link: "#" },
    { title: "Unique Dhow Cruise Creek", link: "#" },
    { title: "Jameela Dinner Cruise", link: "#" },
    { title: "Dubai Creek Al Seef", link: "#" },
    { title: "Jannat Dinner Cruise", link: "#" },
    { title: "Al Khaleej Dinner Cruise", link: "#" },
    { title: "Al Mansour Dhow Cruise", link: "#" },
    { title: "Asya Dhow Cruise", link: "#" },
    { title: "Ramee Dinner Cruise", link: "#" },
    { title: "Desert Road Dinner Cruise", link: "#" },
    { title: "Al Wasl Dhow Cruise", link: "#" },
    { title: "Xclusive Dinner Cruise", link: "#" },
    { title: "Alexandra Dhow Cruise", link: "#" },
    { title: "Lotus Yacht Dinner Cruise", link: "#" },
    { title: "Dubai Marina Dinner Cruise", link: "#" },
    { title: "RIKKS Marina Dinner Cruise", link: "#" },
    { title: "Ocean Empress Dinner Cruise", link: "#" },
    { title: "Rayna Dhow Cruise", link: "#" },
    { title: "Oberoi Monalisa White Cruise", link: "#" },
    { title: "Royal Vision Dhow Cruise", link: "#" },
    { title: "Alishba Dhow Cruise", link: "#" },
    { title: "Dorby Dhow Cruise", link: "#" },
  ];

  return (
    <section className="flex flex-col self-center overflow-hidden container mx-auto px-5 py-10">
    <div className='flex justify-center m-10 p-10'>
      <h1 className='text-3xl font-bold  w-1/4'>Quick Links</h1>
      <div className='flex  w-full  flex-wrap justify-center '>
        {data.map((item, index) => (
          <div key={index} className='mr-4 mb-2 self-start'>
            <p>
              <a href={item.link} className='text-gray-700 font-semibold'>
                {item.title}
              </a>
              {index < data.length - 1 && <span> | </span>} {/* Add separator except for the last item */}
            </p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default QuickLinks;
