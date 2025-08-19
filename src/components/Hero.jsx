import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 md:pt-24 bg-gradient-to-br from-green-50 to-emerald-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Delicious Food
                <span className="block text-green-600">Delivered Fast</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Experience the finest cuisine from the comfort of your home.  
                Fresh ingredients, authentic flavors, and lightning-fast delivery.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#order"
                className="bg-green-600 text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-green-700 transition"
              >
                🍕 Order Now
              </a>
              <a
                href="#menu"
                className="bg-white border border-green-600 text-green-600 text-lg px-8 py-4 rounded-full shadow-md hover:bg-green-50 transition"
              >
                📖 View Menu
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>30 Min Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Fresh Ingredients</span>
              </div>
            </div>
          </div>

          {/* Right Content - Food Image Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center space-y-4">
                <div className="text-6xl">🍕</div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Margherita Pizza
                </h3>
                <p className="text-gray-600">
                  Fresh mozzarella, basil & tomato sauce
                </p>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-xl">⭐</span>
                  <span className="text-xl">⭐</span>
                  <span className="text-xl">⭐</span>
                  <span className="text-xl">⭐</span>
                  <span className="text-xl">⭐</span>
                  <span className="text-sm text-gray-600 ml-2">(4.9)</span>
                </div>
                <div className="text-3xl font-bold text-green-600">₹18.99</div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <div className="text-2xl">🚚</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-100 rounded-full p-3 shadow-lg">
              <div className="text-2xl">🔥</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
