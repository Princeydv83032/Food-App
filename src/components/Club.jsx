import React from "react";
import clubVideo from "../assets/2022395-hd_1920_1080_30fps.mp4"; // adjust path based on your folder

const Club = () => {
  return (
   <section id="club" className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={clubVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
          Welcome to the Club
        </h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl shadow-lg mb-6">
          🎟️ Buy Tickets
        </button>
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-80">
          <input
            type="text"
            placeholder="Search for shows..."
            className="flex-1 outline-none text-black px-2"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Club;
