import React, { useEffect, useState } from "react";

const Menu = () => {
  const [foods, setFoods] = useState([]);

  // Fetch food items from TheMealDB API
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c") // fetch foods starting with 'c'
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setFoods(data.meals);
        }
      })
      .catch((err) => console.error("Error fetching foods:", err));
  }, []);

  return (
    <section id="menu" className="py-20 bg-gray-100 cursor-pointer">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">🍴 Our Menu</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {foods.map((food) => (
            <div
              key={food.idMeal}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={food.strMealThumb}
                alt={food.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{food.strMeal}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {food.strInstructions.slice(0, 80)}...
                </p>
                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
