import { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactImg from "../assets/image/cont 12345678.jpg"; // correct path

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // validation (same JS logic)
    if (!name || !email || !message) {
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("📧 Please enter a valid email address!");
      return;
    }

    alert(`✅ Thank you ${name}! Your message has been sent successfully.`);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#3e1240] to-[#581f49] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex items-center gap-8">
         
          {/* 🔙 BACK ARROW */}
          <button
            onClick={() => navigate(-1)}
            className="fixed top-6 left-6 z-50
             text-white text-3xl
             hover:scale-110 transition"
          >
            ←
          </button>

          {/* CARD */}
          <div
            className="w-full max-w-md bg-white/5 backdrop-blur-lg
            border border-white/10 p-8 rounded-2xl
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <h1 className="text-white text-3xl font-bold text-center mb-6">
              Contact Us
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NAME */}
              <div>
                <label className="block text-white mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg outline-none text-base"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-white mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your mail id"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg outline-none text-base"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-white mb-1 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg outline-none text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3e1240] text-white
                py-3 rounded-xl font-bold
                transition hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* IMAGE */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <img
              src={contactImg}
              alt="Contact illustration"
              className="w-10/12 h-2/6 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
