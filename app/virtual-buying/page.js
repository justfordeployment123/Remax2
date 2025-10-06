'use client'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function VirtualBuying() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      number: 1,
      title: "Virtual Consultation",
      description: "Schedule phone calls or virtual appointments with your agent to review everything on your property wish list.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop"
    },
    {
      number: 2,
      title: "Sharing Properties",
      description: "You and your agent can share listings and preferred properties within your REMAX tools to be viewed at any time.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      number: 3,
      title: "Answers You Need",
      description: "REMAX agents put themselves in the buyers shoes, to make sure we find the right home to back your buck.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    }
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
              src="https://blog.remax.com/wp-content/uploads/sites/4/2025/04/Virtual-Home-Buying-Guide.jpg" 
              alt="Virtual Home Buying"
              className="w-full object-cover rounded-lg"
            />
          </div>
          
          <h1 className="text-4xl font-[400] text-blue-800 mb-6">
            Welcome to REMAX's Virtual Home Buying Guide!
          </h1>
          
          <div className="text-black rounded-lg">
            <p className="text-lg leading-relaxed">
              Did you know that you can buy your dream home from anywhere in the world, with convenience and confidence? Whether you're relocating across the country, navigating a disability, or you're simply exploring options to make the purchasing process less stressful and more efficient, here's what you need to know about buying a home virtually.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Home Buying Steps */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[#004e9b] py-3 px-6 inline-block rounded mb-8">
            <h2 className="text-2xl font-bold">Virtual Home Buying, Step By Step</h2>
          </div>
          
          {/* Slider */}
          <div className="rounded-lg p-12 relative">
            <div className="grid md:grid-cols-3 gap-8 text-[#004e9b] mb-16">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div className="mb-4">
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {slide.number}. {slide.title}
                  </h3>
                  <p className="text-black text-sm">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <button 
                onClick={prevSlide}
                className="bg-[#004e9b] p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-[#004e9b] p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Go Virtual Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[#004e9b] py-3 px-6 inline-block rounded mb-8">
            <h2 className="text-2xl font-bold">Why Go Virtual?</h2>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              As technology evolves, clients should be able to stay ahead of the curve. There are times when buyers can't be present in person to view a property, but with REMAX's cutting-edge home buying tools, everything can be done seamlessly from your phone, computer, or tablet. Experienced REMAX <a href="#" className="text-blue-600 underline">real estate agents</a> dedicate their time to providing you with all the details you need about your property, ensuring you feel informed and confident, even from a distance.
            </p>
          </div>

          <div className="text-center">
            <button className="bg-[#004e9b] text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors uppercase text-sm">
              Find a REMAX Agent
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}