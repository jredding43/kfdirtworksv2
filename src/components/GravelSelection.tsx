import React from "react";
import SectionGrid from "../components/SelectionGrid";

const gravelItems = [
  { name: "Fill-Dirt", displayName: "Fill Dirt", price: 15.0, stockStatus: "in-stock" as const},
  { name: "5-8-Minus-Crushed", displayName: "5/8 Minus Crushed", price: 32.0, stockStatus: "in-stock" as const},
  { name: "1-1-4-Minus-Crushed", displayName: "1-1/4 Minus Crushed", price: 32.0, stockStatus: "in-stock" as const},
  { name: "3minus", displayName: "3 Minus", price: 32.0, stockStatus: "in-stock" as const},
  { name: "Pea-gravel-updated", displayName: "Pea Gravel 3/8", price: 35.0, stockStatus: "in-stock" as const},
  { name: "CV-Screened-Rock-1-2-1", displayName: "CV Screened Rock 1/2 - 1", price: 35.0, stockStatus: "in-stock" as const},
  { name: "CV-Drain-Rock-2", displayName: "CV Drain Rock 2", price: 35.0, stockStatus: "in-stock" as const},
  { name: "DW-Screened-Rock-1-2-1", displayName: "DW Screened Rock 1/2 -1", price: 30.0, stockStatus: "in-stock" as const},
  { name: "DW-Screened-Rock-1-1-2-3", displayName: "DW Screened Rock 1 - 1-1/2", price: 30.0, stockStatus: "in-stock" as const},
  { name: "Sand", displayName: "Sand", price: 20.0, stockStatus: "in-stock" as const},
  { name: "c33", displayName: "C33 Sand", price: 35.0, stockStatus: "in-stock" as const}
];

const GravelSection: React.FC = () => (
  <SectionGrid title="Gravel & Sand" items={gravelItems} imagePath="gravel" />
);

export default GravelSection;
