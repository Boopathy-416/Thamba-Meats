import ProductCard from "../../context/ProductCard";
import SearchBar from "../../context/SearchBar";
import { products } from "../../data/Product";

export default function HotSale() {
  return (
    <section className="py-20 bebas tracking-wider bg-white">

      <h2 className="text-3xl font-bold text-center mb-10">Hot Sale</h2>
      <SearchBar />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}


