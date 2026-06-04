
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// ✅ Import images from assets
import bag from "../../assets/images/bag.png";
import k from "../../assets/images/k.png";
import child from "../../assets/images/child.png";
import l1 from "../../assets/images/l1.png";
import cf from "../../assets/images/cf.png";
import look from "../../assets/images/look.png";
import t3 from "../../assets/images/t3.png";
import tw from "../../assets/images/tw.png";

const products = [
  {
    id: 1,
    name: "Purple Floral Blouse",
    price: "USD $29.90",
    image: bag,
  },
  {
    id: 2,
    name: "Taupe Mixed Print Long-Sleeve Shirt",
    price: "USD $29.40",
    image: k,
  },
  {
    id: 3,
    name: "White Floral Blouse",
    price: "USD $28.90",
    image: child,
  },
  {
    id: 4,
    name: "Emerald Green Textured Shirt",
    price: "USD $30.09",
    image: l1,
  },
  {
    id: 5,
    name: "Purple Floral Blouse",
    price: "USD $29.90",
    image: cf,
  },
  {
    id: 6,
    name: "Taupe Mixed Print Long-Sleeve Shirt",
    price: "USD $29.40",
    image: look,
  },
  {
    id: 7,
    name: "White Floral Blouse",
    price: "USD $28.90",
    image: t3,
  },
  {
    id: 8,
    name: "Emerald Green Textured Shirt",
    price: "USD $30.09",
    image: tw,
  },
];

export default function WhatsNew() {
  return (
    <section className="py-16 bg-[#fffff]">
      {/* Title */}
      
      <h2
        className="text-3xl momo text-center mb-10"
        style={{ color: "#212121" }}
      >
        <span className="relative">
          What's{" "}
          <span
            className=" bebas tracking-widest text-yellow-500"
            style={{ borderBottom: "2px double #553510" }}
          >
            New
          </span>
        </span>
      </h2>

      {/* Product Grid */}
      <div className="max-w-6xl momo mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-transparent rounded-lg overflow-hidden  transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] object-cover bebas  transform hover:scale-105 transition-transform duration-800"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 md:text-center text-left ">
              <h3
                className="text-gray-800 text-base font-normal mb-2"
                style={{ fontFamily: "sans-serif" }}
              >
                {item.name}
              </h3>
              <p className="text-black font-semibold text-sm">{item.price}</p>
              <FontAwesomeIcon icon={faTags} className="text-yellow-600" size="xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
