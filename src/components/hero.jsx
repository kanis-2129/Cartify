import { useEffect, useState } from "react";
import d1 from "../assets/image/d1.jpg";
import g1 from "../assets/image/g1.png";
import p1 from "../assets/image/p1.png";
import ac1 from "../assets/image/ac1.jpg";
import perfume from "../assets/image/perfume.jpg";

const slides = [
  {
    title: "Welcome to",
    highlight: "Cartify!",
    desc: "Your one-stop shop for the latest gadgets, fashion, and more.",
    btn: "Start Shopping",
    img: d1,
  },
  {
    title: "Big Deals on",
    highlight: "Smart Gadgets!",
    desc: "Discover the latest gadgets designed to make your life smarter.",
    btn: "Shop Now",
    img: g1,
  },
  {
    title: "Get the Best",
    highlight: "Smartphones!",
    desc: "Top brands, powerful performance — all in one place.",
    btn: "Explore Now",
    img: p1,
  },
  {
    title: "Upgrade with",
    highlight: "Smart Accessories!",
    desc: "Wireless. Sleek. Modern. Designed for your comfort.",
    btn: "Buy Now",
    img: ac1,
  },
  {
    title: "Feel the Luxury of",
    highlight: "Fragrance!",
    desc: "Premium perfumes that define your unique style and elegance.",
    btn: "Discover Scents",
    img: perfume,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection("right"); // next slide
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="w-full min-h-screen bg-[#301934] flex items-center justify-center relative overflow-hidden">
      {/* SLIDE */}
      <div
        key={index}
        className={`absolute w-[85%] h-[80vh] flex flex-col md:flex-row
  items-center justify-between gap-14 p-16 rounded-3xl
  bg-gradient-to-br from-[#c409b1] via-[#421974] to-[#d435c5]
  shadow-[5px_5px_10px_#f02acb]
  ${direction === "right" ? "animate-slide-right" : "animate-slide-left"}`}
      >
        {/* TEXT */}
        <div className="flex-1 text-white text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            {slides[index].title}{" "}
            <span className="text-[3.5rem]">{slides[index].highlight}</span>
          </h1>

          <h2 className="text-xl opacity-90 mb-8">{slides[index].desc}</h2>

          <button
            className="px-7 py-3 rounded-lg font-semibold
            bg-gradient-to-r from-pink-500 via-purple-700 to-pink-600
            hover:scale-105 transition shadow-md"
          >
            {slides[index].btn}
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={slides[index].img}
            alt="hero"
            className="w-[400px] h-[400px] object-contain rounded-[50px]
            hover:scale-105 transition"
          />
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-10 flex gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-[6px] h-[6px] rounded-full transition
            ${i === index ? "bg-pink-400 scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
