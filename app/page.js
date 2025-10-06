'use client'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('BUY');
  
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://static-images.remax.com/assets/web/homepage/homepage-hero-4-2025.jpg')`
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-8 max-w-5xl">
            WHEN HOME MATTERS MOST, GO WITH THE MOST TRUSTED.
          </h1>

          {/* Search Container */}
          <div className="w-full max-w-4xl">
            {/* Tabs */}
            <div className="flex justify-center">
              <div className="bg-gray-100/90 rounded-t-lg flex">
                {['BUY', 'RENT', 'SELL', 'AGENTS', 'OFFICES'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-semibold text-sm transition-all ${
                      activeTab === tab
                        ? 'bg-white text-gray-800 border-b-3 border-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white/95 backdrop-blur-sm rounded-b-lg rounded-t-none shadow-2xl p-4">
              <div className="flex gap-0">
                <input
                  type="text"
                  placeholder="Address, City, ZIP, and More"
                  className="flex-1 px-4 py-3 text-base border-2 border-gray-300 rounded-l focus:outline-none focus:border-blue-600"
                />
                <button className="bg-red-600 text-white px-6 py-3 rounded-r hover:bg-red-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <p className="text-xs text-gray-600 mt-3 text-center flex items-center justify-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                LISTING DATA LAST UPDATED TODAY AT 08:38
              </p>
            </div>

            {/* Global Search Link */}
            <p className="text-white text-sm mt-4 text-center flex items-center justify-center">
              Search for RE/MAX properties in over 110 countries and territories
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src="https://static-images.remax.com/assets/web/homepage/bmta-red-2024.png"
                alt="BrandSpark Most Trusted"
                className="w-16 h-20 object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                #1 Most Trusted Real Estate Agents in the UAE
              </h2>
              <p className="text-gray-600">
                Most trusted Real Estate Agency brand in the UAE, providing exceptional service
                to residents and investors across all Emirates since 2019.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://static-images.remax.com/assets/web/homepage/Exteriors_Fuji_3520.jpg"
                alt="House exterior"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Have confidence in any market with us.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                RE/MAX<sup>®</sup> agents have the experience to get the job done in today's market<sup>1</sup>,
                backed by a robust network of over 140,000 agents in more than 9,000 offices
                worldwide. With our extensive global connections and deep local insights, you gain
                an edge that transcends what you'll find online.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The right time to move is when you're with the right agent—nobody sells more real estate than RE/MAX<sup>2</sup>.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                  FIND YOUR RE/MAX AGENT TODAY
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition">
                  GET THE HOMEBUYER'S GUIDE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Searches Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Popular Searches Nearby Dubai, UAE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'New Listings', image: 'https://static-images.remax.com/assets/web/homepage/01_NewListings.jpg' },
              { title: 'Luxury Homes', image: 'https://static-images.remax.com/assets/web/homepage/02_LuxuryHomes.jpg' },
              { title: 'Open Houses', image: 'https://static-images.remax.com/assets/web/homepage/03_OpenHouses.jpg' },
              { title: 'Price Reductions', image: 'https://static-images.remax.com/assets/web/homepage/04_PriceReductions.jpg' },
              { title: 'Virtual Tours', image: 'https://static-images.remax.com/assets/web/homepage/05_VirtualTours.jpg' },
              { title: 'Miracle Homes', image: 'https://static-images.remax.com/assets/web/childrens_hospitals/childrens_hospital.jpg' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RE/MAX News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">RE/MAX News</h2>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 h-64 md:h-auto">
                  <img
                    src="https://news.remax.com/wp-content/uploads/2025/06/May_Home.jpeg"
                    alt="Market Update"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    UAE Market Update: New Listings on the Rise Across All Emirates
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">June 18, 2025</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4 w-fit">
                    Market Trends
                  </span>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore comprehensive data pertaining to new listings, property prices, time spent on market and
                    more in the latest RE/MAX UAE Housing Report for May 2025.
                  </p>
                  <a href="#" className="text-blue-600 font-medium hover:underline uppercase text-sm">READ POST</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-end">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-md ml-auto text-right">
              <div className="mb-6">
                <svg className="w-16 h-16 ml-auto mb-4 text-white" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M50 5 Q70 25, 50 50 T50 95 M50 5 Q30 25, 50 50 T50 95 M5 50 Q25 30, 50 50 T95 50 M5 50 Q25 70, 50 50 T95 50" stroke="white" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">Worldwide</h2>
              <div className="w-20 h-1 bg-red-600 mb-4 ml-auto"></div>
              <p className="text-white text-lg mb-6">One World. One Search.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://static-images.remax.com/assets/web/homepage/08_Commercial.jpg')`
          }}
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold text-white mb-2">Commercial</h2>
              <div className="w-20 h-1 bg-red-600 mb-4"></div>
              <p className="text-white text-lg mb-6">Commercial with Confidence</p>
              <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
                EXPLORE COMMERCIAL REAL ESTATE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Collection Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(173,216,230,0.15), rgba(173,216,230,0.15)), linear-gradient(rgba(0,66,204,0.7), rgba(0,66,204,0.7)), url('https://static-images.remax.com/assets/web/homepage/09_Collection.jpg')`
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Luxury</h2>
            <div className="w-20 h-1 bg-white mb-4 mx-auto"></div>
            <p className="text-lg mb-6">Fine Homes & Luxury Properties</p>
            <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-blue-600 transition">
              DISCOVER LUXURY
            </button>
          </div>
        </div>
      </section>

      {/* Footer - City Links Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Real Estate Listings By City</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="text-blue-600 hover:underline">Properties for sale in Dubai</a>
            <a href="#" className="text-blue-600 hover:underline">Properties for sale in Abu Dhabi</a>
            <a href="#" className="text-blue-600 hover:underline">Properties for sale in Sharjah</a>
            <a href="#" className="text-blue-600 hover:underline">Properties for sale in Ajman</a>
            <a href="#" className="text-blue-600 hover:underline">Properties for sale in Ras Al Khaimah</a>
            <a href="#" className="text-blue-600 hover:underline">Properties for sale in Fujairah</a>
            <a href="#" className="text-blue-600 hover:underline">Properties for sale in Umm Al Quwain</a>
            <a href="#" className="text-blue-600 hover:underline">Properties for sale in Al Ain</a>
          </div>
        </div>
      </section>

      {/* Footer */}
  <Footer/>
    </main>
  )
}