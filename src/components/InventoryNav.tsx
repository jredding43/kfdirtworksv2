// components/InventoryNav.tsx
import React from "react";

type Props = {
  onNavigate: (section: string) => void;
};

const InventoryNav: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="w-full flex justify-center z-50">
      <div className="flex flex-col lg:flex-row gap-4 items-center w-full max-w-[900px]">
        {[
          {
            label: "Soil & Additives",
            value: "soil",
            image: "/images/soil/Garden-3way-Mix.jpg",
          },
          {
            label: "Gravel & Sand",
            value: "gravel",
            image: "/images/gravel/1-1-4-Minus-Crushed.jpg",
          },
          {
            label: "Bark",
            value: "bark",
            image: "/images/bark/Medium-Bark.jpg",
          },
          {
            label: "Decorative Rock",
            value: "rock",
            image: "/images/decorative/White-Medium.jpg",
          },
          {
            label: "Greenhouse",
            value: "greenhouse",
            image: "/images/greenhouse/greenhouse1.jpg",
          },
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => {
              onNavigate(item.value);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative group w-full lg:w-[160px] h-16 lg:h-40 rounded-lg overflow-hidden shadow-md focus:outline-none"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url('${item.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>
            <div className="relative z-10 flex items-center justify-center h-full px-2">
              <h3 className="text-white text-base font-bold tracking-wide text-center">
                {item.label}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InventoryNav;
