
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GreenhousePictures = () => {
  const [openIndex, setOpenIndex] = useState(-1); // -1 = closed

  const images = Array.from({ length: 52 }, (_, i) => `/images/greenhousepictures/greenhouse-photo(${i + 1}).jpg`);

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-green-100 to-yellow-50">
      <div className="px-4 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 text-center tracking-tight mb-2">
          🌿 Greenhouse Tour
        </h2>
        <div className="mx-auto w-24 h-1 bg-green-400 rounded mb-12"></div>

        {/* Image Grid */}
        <section className="bg-white rounded-2xl px-4 py-12 shadow-inner border border-green-100">
          <h3 className="text-4xl font-semibold text-green-800 text-center mb-8">Photo Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  loading="lazy"
                  src={src}
                  alt={`Greenhouse photo ${index + 1}`}
                  className="w-full h-[250px] object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setOpenIndex(index)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          open={openIndex >= 0}
          index={openIndex}
          close={() => setOpenIndex(-1)}
          slides={images.map((src) => ({ src }))}
        />
      </div>
    </div>
  );
};

export default GreenhousePictures;
