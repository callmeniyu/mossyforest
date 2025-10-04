"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function MossyForestPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/mossyforest (1).jpg",
    "/images/mossyforest (2).jpg",
    "/images/mossyforest (3).jpg",
    "/images/mossyforest (4).jpg",
    "/images/mossyforest (5).jpg",
    "/images/mossyforest (6).jpg",
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt="Mossy Forest Cameron Highlands"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Mossy Forest
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-lg font-light">
              Cameron Highlands' Most Mystical Destination
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Discover the enchanting cloud forest where ancient trees are
              draped in emerald moss, creating a fairytale landscape 2,000
              meters above sea level.
            </p>

            {/* Main CTA Button */}
            <a
              href="https://www.oastel.com/tours/half-day-mossy-forest-land-rover-trip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25">
                Book Your Mossy Forest Adventure
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Mossy Forest Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                What Makes Mossy Forest Special?
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  The Mossy Forest in Cameron Highlands is a unique cloud forest
                  ecosystem, where the cool, misty climate creates perfect
                  conditions for moss and ferns to thrive on every surface.
                </p>
                <p>
                  Located at an altitude of 2,000 meters, this mystical forest
                  feels like stepping into another world. The trees are
                  completely covered in thick, green moss, creating an ethereal
                  atmosphere that photographers and nature lovers can't resist.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-emerald-800">Altitude</h3>
                    <p className="text-emerald-600">2,000m above sea level</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-emerald-800">Climate</h3>
                    <p className="text-emerald-600">Cool & misty year-round</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/mossyforest (3).jpg"
                alt="Mossy Forest ecosystem"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Experience the Magic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Mossy Forest view ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Mossy Forest Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our expert-guided Land Rover expedition to explore this magical
            destination safely and comfortably.
          </p>

          {/* Featured Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Expert Guides</h3>
              <p className="opacity-90">
                Professional local guides with deep forest knowledge
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">
                Land Rover Experience
              </h3>
              <p className="opacity-90">
                Comfortable 4WD journey through mountain terrain
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Budget Friendly</h3>
              <p className="opacity-90">
                Best value tours starting from RM 50 per person
              </p>
            </div>
          </div>

          {/* Primary CTA */}
          <a
            href="https://www.oastel.com/tours/half-day-mossy-forest-land-rover-trip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-white text-emerald-700 px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25">
              Get Most Preferred Budget Friendly Mossy Forest Tour →
            </button>
          </a>

          <p className="mt-6 text-sm opacity-80">
            Instant booking • Free cancellation • Best price guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Mossy Forest Cameron Highlands
          </h3>
          <p className="text-gray-400 mb-6">
            Your gateway to Cameron Highlands' most mystical destination
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 MossyForest.my • Experience the magic of Cameron Highlands
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
