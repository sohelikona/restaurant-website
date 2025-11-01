// // ReserveTable.jsx
// import React from "react";
// import table1 from '../assets/table1.jpeg'
// import table2 from '../assets/table2.jpeg'

// const ReserveTable = () => {
//   return (
//     <div className=" bg-neutral-950 text-white flex flex-col justify-center items-center sm:flex sm:flex-col mb-60">
//       {/* Left Section */}
//       <div className="w-1/2 relative">
//         <img
//           src={table2}
//           alt="restaurant"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute bottom-10 left-10 max-w-md">
//           <p className="uppercase text-sm tracking-widest text-white text-shadow-lg">
//             A table for every occasion.
//           </p>
//           <h1 className="text-4xl font-bold mt-2 leading-tight text-shadow-lg">
//             A flawless dining experience book your seat today
//           </h1>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-1/2 bg-[#1a1a1a] p-12 flex flex-col justify-center">
//         <h2 className="text-3xl font-semibold mb-8">Reserve your Table</h2>
//         <form className="space-y-6">
//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" placeholder="Enter your name*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
//             <input type="email" placeholder="Email address" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
//             <input type="tel" placeholder="Phone number*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
//             <input type="number" placeholder="Number of guest*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
//             <input type="date" className="bg-transparent border-b border-gray-600 p-2 outline-none col-span-2" />
//           </div>
//           <textarea placeholder="Message*" className="bg-transparent border-b border-gray-600 p-2 w-full outline-none h-24 resize-none" />
//           <button type="submit" className="bg-white text-black px-6 py-3 font-medium self-end mt-4 hover:bg-gray-300 transition">
//             RESERVE NOW
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ReserveTable;









import React from "react";
import { motion } from "framer-motion";
import table2 from "../assets/table2.jpeg";

const ReserveTable = () => {
  return (
    <motion.div
      className="bg-neutral-950 text-white flex flex-col md:flex-row justify-center items-stretch mb-60"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 relative h-64 md:h-auto"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={table2}
          alt="restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 max-w-md">
          <p className="uppercase text-sm tracking-widest text-white text-shadow-lg">
            A table for every occasion.
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2 leading-tight text-shadow-lg">
            A flawless dining experience book your seat today
          </h1>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 bg-[#1a1a1a] p-6 md:p-12 flex flex-col justify-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Reserve your Table</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Enter your name*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
            <input type="email" placeholder="Email address" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
            <input type="tel" placeholder="Phone number*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
            <input type="number" placeholder="Number of guests*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
            <input type="date" className="bg-transparent border-b border-gray-600 p-2 outline-none md:col-span-2" />
          </div>
          <textarea placeholder="Message*" className="bg-transparent border-b border-gray-600 p-2 w-full outline-none h-24 resize-none" />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 font-medium self-end mt-4 hover:bg-gray-300 transition"
          >
            RESERVE NOW
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ReserveTable;
