

import React from "react";
import appetizer2 from "../assets/appetizer2.jpeg"
import rice from "../assets/blackPlate.jpg"
import meat from "../assets/meat.jpg"
import noodles from "../assets/noodles2.jpeg"

const appetizers = [
  {
    name: "Smoked Salmon",
    description: "Freshly smoked salmon served with a delicate lemon-dill sauce.",
    image: appetizer2,
    price: "$13.49"
  },
  // {
  //   name: "Spicy Beef Skewers",
  //   description: "Grilled beef marinated in a fiery blend of spices, served with a cooling yogurt dip.",
  //   image: meat,
  //   price: "$14.99" // Adjusted price for variety
  // },
  // {
  //   name: "Vegetable Spring Rolls",
  //   description: "Crispy spring rolls filled with fresh vegetables, served with sweet chili sauce.",
  //   image: noodles, // Using noodles image, perhaps you have a spring roll image?
  //   price: "$9.99" // Adjusted price for variety
  // },
  {
    name: "Garlic Prawns",
    description: "Sautéed prawns in butter and garlic, with a hint of parsley and lemon.",
    image: appetizer2, // Using appetizer2 again, consider adding more unique images
    price: "$16.75" // Adjusted price for variety
  },
  {
    name: "Caprese Skewers",
    description: "Cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze.",
    image: meat, // Using meat again
    price: "$11.25" // Adjusted price for variety
  }
];

const Appetizer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto px-4 py-8 max-w-7xl gap-9 text-white">
      {/* Main image - now visible on all screens, but its placement changes */}
      <div className="md:w-1/2 lg:w-2/5 flex-shrink-0 mb-8 md:mb-0"> {/* Added responsive width, bottom margin for mobile */}
        <img
          className="w-full h-auto object-cover rounded-xl shadow-lg max-h-[300px] sm:max-h-[400px] md:max-h-[500px]" // Responsive height
          src={rice}
          alt="Main dish"
        />
      </div>

      {/* Appetizer list */}
      <div className="flex flex-col gap-8 md:w-1/2 lg:w-3/5"> {/* Added responsive width */}
        <h3 className="text-3xl font-semibold text-center md:text-left mb-4">APPETIZERS</h3> {/* Centered on mobile, left on md+ */}
        <div className="overflow-y-auto max-h-[550px] custom-scrollbar pr-2"> {/* Added max-height and custom scrollbar */}
          {appetizers.map((item, index) => (
            <div key={index} className="flex items-start gap-4 sm:gap-5 py-4 border-b border-gray-700 last:border-b-0"> {/* Adjusted gap, added border for separation */}
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover flex-shrink-0" // Smaller image on mobile, flex-shrink to prevent squishing
                src={item.image}
                alt={item.name}
              />
              <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center"> {/* Flex for price/name on one line, desc below */}
                <div>
                  <p className="font-semibold text-lg sm:text-base">{item.name}</p> {/* Responsive font size */}
                  <p className="text-sm text-gray-300 mt-1">{item.description}</p> {/* Added margin top */}
                </div>
                <div className="text-base sm:text-sm font-bold mt-2 sm:mt-0 flex-shrink-0"> {/* Responsive font size, margin top for mobile, flex-shrink */}
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appetizer;