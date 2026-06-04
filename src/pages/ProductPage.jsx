import { useParams } from "react-router-dom";
import { products } from "../data/Product";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-10">
      <div className="flex-1">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full rounded-lg object-cover mb-4"
        />
        <div className="flex gap-2">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-80"
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
        <p className="text-xl font-bold mb-4">USD ${product.price.toFixed(2)}</p>
        <p className="mb-4">
          Color: <span className="font-semibold">{product.color}</span>
        </p>
        <p className="font-medium mb-2">Sizes</p>
        <div className="flex gap-2 mb-6">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="border px-3 py-1 rounded hover:bg-gray-100 cursor-pointer"
            >
              {s}
            </span>
          ))}
        </div>
        <button className="w-full bg-black text-white py-3 rounded-md mb-3 font-semibold">
          Add To Cart
        </button>
        <button className="w-full bg-yellow-400 py-3 rounded-md font-semibold hover:bg-yellow-500">
          Buy It Now
        </button>
      </div>
    </div>
  );
}
