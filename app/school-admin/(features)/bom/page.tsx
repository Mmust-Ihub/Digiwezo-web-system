import { BomHeader } from "./components/BomHeader";
import { bomData } from "./data/bomData";

export default function BomPage() {
  return (
    <div className="p-6 space-y-6">
      <BomHeader stats={bomData.stats} />
    </div>
  );
}