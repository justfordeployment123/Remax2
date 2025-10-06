"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PropertySearch() {
  const [searchFilters, setSearchFilters] = useState({
    address: "",
    minPrice: "",
    maxPrice: "",
    minBeds: "NO MIN",
    maxBeds: "NO MAX",
    baths: "ANY",
  });

  const handleFilterChange = (filter, value) => {
    setSearchFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const clearFilters = () => {
    setSearchFilters({
      address: "",
      minPrice: "",
      maxPrice: "",
      minBeds: "NO MIN",
      maxBeds: "NO MAX",
      baths: "ANY",
    });
  };

  const handleSearch = () => {
    console.log("Search filters:", searchFilters);
    alert("Searching with filters: " + JSON.stringify(searchFilters, null, 2));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <Header />

      {/* Property Search Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">
              Homes for Sale
            </h1>

            {/* Address Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Address, City, ZIP, and More"
                value={searchFilters.address}
                onChange={(e) => handleFilterChange("address", e.target.value)}
                className="w-full px-4 text-black py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Price
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="No Min"
                  value={searchFilters.minPrice}
                  onChange={(e) =>
                    handleFilterChange("minPrice", e.target.value)
                  }
                  className="flex-1 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="text"
                  placeholder="No Max"
                  value={searchFilters.maxPrice}
                  onChange={(e) =>
                    handleFilterChange("maxPrice", e.target.value)
                  }
                  className="flex-1 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Beds Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Beds
              </label>

              {/* Min Beds */}
              <div className="mb-3">
                <div className="flex gap-2">
                  {["NO MIN", "1", "2", "3", "4"].map((option) => (
                    <button
                      key={`min-${option}`}
                      onClick={() => handleFilterChange("minBeds", option)}
                      className={`flex-1 px-4 py-2 border rounded text-sm font-medium transition-all ${
                        searchFilters.minBeds === option
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Beds */}
              <div>
                <div className="flex gap-2">
                  {["NO MAX", "1", "2", "3", "4"].map((option) => (
                    <button
                      key={`max-${option}`}
                      onClick={() => handleFilterChange("maxBeds", option)}
                      className={`flex-1 px-4 py-2 border rounded text-sm font-medium transition-all ${
                        searchFilters.maxBeds === option
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Baths Section */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Baths
              </label>
              <div className="flex gap-2">
                {["ANY", "1+", "2+", "3+", "4+"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleFilterChange("baths", option)}
                    className={`flex-1 px-4 py-2 border rounded text-sm font-medium transition-all ${
                      searchFilters.baths === option
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={clearFilters}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors uppercase text-sm tracking-wide"
              >
                Clear Filters
              </button>
              <button
                onClick={handleSearch}
                className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors font-semibold uppercase text-sm tracking-wide"
              >
                Search Homes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Properties for Sale
            </h2>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>Sort by: Price (Low to High)</option>
                <option>Price (High to Low)</option>
                <option>Newest First</option>
                <option>Size (Largest First)</option>
              </select>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button className="px-4 py-2 bg-blue-600 text-black">
                  List
                </button>
                <button className="px-4 py-2 border-l border-gray-300 hover:bg-gray-50">
                  Map
                </button>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Property 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    $425,000
                  </span>
                  <span className="text-sm text-gray-500">3 days ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Beautiful Family Home
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  123 Main Street, Springfield, IL 62701
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>3 beds</span>
                  <span>2 baths</span>
                  <span>1,850 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    $675,000
                  </span>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Modern Luxury Condo
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  456 Oak Avenue, Chicago, IL 60601
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>2 beds</span>
                  <span>2 baths</span>
                  <span>1,200 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    $325,000
                  </span>
                  <span className="text-sm text-gray-500">2 weeks ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cozy Starter Home
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  789 Pine Street, Peoria, IL 61602
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>2 beds</span>
                  <span>1 bath</span>
                  <span>1,100 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    $850,000
                  </span>
                  <span className="text-sm text-gray-500">5 days ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Spacious Estate
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  321 Elm Drive, Naperville, IL 60540
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>4 beds</span>
                  <span>3 baths</span>
                  <span>2,800 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    $550,000
                  </span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Downtown Loft
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  567 Lake Street, Chicago, IL 60654
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>2 beds</span>
                  <span>2 baths</span>
                  <span>1,500 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    $395,000
                  </span>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Charming Bungalow
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  890 Maple Avenue, Aurora, IL 60505
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>3 beds</span>
                  <span>2 baths</span>
                  <span>1,650 sqft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Load More Properties
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
