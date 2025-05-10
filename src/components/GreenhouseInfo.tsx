import { useState } from "react";

const GreenhouseInfo = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="select-none cursor-default bg-gradient-to-br from-green-100 to-yellow-50 w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-6 tracking-tight">
          Berries Info Sheet
        </h1>
        <p className="text-center text-green-800 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          A closer look at our berry selections including Gooseberry and Black Currant. View the original product info sheets below.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => {
            const imagePath = `/images/info/photo-(${i + 1}).jpg`;
            return (
              <div
                key={i}
                onClick={() => setSelectedImage(imagePath)}
                className="bg-white border border-green-200 rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={imagePath}
                  alt={`Berry info ${i + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrollable Modal */}
      {selectedImage && (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-y-auto"
            onClick={() => setSelectedImage(null)}
        >
            <div
            className="relative max-w-5xl w-full mx-auto mt-80 mb-10 bg-white rounded-xl p-4"
            onClick={(e) => e.stopPropagation()} 
            >
            {/* Close Button */}
            <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-4 text-gray-700 text-3xl font-bold z-10"
            >
                &times;
            </button>

            {/* Image */}
            <img
                src={selectedImage}
                alt="Enlarged berry info"
                className="w-full h-auto object-contain rounded"
            />
            </div>
        </div>
        )}
    </main>
  );
};

export default GreenhouseInfo;
