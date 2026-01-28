import { Link } from "react-router-dom";
import { products } from "../data/products";

function Products() {
  return (
    <section id="product" className="py-20 bg-gray-50">
      <h2 className="text-[55px] text-[#360146] text-center mb-16 font-bold">
        Products
      </h2>

      <div className="flex flex-wrap justify-center gap-16">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white p-12 rounded-[50px] shadow-lg 
            hover:-translate-y-6 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[250px] mx-auto rounded-xl"
            />

            <h3 className="text-2xl text-[#360146] font-semibold text-center mt-6">
              {item.title}
            </h3>

            <Link to={item.link}>
              <button
                className="mt-6 mx-auto block px-8 py-3 text-xl rounded-lg 
                bg-[#360146] text-white hover:bg-[#ae42e0] transition"
              >
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
