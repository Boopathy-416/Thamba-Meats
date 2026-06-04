import { useState, useMemo } from "react";
import { products } from "../data/Product";
import FilterBar from "../context/FilterBar";
import ProductGrid2 from "../components/product/2ProductGrid";


function Trends() {
      const [filters, setFilters] = useState({
    category: "",
    color: "",
    size: "",
    sort: "featured",
  });

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category)
      result = result.filter((p) =>
        p.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    if (filters.color)
      result = result.filter((p) => p.color === filters.color);
    if (filters.size)
      result = result.filter((p) => p.sizes.includes(filters.size));

    if (filters.sort === "low")
      result.sort((a, b) => a.price - b.price);
    else if (filters.sort === "high")
      result.sort((a, b) => b.price - a.price);

    return result;
  }, [filters]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Hot Sales</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <ProductGrid2 filtered={filtered} />
    </div>
  );
}

export default Trends;
