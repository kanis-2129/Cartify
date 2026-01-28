import phone from "../assets/image/phone.jpg";
import t1 from "../assets/image/t1.png";
import t2 from "../assets/image/t2.jpg";
import t3 from "../assets/image/t3.jpg";
import woman from "../assets/image/woman.png";
import cross from "../assets/image/cross-selling.png";
import market from "../assets/image/market.png";
import c2 from "../assets/image/c2.jpg";
import c3 from "../assets/image/c3.jpg";
import c4 from "../assets/image/c4.jpg";
import c5 from "../assets/image/c5.jpg";

const About = () => {
  return (
    <div id="our-story" className="bg-white text-gray-800">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center text-purple-900 py-8">
        About Us
      </h2>

      {/* Our Story */}
      <section className="flex flex-wrap items-center gap-10 px-[10%] py-16">
        <img src={phone} alt="Our Story" className="w-[350px] rounded-lg" />

        <div className="flex-1">
          <h3 className="text-4xl font-semibold text-center mb-4">Our Story</h3>
          <p className="leading-relaxed">
            Cartify started as a small fashion boutique offering great style and
            trends. Over the years, we have grown into a full-fledged fashion
            e-commerce platform, bringing exclusive brands and collections to
            our valued customers.Our mission is to redefine fashion shopping by
            providing top-quality products,great prices, and exceptional
            service. We continue to evolve, staying true to our passion for
            creativity and innovation.Every big idea starts small — and so
            didours. QuickCart was born out of a simple thought: online
            shoppingshould be easy, fast, and trustworthy. We started with just
            a few local sellers and a handful of loyal customers. Today,
            QuickCart has grown into a thriving online marketplace trusted by
            thousands across India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 flex justify-around py-10 text-center">
        {[
          { value: "06", label: "Years" },
          { value: "30", label: "Favourite Brands" },
          { value: "700", label: "Quality Products" },
          { value: "1500", label: "Happy Clients" },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-yellow-500">{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="text-center py-16 px-[10%]">
        <h1 className="text-4xl font-bold mb-10">What Our Clients Say</h1>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { img: t1, name: "Alex Larson", text: "Best e-commerce website!" ,para:"“QuickCart has completely changed how I shop online. The delivery is super fast, and the products are exactly as shown."},
            { img: t2, name: "Cara Mendy", text: "Beautiful design product!",para:"“The variety is amazing and the deals are unbeatable. Their service team is quick to respond whenever I have questions!" },
            { img: t3, name: "Ron Smith", text: "Amazing brand service!" ,para:"From fashion to electronics, everything arrives on time and in perfect condition.Excellent customer support too!"},
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-100 w-[280px] p-6 rounded-lg shadow"
            >
              <h2 className="font-semibold mb-2">"{t.text}"</h2>

              
              <p >{t.para}</p>
              <img
                src={t.img}
                alt=""
                className="w-24 h-24 mx-auto my-4 rounded-full"
              />
              <h4 className="font-medium">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="text-center py-16 px-[10%]">
        <h1 className="text-4xl font-bold mb-10">What We Do</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { img: woman, title: "Fashion Design" ,para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, accusamus!"},
            { img: cross, title: "Tailoring On Demand",para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, accusamus!" },
            { img: market, title: "Return Within 3 Days",para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, accusamus!" },
          ].map((s, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg font-medium">
              <img src={s.img} alt="" className="w-12 h-12 mx-auto mb-4" />
              <h4>{s.title}</h4>
              <p className="text-sm">{s.para}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="text-center py-16 px-[10%]">
        <h1 className="text-4xl font-bold mb-10">Our Team</h1>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { img: c2, name: "John Deo", role: "Designer" },
            { img: c3, name: "Emily Larson", role: "Model" },
            { img: c4, name: "Tony Stark", role: "Developer" },
            { img: c5, name: "Jason Stephon", role: "Photographer" },
          ].map((m, i) => (
            <div key={i}>
              <img
                src={m.img}
                alt=""
                className="w-[200px] h-[300px] rounded-md"
              />
              <h3 className="font-semibold mt-2">{m.name}</h3>
              <p className="text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
