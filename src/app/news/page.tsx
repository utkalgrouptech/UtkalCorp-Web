'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const featuredNews = [
  {
    title: 'Copper Market Trends in 2025',
    image: '/copper-market.jpg',
    summary: 'The copper industry sees major fluctuations with high global demand and supply chain challenges.',
  },
  {
    title: 'AI in Scrap Sorting',
    image: '/ai-scrap.jpg',
    summary: 'Modern facilities leverage AI & robotics to improve metal sorting accuracy and processing speed.',
  },
];

export default function NewsPage() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % featuredNews.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = featuredNews.length - 1;
      else if (nextIndex >= featuredNews.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <main className="p-6 md:p-12 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-900 tracking-tight drop-shadow-md">
        Latest News & Insights
      </h1>

      {/* Custom Featured Slider */}
      <section className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl mb-16 select-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative h-80 md:h-96 w-full cursor-grab"
          >
            <img
              src={featuredNews[current].image}
              alt={featuredNews[current].title}
              className="w-full h-full object-cover brightness-90"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg mb-2">
                {featuredNews[current].title}
              </h2>
              <p className="text-lg md:text-xl font-light drop-shadow-md max-w-3xl">
                {featuredNews[current].summary}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous"
          className="absolute top-1/2 left-5 -translate-y-1/2 bg-blue-800 bg-opacity-70 text-white rounded-full p-3 hover:bg-blue-900 transition"
        >
          <ArrowBackIos fontSize="small" />
        </button>
        <button
          onClick={() => paginate(1)}
          aria-label="Next"
          className="absolute top-1/2 right-5 -translate-y-1/2 bg-blue-800 bg-opacity-70 text-white rounded-full p-3 hover:bg-blue-900 transition"
        >
          <ArrowForwardIos fontSize="small" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
          {featuredNews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx !== current) {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current ? 'bg-blue-600 scale-125' : 'bg-blue-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {[...Array(4)].map((_, idx) => (
          <motion.article
            key={idx}
            className="bg-white rounded-xl shadow-lg p-7 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="flex items-center gap-2 text-blue-600 mb-3">
              <Newspaper fontSize="small" />
              <span className="uppercase tracking-wide font-semibold text-sm">News & Blog</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Industry Insight #{idx + 1}</h3>
            <p className="text-gray-700 leading-relaxed text-md">
              Learn about emerging trends and business strategy in the global metal scrap and recycling sector.
            </p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
