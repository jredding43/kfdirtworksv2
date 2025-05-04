import React from "react";

export type Item = {
  name: string;
  displayName: string;
  price: number;
  description?: string;
  stockStatus: "in-stock" | "out-of-stock";
};

type Props = {
  title: string;
  items: Item[];
  imagePath: string;
};

const SectionGrid: React.FC<Props> = ({ title, items, imagePath }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-100 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          {title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-400"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={`/images/${imagePath}/${item.name}.jpg`}
                  alt={item.displayName}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-green-800">
                  {item.displayName}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-600">{item.description}</p>
                )}
                <div className="mt-2 flex justify-between items-center">
                  <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm">
                    ${item.price.toFixed(2)}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item.stockStatus === "in-stock"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.stockStatus === "in-stock" ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGrid;
