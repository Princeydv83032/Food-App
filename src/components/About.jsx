import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">👨‍🍳 About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-green-600">Our Club</span>!  
          We bring together the best of food, music, and nightlife to give you 
          an unforgettable experience. From delicious meals made with love to 
          exciting events and shows, our mission is to create moments you’ll 
          cherish forever.  
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🎶 Music</h3>
            <p className="text-gray-600">Live DJs and performances to keep the vibes going all night.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🍔 Food</h3>
            <p className="text-gray-600">Delicious meals crafted with fresh ingredients and bold flavors.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🥂 Drinks</h3>
            <p className="text-gray-600">Signature cocktails and refreshing beverages to elevate your night.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
