import React from "react";
import SectionGrid from "../components/SelectionGrid"; 

const soilItems = [
  {
    name: "Soil-Conditioner", displayName: "Soil Conditioner", price: 70.0, description: "Aged bark fines + Manure", stockStatus: "in-stock" as const,
  },
  {
    name: "Topsoil-3way-Mix", displayName: "Standard Blend", price: 35.0, description: "50% Topsoil - 20% Soil Conditioner - 30% Sand", stockStatus: "in-stock" as const,
  },
  {
    name: "Garden-3way-Mix", displayName: "Garden Blend", price: 45.0, description: "60% Topsoil - 10% Soil Conditioner - 30% Sand", stockStatus: "in-stock" as const,
  },
];

const SoilSection: React.FC = () => (
  <SectionGrid title="Soil Products" subtitle="Sold by the cubic yard, but we also offer half-yard and bucket options. We'll help you calculate what you need." items={soilItems} imagePath="soil" />
);

export default SoilSection;
