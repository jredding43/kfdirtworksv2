import React from "react";
import SectionGrid from "../components/SelectionGrid";

const barkItems = [
  { name: "Wood-Chips", displayName: "Wood Chips", price: 35.0, stockStatus: "in-stock" as const },
  { name: "Small-Bark", displayName: "Small Bark", price: 35.0, stockStatus: "in-stock" as const },
  { name: "Medium-Bark", displayName: "Medium Bark", price: 35.0, stockStatus: "in-stock" as const },
  { name: "Large-Bark", displayName: "Large Bark", price: 20.0, stockStatus: "in-stock" as const },
  { name: "vaagen", displayName: "Vaagen Bark", price: 35.0, stockStatus: "in-stock" as const },
  { name: "dark_bark", displayName: "Dark Bark Fines", price: 30.0, stockStatus: "in-stock" as const }
];

const BarkSection: React.FC = () => (
  <div className="p-6">
    <SectionGrid title="Bark Products" subtitle="Sold by the cubic yard, but we also offer half-yard and bucket options. We'll help you calculate what you need." items={barkItems} imagePath="bark" />
  </div>
);

export default BarkSection;
