import React from "react";
import SectionGrid from "../components/SelectionGrid";

const decorativeItems = [
  { name: "Gray-Chip", displayName: "Gray Chip 3/4 - 1/2", price: 40.0, stockStatus: "in-stock" as const},
  { name: "Huckleberry-Greenstone-1-1-1-2", displayName: "Huckleberry Greenstone 1 - 1-1/2", price: 55.0, stockStatus: "out-of-stock" as const},
  { name: "Huckleberry-Greenstone-1-2-1", displayName: "Huckleberry Greenstone 1/2 - 1", price: 60.0, stockStatus: "out-of-stock" as const},
  { name: "Grey-Dolomite", displayName: "Gray Dolomite 2 Minus", price: 60.0, stockStatus: "in-stock" as const},
  { name: "White-Large", displayName: "White Large 1 - 1-1/2", price: 75.0, stockStatus: "out-of-stock" as const},
  { name: "White-Medium", displayName: "White Medium 1/2 - 1", price: 80.0, stockStatus: "in-stock" as const},
  { name: "White-Small", displayName: "White Small", price: 65.0, stockStatus: "in-stock" as const},
  { name: "Basalt-1-1-2", displayName: "Basalt 1-1/2", price: 65.0, stockStatus: "in-stock" as const},
  { name: "TM-Large", displayName: "TM Rustic - Large", price: 65.0, stockStatus: "in-stock" as const},
  { name: "TM-small", displayName: "TM Rustic - Small", price: 70.0, stockStatus: "in-stock" as const},
  { name: "Lava-Rock", displayName: "Lava Rock", price: 90.0, stockStatus: "in-stock" as const},
  { name: "Eagle-Gray-Large", displayName: "Eagle Grey Large 1", price: 96.0, stockStatus: "in-stock" as const},
  { name: "Montana-Rainbow-Chip", displayName: "Montana Rainbow Chip", price: 95.0, stockStatus: "in-stock" as const},
  { name: "Montana-Rainbow-Pebble-3-4", displayName: "Montana Rainbow Pebble 3/4", price: 120.0, stockStatus: "in-stock" as const},
  { name: "Montana-Rainbow-Pebble-1-1-2", displayName: "Montana Rainbow Pebble 1-1/2", price: 120.0, stockStatus: "in-stock" as const},
  { name: "missing-image", displayName: "Montana Rainbow Pea Gravel - 5 gal Bucket Only", price: 4.0, stockStatus: "out-of-stock" as const}
];

const DecorativeSection: React.FC = () => (
  <SectionGrid title="Decorative Rock" items={decorativeItems} imagePath="decorative" />
);

export default DecorativeSection;
