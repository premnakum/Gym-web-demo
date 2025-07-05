'use client';

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/solid';

const App = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Emily H.",
      comment: "It was a game-changer for my routine. The support is amazing! I've seen incredible results in just 3 months.",
      image: "https://images.unsplash.com/photo-1620862657760-72a639a2daef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZpdG5lc3N8ZW58MHx8fHwxNzUxNzE0ODczfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      name: "Alexandra T.",
      comment: "Joining MURA was the best fitness decision I made. Friendly team and powerful results that speak for themselves.",
      image: "https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-black">
            <span className="text-orange-500">m</span>URA
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Membership</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">About</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Blog</a>
          </nav>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Contact Us
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl lg:text-8xl font-bold text-black mb-4">
                <div>NO PAIN</div>
                <div>NO GAIN</div>
              </div>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                We believe that fitness is not just a destination; it's a journey. Our end-to-end journey is designed to inspire and empower you to reach your health and wellness goals.
              </p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                Explore More
              </button>
              
              {/* Stats */}
              <div className="mt-12 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">15</div>
                  <div>Active Coaches</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg"
                alt="Muscular man with barbell"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Video thumbnail */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 p-4 rounded-lg">
                <div className="bg-white rounded-lg p-3 w-24 h-16 flex items-center justify-center">
                  <PlayIcon className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            CLASSES DESIGNED <br />
            <span className="text-orange-500">FOR YOU</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2475875/pexels-photo-2475875.jpeg"
                alt="Personal Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Personal Training</h3>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1686749144292-a8dde2d2d499"
                alt="Outdoor Classes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Outdoor Classes</h3>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4498475/pexels-photo-4498475.jpeg"
                alt="Digital Coaching"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Digital Coaching</h3>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602827114685-efbb2717da9f"
                alt="Group Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Group Training</h3>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            HOW IT WORKS
          </h2>
          
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-black">Start</h3>
            </div>
            
            <div className="w-16 h-px bg-gray-300"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-black">Train</h3>
            </div>
            
            <div className="w-16 h-px bg-gray-300"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-black">Sleep</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-orange-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            JOIN TODAY
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">ONE DAY PASS</h3>
              <p className="text-3xl font-bold text-black mb-4">$15<span className="text-lg font-normal">/per day</span></p>
              <p className="text-gray-600 mb-6">Get access for a single day with all facilities.</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Choose Plan
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">MONTHLY PASS</h3>
              <p className="text-3xl font-bold text-black mb-4">$90<span className="text-lg font-normal">/per month</span></p>
              <p className="text-gray-600 mb-6">Unlimited monthly access to gym, trainers and group sessions.</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Choose Plan
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">YEARLY PASS</h3>
              <p className="text-3xl font-bold text-black mb-4">$589<span className="text-lg font-normal">/per year</span></p>
              <p className="text-gray-600 mb-6">Save more with full year access and benefits.</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            ARE YOU LOOKING FOR A MENTOR?<br />
            <span className="text-orange-500">COACHES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg"
                alt="Coach 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">Alex Johnson</h3>
              <p className="text-gray-600">Strength Training Expert</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxwZXJzb25hbCUyMHRyYWluZXJ8ZW58MHx8fHwxNzUxNzE0ODY4fDA&ixlib=rb-4.1.0&q=85"
                alt="Coach 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">Sarah Williams</h3>
              <p className="text-gray-600">Yoga & Flexibility Coach</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/32852914/pexels-photo-32852914.jpeg"
                alt="Coach 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">Mike Chen</h3>
              <p className="text-gray-600">Cardio & Endurance Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            WHAT OUR CLIENTS SAY <br />
            <span className="text-orange-500">ABOUT US</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                
                <div className="text-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    "{testimonials[currentTestimonial].comment}"
                  </p>
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-orange-500">m</span>URA
              </div>
              <p className="text-gray-400">
                Your fitness journey starts here. Join us and transform your life.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Membership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">+1 800-565-9999</p>
              <p className="text-orange-500 text-sm">New Schedule!</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MURA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;