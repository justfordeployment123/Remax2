"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HomeValuation() {
  const [address, setAddress] = useState("");

  const handleSearch = () => {
    if (address.trim()) {
      console.log("Searching for:", address);
      alert("Searching for market report: " + address);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[850px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://s3.amazonaws.com/bmlsdevcdn/findbuyers/32450_images/d4098ca9997850a0d5ae4d3f3c297282.jpg)",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-6 text-center -mt-40">
          <div className="bg-white/50 rounded-2xl p-14 shadow-2xl border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#404041] mb-5">
              What is Your Home Worth?
            </h1>
            <p className="text-lg text-gray-900 mb-10 ">
              Check current market values for your home and view profiles of
              potential buyers.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-3xl mx-auto">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address to get market report"
                className="w-full px-6 py-2 pr-14 text-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent shadow-sm bg-white/90"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-colors"
              >
                <Search className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Include Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 uppercase tracking-wide">
            Results Include
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#003da5] rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center uppercase tracking-wide">
                Home Value Estimates
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                An automated value estimate can give you a rough estimate of the
                value of your home. This can be a useful starting point, before
                you talk to a RE/MAX agent.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#003da5] rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center uppercase tracking-wide">
                Buyer Breakdown
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Using a proprietary algorithm, you can see how many people are
                looking for homes like yours. If you are thinking of selling
                your home, this is the best way to get a feel for the market.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#003da5] rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center uppercase tracking-wide">
                Recent Nearby Sales
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                These facts can give you the edge in understanding what to
                expect when selling your home.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
