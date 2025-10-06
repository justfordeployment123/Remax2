"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SellingGuide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Request submitted successfully!");
  };

  const slides = [
    {
      number: 1,
      title: "Choose a Real Estate Agent ",
      description:
        "REMAX agents use cutting-edge tech, extensive marketing strategies, and expert advice to understand market nuances and establish a competitive price for your home.",
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop",
    },
    {
      number: 2,
      title: "Prepare Your Home for Sale",
      description:
        "Before listing your home, add to its value by fixing issues like water damage or foundation problems. Small cosmetic updates like new light fixtures or fresh paint help significantly.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    },
    {
      number: 3,
      title: "Determine Your Home's Value",
      description:
        "Setting the right price for your home is crucial. Online estimates may help, but working with an agent offers a more accurate evaluation based on local trends and your home's condition.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <img
              src="https://blog.remax.com/wp-content/uploads/sites/4/2025/04/REMAX-Home-Sellers-Guide.jpg?w=1500&format=auto"
              alt="Selling Guide"
              className="w-full object-cover rounded-lg"
            />
          </div>

          <h1 className="text-4xl font-[400] text-[#004e9b] mb-6">
            Welcome to the REMAX Home Seller’s Guide!
          </h1>

          <div className="text-black rounded-lg">
            <p className="text-lg leading-relaxed">
              Selling your home is a big decision, and REMAX® is here for you.
              Whether this is your first time on the selling side of your real
              estate journey or you’ve done it several times before, downloading
              the REMAX Home Seller’s Guide is a great first step to selling
              your home with confidence and achieving your goals. When you’re
              ready to take the next step, a trusted REMAX agent will guide you
              through every step of the process, providing expert advice and
              answering all your questions along the way.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-[#004e9b] text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors uppercase text-sm">
            Download the Remax Home Seller Guide
          </button>
        </div>
      </section>

      {/* Selling Your Home Steps */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[#004e9b] mb-8">
            <h2 className="text-2xl">Selling Your Home, Step by Step</h2>
          </div>

          {/* Slider */}
          <div className="rounded-lg p-12 bg-[#1e3a5f] relative">
            <div className="flex items-center gap-8 text-white">
              {/* Image Section */}
              <div className="flex-shrink-0 w-96">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6">
                  {slides[currentSlide].number}. {slides[currentSlide].title}
                </h3>
                <p className="text-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors border border-white/40"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors border border-white/40"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#004e9b] mb-6">
            Top Tips for Working With Your Selling Agent
          </h2>

          <p className="text-gray-700 mb-12 leading-relaxed">
            The process of selling your home can feel overwhelming, but with the
            right resources, it doesn't have to be. Your REMAX agent is here to
            make your journey from "For Sale" to "Sold" as smooth and successful
            as possible. Here are three tips to make the most of the
            agent-client relationship.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Tip 1 */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
                alt="Be Patient"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-[#004e9b] mb-3">
                Be Patient.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The time it takes to sell a home can vary based on market
                conditions, but no matter how fast or slow the sale moves, avoid
                entering into negotiations with buyers who aren't pre-approved
                for a mortgage. Some patience and due diligence on your side
                will help ensure you reach your home-selling goals.
              </p>
            </div>

            {/* Tip 2 */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop"
                alt="Do Your Part"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-[#004e9b] mb-3">
                Do Your Part.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Why try to do it all yourself, when you can hire a professional
                agent with the experience and expertise to do it for you?
                However, when you hire a real estate agent, don't leave it all
                up to them. As a seller, you'll have a number of personal
                responsibilities to manage to help make your experience a
                success.
              </p>
            </div>

            {/* Tip 3 */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop"
                alt="Be Ready"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-[#004e9b] mb-3">
                Be Ready.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your property should be ready when buyers are. It's best not to
                request a 24-hour notice or let your phone go unanswered. It's
                recommended that the seller leave the home during showings.
                Buyers appreciate space and may feel uncomfortable sharing their
                thoughts if you're present.
              </p>
            </div>
          </div>

          {/* Marketing Your Property */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#004e9b] mb-6">
              Marketing Your Property
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              REMAX agents have access to advanced technology and marketing
              strategies, and have the knowledge and expertise to help sell your
              home.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Online Listing for Your Home
                </h3>
                <p className="text-gray-700">
                  Showcase your property with an{" "}
                  <a href="#" className="text-blue-600 underline">
                    online listing
                  </a>{" "}
                  that highlights key details and includes high-quality images.
                  These listings instantly grab potential buyers' attention and
                  make your property stand out.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Advanced Marketing Strategies
                </h3>
                <p className="text-gray-700">
                  Reach more buyers with REMAX's cutting-edge digital marketing
                  tools. With targeted ads and online strategies, your property
                  will get maximum visibility to drive traffic and generate
                  interest.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Leverage the REMAX Network.
                </h3>
                <p className="text-gray-700">
                  You're not alone, and neither are we. Tap into the power of
                  the REMAX network. With one of the largest{" "}
                  <a href="#" className="text-blue-600 underline">
                    networks of agents
                  </a>{" "}
                  in the country, word of mouth, online marketing, and
                  advertising opportunities will help get your property the
                  attention it deserves.
                </p>
              </div>
            </div>
          </div>

          {/* We're Here For You */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#004e9b] mb-6">
              We're Here For You.
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              A{" "}
              <a href="#" className="text-blue-600 underline">
                REMAX agent
              </a>{" "}
              can help eliminate the guesswork of your real estate transaction.
              With this experienced professional on one hand, and our
              comprehensive{" "}
              <a href="#" className="text-blue-600 underline">
                REMAX Home Seller's Guide
              </a>{" "}
              on the other, you'll be well prepared to navigate the market and
              sell your home quickly and confidently.
            </p>

            <div className="text-center">
              <button className="bg-[#004e9b] text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors uppercase text-sm">
                Find a REMAX Agent Today!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seller's Guide Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Seller's Guide
          </h2>
          <p className="text-gray-600 mb-8">
            Is it time to sell? Get the best value for your home.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Zip Code <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            By clicking "Submit Request" below, you are agreeing to the{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            and are agreeing to receive marketing email messages from REMAX, LLC
            and/or marketing emails, calls or texts placed by or on behalf of
            your local RE/MAX franchised office, to any phone number and/or
            email address that you provided, even if your number is on a
            federal, state, or our internal Do Not Call List. You further agree
            that call/texts may be sent with an automated system for selection
            or dialing of numbers and/or for artificial or prerecorded voice.
            Please note: Consent is not a condition of purchase. Standard data
            and messaging rate may apply. You may unsubscribe at any time.
          </p>

          <div className="text-right">
            <button
              onClick={handleSubmit}
              className="bg-[#004e9b] text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
