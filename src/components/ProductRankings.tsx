import { PatchData } from "@/types/patch";
import ProductCard from "./ProductCard";

interface ProductRankingsProps {
  patchesData: PatchData[];
}

export default function ProductRankings({ patchesData }: ProductRankingsProps) {
  return (
    <section id="rankings" className="py-5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {patchesData.map((patch) => (
          <ProductCard key={patch.rank} patch={patch} />
        ))}
      </div>
    </section>
  );
} 