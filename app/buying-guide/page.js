"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BuyingGuide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: ''
  });

  const slides = [
    {
      number: 1,
      title: "Determine Your Budget",
      description: "Before you start looking at homes, it's important to know what you can afford. A REMAX agent can help you understand your financial position.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop"
    },
    {
      number: 2,
      title: "Pick a REMAX Agent",
      description: "Buying a home is a significant investment. Whether it's your first or you're relocating, a trusted REMAX agent can streamline the process, helping with searches, agreements, inspections, and closings.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop"
    },
    {
      number: 3,
      title: "Start Your Home Search",
      description: "Work with your agent to find homes that match your criteria. Visit properties, attend open houses, and explore neighborhoods.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Request submitted successfully!');
  };

  return (
    <main className="min-h-screen bg-gray-50">
    <Header/>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <img 
              src="https://blog.remax.com/wp-content/uploads/sites/4/2025/04/REMAX-Home-Buyers-Guide.jpg?w=1500&format=auto" 
              alt="REMAX Home Buying"
              className="w-full object-cover rounded-lg"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-blue-800 mb-6">
            Welcome to the REMAX Home Buyer's Guide!
          </h1>
          
          <div className="text-gray-700 leading-relaxed mb-6">
            <p className="mb-4">
              Buying a home can be one of the most exciting experiences of your life. With the right support system and the help of a trusted <a href="#" className="text-blue-600 underline">REMAX professional</a>, you will make the most informed decisions. The <em>REMAX Home Buyer's Guide</em> breaks down the buying process step by step, so you can start your journey feeling confident and prepared. From creating a budget to signing your name on the dotted line, here's what you need to know about the home buying process.
            </p>
          </div>

          <div className="text-center">
            <button className="bg-[#004e9b] text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors uppercase text-sm">
              Download the REMAX Home Buyer's Guide
            </button>
          </div>
        </div>
      </section>

      {/* Buying Step by Step Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Buying a Home, Step by Step</h2>
          
          {/* Slider */}
          <div className="bg-[#1e3a5f] rounded-lg p-8 relative">
            <div className="flex items-center justify-between text-white">
              <div className="flex-1 pr-8">
                <h3 className="text-2xl font-bold mb-4">
                  {slides[currentSlide].number}. {slides[currentSlide].title}
                </h3>
                <p className="text-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-64 h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <button 
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Tips Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Top Tips for Working With Your Buying Agent
          </h2>
          <p className="text-gray-600 mb-8">
            A home is likely the biggest investment you'll make in your lifetime, so it can feel overwhelming. Your REMAX agent is here to answer your questions and take the guesswork out of the transaction. These three tips will help you maximize the agent-client relationship.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
                alt="Find the Right Agent"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Find the Right Agent.</h3>
                <p className="text-gray-600 text-sm">
                  Research real estate agents online, read reviews and solicit recommendations from friends and family.
                </p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop"
                alt="Communicate"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Communicate.</h3>
                <p className="text-gray-600 text-sm">
                  Choose an agent who you feel has your best interests in mind and will help you navigate the process.
                </p>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop"
                alt="Trust the Process"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Trust the Process.</h3>
                <p className="text-gray-600 text-sm">
                  This may be your first time buying a home, but your agent has guided many through the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Tools to Help You Find Your Home
          </h2>
          
          <p className="text-gray-600 mb-6">
            Once you've defined your home search goals, discussed them with your REMAX agent, and have spoken with a mortgage professional to see what your buying power is, you're ready to find your dream home! In addition to local knowledge on the current market, REMAX offers online tools that can help make your initial search as easy as possible.
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Find a Home Using Our Interactive Map Search</h3>
              <p className="text-gray-600 text-sm">
                We know that location plays an important role in the home buying process. Use the map search available on our website to view homes located in or near the area you love.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Get to Know the Neighborhood</h3>
              <p className="text-gray-600 text-sm">
                Feel confident and informed about your neighborhood choice! On any listing page, you can learn more about the communities you are interested in, including a breakdown of the local population, school ratings and more.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Create an Account on Our Website</h3>
              <p className="text-gray-600 text-sm">
                Sign up for an account on our website to save searches, favorite homes you love, receive real time property alerts, and more!
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">We're Here For You.</h3>
            <p className="text-gray-600 mb-4">
              Buying a home can seem like a lot – because it is. But you're not alone. With the right experience and tools, a <a href="#" className="text-blue-600 underline">REMAX agent</a> can help you find the home of your dreams.
            </p>
            <button className="bg-[#004e9b] text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors uppercase text-sm">
              Find a REMAX Agent Today!
            </button>
          </div>
        </div>
      </section>

      {/* Buyer's Guide Form */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Buyer's Guide</h2>
            <p className="text-gray-600 mb-6">
              Ready for your next move? Let's find your perfect neighborhood, home and price.
            </p>

            <div>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-6">
                By clicking "Submit Request" below, you are agreeing to the <a href="#" className="text-blue-600 underline">Terms of Use</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a> and are agreeing to receive marketing email messages from REMAX, LLC and/or marketing emails, calls or texts.
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
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}