
// import appetizer2 from "../assets/appetizer2.jpeg"
// import rice from "../assets/blackPlate.jpg"
// import meat from "../assets/meat.jpg"
// import meat2 from "../assets/meat2.jpg"

// import noodles from "../assets/noodles2.jpeg"

// const appetizers = [
//   {
//     name: "Smoked Salmon",
//     description: "Basmati rice / mixed vegetables / saffron / whole spices",
//     image: appetizer2,
//     price: "$13.49"
//   },
//   {
//     name: "Chicken Beef",
//     description: "Basmati rice / mixed vegetables / saffron / whole spices",
//     image: meat,
//     price: "$13.49"
//   },
//   {
//     name: "Spicy Noodles",
//     description: "Basmati rice / mixed vegetables / saffron / whole spices",
//     image: noodles,
//     price: "$13.49"
//   }
// ]

// const MainDish = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between m-7 gap-9  text-white">
//       {/* Left image, only visible on md+ screens */}
//       {/* <div className="hidden md:block flex-shrink-0">
//         <img
//           className=" sm:max-h-[400px] md:max-h-[450px] object-cover rounded-xl shadow-lg"
//           src={rice}
//           alt="Main dish"
//         />
//       </div> */}

//       {/* Appetizer list */}
//       <div className="flex flex-col gap-8 overflow-y-auto">
//         <h3 className="text-3xl font-semibold">Main Dish</h3>
//         {appetizers.map((item, index) => (
//           <div key={index} className="flex items-start gap-5">
//             <img
//               className="w-20 h-20 rounded-full object-cover"
//               src={item.image}
//               alt={item.name}
//             />
//             <div className="flex-1">
//               <p className="font-semibold">{item.name}</p>
//               <p className="text-sm text-gray-300">{item.description}</p>
//             </div>
//             <div className="text-sm font-bold">{item.price}</div>
//           </div>
//         ))}
//       </div>
//        <div className="hidden md:block flex-shrink-0">
//         <img
//           className=" sm:max-h-[450px] md:max-h-[450px] object-cover rounded-xl shadow-lg"
//           src={meat2}
//           alt="Main dish"
//         />
//       </div>
//     </div>
//   )
// }

// export default MainDish



import React from "react";
import appetizer2 from "../assets/appetizer2.jpeg"
import rice from "../assets/blackPlate.jpg" // This image isn't used in the provided code for MainDish, but keeping import
import meat from "../assets/meat.jpg"
import meat2 from "../assets/meat2.jpg"
import noodles from "../assets/noodles2.jpeg"

const mainDishes = [ // Renamed from appetizers to mainDishes for clarity
  {
    name: "Roasted Chicken",
    description: "Tender roasted chicken with herbs, served with seasonal vegetables.",
    image: meat,
    price: "$24.99"
  },
  // {
  //   name: "Grilled Salmon",
  //   description: "Perfectly grilled salmon fillet with lemon butter sauce and asparagus.",
  //   image: appetizer2, // Using appetizer2, ideally you'd have a specific main dish image
  //   price: "$27.50"
  // },
  // {
  //   name: "Vegetable Biryani",
  //   description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
  //   image: noodles, // Using noodles, ideally you'd have a specific main dish image
  //   price: "$19.75"
  // },
  {
    name: "Lamb Shank",
    description: "Slow-cooked lamb shank in rich gravy, served with creamy mashed potatoes.",
    image: meat, // Using meat again
    price: "$32.00"
  },
  {
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice with assorted wild mushrooms and Parmesan cheese.",
    image: appetizer2, // Using appetizer2 again
    price: "$21.00"
  }
];

const MainDish = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto px-4 py-8 max-w-7xl gap-9 text-white">
      {/* Main Dish list */}
      <div className="flex flex-col gap-8 md:w-1/2 lg:w-3/5"> {/* Added responsive width */}
        <h3 className="text-3xl font-semibold text-center md:text-left mb-4">MAIN DISHES</h3> {/* Centered on mobile, left on md+ */}
        <div className="overflow-y-auto max-h-[550px] custom-scrollbar pr-2"> {/* Added max-height and custom scrollbar */}
          {mainDishes.map((item, index) => ( // Changed from appetizers to mainDishes
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

      {/* Right image - now visible on all screens, its order changes based on flex-direction */}
      <div className="md:w-1/2 lg:w-2/5 flex-shrink-0 mt-8 md:mt-0 order-first md:order-last"> {/* Added responsive width, top margin for mobile, and order */}
        <img
          className="w-full h-auto object-cover rounded-xl shadow-lg max-h-[300px] sm:max-h-[400px] md:max-h-[500px]" // Responsive height
          src={meat2}
          alt="Main dish"
        />
      </div>
    </div>
  );
};

export default MainDish;