
import React, { useEffect, useState, useRef, useCallback } from "react";

const reviews = [
  {
    name: "Cody Fisher",
    quote: "Truly one of the best dining experiences I’ve had!",
    desc: "A place that combines great food with an inviting ambiance. The dishes were absolutely delicious, with flavors that were both bold and comforting.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ralph Edwards",
    quote: "Unforgettable flavors, exceptional service.",
    desc: "The staff was friendly, attentive, and made me feel right at home. I highly recommend this to anyone looking for a truly delightful dining experience.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Doe",
    quote: "A hidden gem!",
    desc: "Amazing food, cozy vibes, and staff that treats you like family. Definitely coming back!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "John Smith",
    quote: "Tasted heaven on a plate.",
    desc: "Best steak I’ve ever had. The sides and wine pairing were on point.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },

  {
    name: "Emily White",
    quote: "Fantastic ambiance and even better food!",
    desc: "A delightful culinary journey, every dish was a masterpiece. Highly recommend for a special occasion.",
    img: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "David Lee",
    quote: "Simply the best in town.",
    desc: "From appetizers to dessert, everything was top-notch. Will definitely be a regular here.",
    img: "https://randomuser.me/api/portraits/men/19.jpg",
  },
];

const GuestReviews = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(2);
  const sliderRef = useRef(null);

  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);


  const updateReviewsPerSlide = useCallback(() => {
    if (window.innerWidth < 768) { 
      setReviewsPerSlide(1);
    } else {
      setReviewsPerSlide(2);
    }
  }, []);


  useEffect(() => {

    updateReviewsPerSlide();

    window.addEventListener("resize", updateReviewsPerSlide);


    return () => {
      window.removeEventListener("resize", updateReviewsPerSlide);
    };
  }, [updateReviewsPerSlide]); 

  useEffect(() => {
    if (slideIndex >= totalSlides) {
      setSlideIndex(0);
    }
  }, [reviewsPerSlide, totalSlides, slideIndex]);

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);


  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-[#1a1a1a] text-white px-6 py-16 mb-30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4"> 
          <h2 className="text-3xl font-bold text-center sm:text-left">Reviews from Our Guests</h2> 
          <div className="flex gap-2 mx-auto sm:mx-0"> 
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200" // Added transition
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200" // Added transition
            >
              →
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${slideIndex * (100 / totalSlides)}%)`,
            }}
          >

            {Array.from({ length: totalSlides }).map((_, slideNum) => (
              <div
                key={slideNum}
                style={{ width: `${100 / totalSlides}%` }}
                className="flex-shrink-0" 
              >
               
                <div
                  className={`grid gap-8 px-2 ${
                    reviewsPerSlide === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {reviews
                    .slice(
                      slideNum * reviewsPerSlide,
                      slideNum * reviewsPerSlide + reviewsPerSlide
                    )
                    .map((r, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row gap-6 items-center sm:items-start p-4 bg-[#1a1a1a] rounded-lg " // Added padding, background, shadow, and flex-col for mobile
                      >
                        <img
                          src={r.img}
                          alt={r.name}
                          className="w-28 h-28 object-cover rounded-full sm:rounded-lg border-2 border-gray-600" // Made image round on mobile, square on desktop
                        />
                        <div className="text-center sm:text-left"> 
                          <div className="text-4xl mb-2 text-gray-400 font-serif">“</div> 
                          <h3 className="font-semibold text-xl sm:text-lg mb-1">{r.quote}</h3> 
                          <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">{r.desc}</p> 
                          <p className="mt-4 font-medium text-lg sm:text-base text-gray-200">{r.name}</p> 
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;