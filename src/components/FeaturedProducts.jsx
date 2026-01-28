import { featured } from "../data/featured";

function FeaturedProducts() {
  return (
    <section className="py-24">
      <h2 className="text-[55px] text-[#360146] text-center mb-20 font-bold">
        Featured Products
      </h2>

      <div className="flex flex-wrap justify-center gap-24">
        {featured.map((item, i) => (
          <div
            key={i}
            className="relative w-[400px] overflow-hidden rounded-2xl 
            hover:-translate-y-6 transition duration-300"
          >
            <img
              src={item.img}
              className="h-[600px] w-full object-cover rounded-[50px] brightness-75"
              alt={item.title}
            />

            <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
              <h3 className="text-white text-3xl font-semibold">
                {item.title}
              </h3>

              <button className="mt-4 px-6 py-3 bg-[#360146] text-white rounded-lg hover:bg-[#ae42e0]">
                Discover More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
