"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function OfficeSearch() {
  const [searchCity, setSearchCity] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showDropdown, setShowDropdown] = useState({
    language: false,
    specialty: false,
    realEstate: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    language: [],
    specialty: [],
    realEstate: [],
  });

  const filterOptions = {
    language: ["English", "Spanish", "French", "Chinese", "German"],
    specialty: [
      "Residential",
      "Commercial",
      "Luxury Homes",
      "New Construction",
      "Relocation",
    ],
    realEstate: ["Buy", "Sell", "Rent", "Lease", "Investment"],
  };

  const toggleDropdown = (key) => {
    setShowDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleFilter = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const offices = [
    {
      id: 1,
      name: "RE/MAX Dubai Marina",
      address:
        "Marina Plaza, Level 21, Dubai Marina, Dubai, United Arab Emirates",
      phone: "+971 4 123 4567",
    },
    {
      id: 2,
      name: "RE/MAX Downtown Dubai",
      address: "Boulevard Plaza, Tower 1, Downtown Dubai, Dubai, United Arab Emirates",
      phone: "+971 4 234 5678",
    },
    {
      id: 3,
      name: "RE/MAX Abu Dhabi Central",
      address: "Corniche Tower, Level 15, Corniche Road, Abu Dhabi, United Arab Emirates",
      phone: "+971 2 345 6789",
    },
    {
      id: 4,
      name: "RE/MAX Sharjah",
      address: "Al Majaz Waterfront, Building 3, Sharjah, United Arab Emirates",
      phone: "+971 6 456 7890",
    },
    {
      id: 5,
      name: "RE/MAX Palm Jumeirah",
      address: "Golden Mile Galleria, Palm Jumeirah, Dubai, United Arab Emirates",
      phone: "+971 4 567 8901",
    },
    {
      id: 6,
      name: "RE/MAX Business Bay",
      address:
        "Churchill Tower, Level 12, Business Bay, Dubai, United Arab Emirates",
      phone: "+971 4 678 9012",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Header Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            RE/MAX<sup className="text-sm">®</sup> Office Search
          </h1>
          <p className="text-gray-600 mb-8 max-w-4xl">
            We know the market, schools and communities — both as agents and
            neighbors. Use our search below to find a RE/MAX® agent or contact
            us so we can connect you with someone that will be the perfect fit
            for your needs. We look forward to the opportunity to serve you.
          </p>

          {/* Search Inputs */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Search by city, emirate or area"
              className="w-full px-4 py-3 border  text-gray-600 border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Search by name"
              className="w-full px-4 py-3 border  text-gray-600 border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-3 mb-6">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("language")}
                className="px-4 py-2  text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                Language <ChevronDown className="w-4 h-4" />
              </button>
              {showDropdown.language && (
                <div className="absolute top-full mt-1 left-0 bg-white border border-gray-300 rounded shadow-lg z-10 w-48">
                  {filterOptions.language.map((option) => (
                    <label
                      key={option}
                      className="flex  text-gray-600 items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.language.includes(option)}
                        onChange={() => toggleFilter("language", option)}
                        className="  text-gray-600 w-4 h-4"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Specialty Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("specialty")}
                className="px-4 py-2 border  text-gray-600 border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                Specialty <ChevronDown className="w-4 h-4" />
              </button>
              {showDropdown.specialty && (
                <div className="absolute top-full mt-1 left-0 bg-white border border-gray-300 rounded shadow-lg z-10 w-56">
                  {filterOptions.specialty.map((option) => (
                    <label
                      key={option}
                      className="flex  text-gray-600 items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.specialty.includes(option)}
                        onChange={() => toggleFilter("specialty", option)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Real Estate Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("realEstate")}
                className="px-4 py-2  text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                Real Estate Type <ChevronDown className="w-4 h-4" />
              </button>
              {showDropdown.realEstate && (
                <div className="absolute top-full mt-1 left-0 bg-white border border-gray-300 rounded shadow-lg z-10 w-48">
                  {filterOptions.realEstate.map((option) => (
                    <label
                      key={option}
                      className="flex   text-gray-600 items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.realEstate.includes(option)}
                        onChange={() => toggleFilter("realEstate", option)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Cards Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#004e9b] mb-4">
                    {office.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">{office.address}</p>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button className="text-[#004e9b] font-semibold hover:text-blue-800 transition-colors uppercase text-sm">
                      Details
                    </button>
                    <button className="text-[#004e9b] font-semibold hover:text-blue-800 transition-colors uppercase text-sm">
                      Contact
                    </button>
                    <span className="text-gray-700 font-medium">
                      {office.phone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="bg-[#004e9b] text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors font-semibold">
              Load More Offices
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
