"use client";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FindAgent() {
  const [searchCity, setSearchCity] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showFilters, setShowFilters] = useState({
    language: false,
    experience: false,
    licensed: false,
    expertise: false,
  });

  const agents = [
    {
      id: 1,
      name: "Matthew Karjalahti",
      title: "Broker, Owner",
      licensed: "Licensed in IA",
      location: "Grinnell",
      company: "RE/MAX Partners Realty",
      phone: "(641) 260-0672",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Trey LaQuey",
      title: "Associate",
      licensed: "Licensed in TX",
      location: "Plano",
      company: "RE/MAX Dallas Suburbs",
      phone: "(469) 734-3815",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Sean Seigel",
      title: "Associate",
      licensed: "Licensed in CT, RI",
      location: "Mystic",
      company: "RE/MAX Coast and Country",
      phone: "(401) 207-5367",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Patrick Stracuzzi",
      title: "Broker Owner",
      licensed: "Licensed in FL",
      location: "Stuart",
      company: "RE/MAX Community",
      phone: "",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Header Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            RE/MAX<sup className="text-sm">®</sup> Agent Search
          </h1>
          <p className="text-gray-600 mb-8 max-w-4xl">
            We know the market, schools and communities — both as agents and
            neighbors. Use our search below to find a RE/MAX® agent or contact
            us so we can connect you with someone that will be the perfect fit
            for your needs. We look forward to the opportunity to serve you.
          </p>

          {/* Search Inputs */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Search by city, state or zip"
                className="w-full px-4 text-gray-600 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search by name"
                className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex text-gray-600 flex-wrap gap-3 mb-6 items-center">
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2">
              Language <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded bg-gray-100 transition-colors flex items-center gap-2">
              Rentals ✕
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2">
              Years of Experience <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2">
              Licensed In <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2">
              Expertise <ChevronDown className="w-4 h-4" />
            </button>
            <label className="flex items-center gap-2 ml-4">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-700">Must have photo</span>
            </label>
          </div>

          {/* Sort and Results */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-600">Sort:</span>
            <button className="text-blue-600 font-medium flex items-center gap-1">
              No Sort <ChevronDown className="w-4 h-4" />
            </button>
            <span className="text-gray-600">6,130 results</span>
          </div>
        </div>
      </section>

      {/* Agent Cards Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex gap-4">
                    {/* Agent Photo */}
                    <div className="flex-shrink-0">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-24 h-24 rounded object-cover"
                      />
                    </div>

                    {/* Agent Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#004e9b] mb-1">
                        {agent.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {agent.title}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {agent.licensed}
                      </p>

                      <p className="text-sm text-gray-700 font-medium">
                        {agent.location}
                      </p>
                      <p className="text-sm text-gray-600">{agent.company}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
  <button className="text-[#004e9b] font-semibold hover:text-blue-800 transition-colors uppercase text-sm">
    Details
  </button>
  <button className="text-[#004e9b] font-semibold hover:text-blue-800 transition-colors uppercase text-sm">
    Contact
  </button>
  <span className="text-gray-700 font-medium">
    {agent.phone}
  </span>
</div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="bg-[#004e9b] text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors font-semibold">
              Load More Agents
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
