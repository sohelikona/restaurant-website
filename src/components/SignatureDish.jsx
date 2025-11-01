
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import coffee from "../assets/11.jpeg";
import noodles from "../assets/noodles2.jpeg";
import soupNoodles from "../assets/soupNoodles.jpeg";
import pizza from "../assets/10.jpeg";

const ImageZoom = ({ src, alt }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1 });
    }
  }, [inView, controls]);

  return (
     <div className="w-auto h-auto overflow-hidden mx-auto">
 <motion.img
  ref={ref}
  initial={{ scale: 1.2, opacity: 0 }}
  animate={controls}
  transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }} // custom ease for smooth out
  className="w-full h-full object-cover shadow-md hover:scale-105 transition-transform duration-500 will-change-transform"
  src={src}
  alt={alt}
/>
    </div>
  );
};

const SignatureDish = () => {
  return (
    <div className="bg-neutral-950 text-white content-center items-center text-center mb-50 w-screen">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold m-6 sm:m-9 tracking-wide leading-tight text-white drop-shadow-md">
  Explore Our Cuisines
</h2>

      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-0 p-6 bg-neutral-950">
        <ImageZoom src={coffee} alt="Coffee" />
        <ImageZoom src={noodles} alt="Noodles" />
        {/* <ImageZoom src={soupNoodles} alt="Soup Noodles" /> */}
        <ImageZoom src={pizza} alt="Pizza" />
      </div>
    </div>
  );
};

export default SignatureDish;
