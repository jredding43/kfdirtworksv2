import React from "react";
import SectionGrid from "../components/SelectionGrid"; 

const soilItems = [
  {
    name: "Soil-Conditioner", displayName: "Soil Conditioner", price: 65.0, description: "Aged bark fines + Manure", stockStatus: "in-stock" as const,
  },
  {
    name: "Topsoil-3way-Mix", displayName: "Standard Blend", price: 30.0, description: "50% Topsoil - 20% Soil Conditioner - 30% Sand", stockStatus: "in-stock" as const,
  },
  {
    name: "Garden-3way-Mix", displayName: "Garden Blend", price: 40.0, description: "60% Topsoil - 10% Soil Conditioner - 30% Sand", stockStatus: "in-stock" as const,
  },
];

const SoilSection: React.FC = () => (
  <SectionGrid title="Soil Products" items={soilItems} imagePath="soil" />
);

export default SoilSection;
