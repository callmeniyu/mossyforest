import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Users,
  Camera,
  Leaf,
  Mountain,
  Star,
  Info,
  TreePine,
  Eye,
  Shield,
  Calendar,
} from "lucide-react";

export default function MossyForestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Official Header */}
      <header className="official-header py-2">
        <div className="container-max section-padding">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Mossy Forest Eco Park</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span className="text-gray-300">Cameron Highlands, Malaysia</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-300">Daily 8:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Mossy Forest Cameron Highlands - Ancient moss-covered trees"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white section-padding">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mossy Forest
              <span className="block text-3xl md:text-5xl text-green-300 mt-2">
                Eco Park
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience Cameron Highlands's most enchanting highland forest
              sanctuary at 2,000 meters above sea level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#visit-info"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Info className="w-5 h-5" />
                <span>Visitor Information</span>
              </a>
              <a
                href="https://www.oastel.com/tours/half-day-mossy-forest-land-rover-trip"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <Mountain className="w-5 h-5" />
                <span>How to Reach Mossy Forest</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-green-700 text-white py-4">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">
                Brinchang, Cameron Highlands
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mountain className="w-5 h-5" />
              <span className="font-semibold">2,000m Above Sea Level</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">8:00 AM - 5:00 PM Daily</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TreePine className="w-5 h-5" />
              <span className="font-semibold">Batu Gangan Forest Reserve</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-forest mb-6">
                A Living Ancient Ecosystem
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Mossy Forest Eco Park is one of the most enchanting
                attractions in Cameron Highlands. Perched about 2,000 meters
                above sea level, it stays cool, misty, and damp throughout the
                year.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The unique climate allows moss, ferns, orchids, and pitcher
                plants to thrive, wrapping the trees in a green carpet and
                giving the forest a fairytale-like atmosphere.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-lg card-shadow">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-bold text-forest">Upper Dipterocarp</h3>
                  <p className="text-sm text-gray-600">Forest Type</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg card-shadow">
                  <Mountain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-bold text-forest">Montane Highland</h3>
                  <p className="text-sm text-gray-600">Ecosystem</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/image (3).jpg"
                alt="Mossy Forest wooden boardwalk through ancient trees"
                width={600}
                height={400}
                className="rounded-lg card-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section id="visit-info" className="py-16 bg-green-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest mb-4">
              Visitor Information
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know for your visit to Mossy Forest Eco
              Park
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Admission Fees */}
            <div className="bg-white rounded-lg card-shadow p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-forest">
                  Admission Fees
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-forest mb-3">
                    Malaysian Citizens
                  </h4>
                  <div className="space-y-2 text-black">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span>Adults (13–59 years)</span>
                      <span className="font-bold text-green-600">RM 10.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span>Children (3–12 years)</span>
                      <span className="font-bold text-green-600">RM 5.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span>Senior Citizens (60+)</span>
                      <span className="font-bold text-green-600">RM 5.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Persons with Disabilities</span>
                      <span className="font-bold text-green-600">FREE</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-forest mb-3">
                    Non-Citizens
                  </h4>
                  <div className="space-y-2 text-black">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span>Adults (13–59 years)</span>
                      <span className="font-bold text-amber-600">RM 30.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span>Children (3–12 years)</span>
                      <span className="font-bold text-amber-600">RM 15.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span>Senior Citizens (60+)</span>
                      <span className="font-bold text-amber-600">RM 30.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Persons with Disabilities</span>
                      <span className="font-bold text-green-600">FREE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips and Guidelines */}
            <div className="bg-white rounded-lg card-shadow p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-forest">
                  Tips for Visitors
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Bring a jacket</strong> - The weather can be chilly
                    and damp throughout the day.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Wear comfortable walking shoes</strong> - The
                    boardwalk can be slippery when wet.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Visit in the morning</strong> - Clearer weather with
                    less fog for better panoramic views.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Arrive early</strong> - The forest is very popular,
                    so early arrival helps avoid crowds.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-bold text-forest">Opening Hours</span>
                </div>
                <p className="text-green-800 font-semibold">
                  Daily: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore the Mossy Forest?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Need help getting to Mossy Forest Cameron Highlands? Discover the
            easiest and most convenient way to reach this natural wonder with
            guided transportation options.
          </p>
          <a
            href="https://www.oastel.com/tours/half-day-mossy-forest-land-rover-trip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            <Mountain className="w-6 h-6" />
            <span>How to Reach Mossy Forest Cameron Highlands</span>
          </a>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Capture the beauty of Cameron Highlands's most mysterious forest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-lg card-shadow"
              >
                <Image
                  src={`/images/image (${num}).jpg`}
                  alt={`Mossy Forest Cameron Highlands - Image ${num}`}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Mossy Forest Eco Park</h3>
                  <p className="text-sm text-gray-400">Cameron Highlands</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Cameron Highlands's premier highland forest sanctuary,
                preserving ancient ecosystems for future generations while
                providing sustainable eco-tourism experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Location</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Brinchang, Cameron Highlands</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mountain className="w-4 h-4" />
                  <span>Batu Gangan Forest Reserve</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Daily: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Mossy Forest tour",
                  "Mossy Forest Cameron Highlands",
                  "Cameron Highlands Mossy Forest",
                  "Mossy Forest hiking",
                  "Mossy Forest trekking",
                  "Mossy Forest entrance fee",
                  "Mossy Forest ticket price",
                  "Mossy Forest Cameron Highlands fees",
                  "Mossy Forest admission cost",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    className="text-xs bg-green-700 text-white px-2 py-1 rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
