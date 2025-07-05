'use client';

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, UserIcon, CalendarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const App = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Emily H.",
      comment: "It was a game-changer for my routine. The support is amazing! I've seen incredible results in just 3 months.",
      image: "https://images.unsplash.com/photo-1620862657760-72a639a2daef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZpdG5lc3N8ZW58MHx8fHwxNzUxNzE0ODczfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      name: "Alexandra T.",
      comment: "Joining Slim Fitness was the best fitness decision I made. Friendly team and powerful results that speak for themselves.",
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
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-black">
            <span className="text-orange-500">Slim</span> Fitness
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link href="/membership" className="text-gray-700 hover:text-orange-500">Membership</Link>
            <Link href="/classes" className="text-gray-700 hover:text-orange-500">Classes</Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-500">Blog</Link>
            <Link href="/nutrition" className="text-gray-700 hover:text-orange-500">Nutrition</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-orange-500">
            <UserIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl lg:text-8xl font-bold text-black mb-4">
                <div>GET SLIM</div>
                <div>STAY <span className="text-orange-500">FIT</span></div>
              </div>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                Transform your body and mind with our comprehensive fitness platform. From personalized workouts to nutrition guidance, we're here to support your journey to a healthier, stronger you.
              </p>
              <div className="flex space-x-4">
                <Link href="/membership" className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                  Start Your Journey
                </Link>
                <Link href="/classes" className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors">
                  Book a Class
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-12 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">15</div>
                  <div>Expert Trainers</div>
                </div>
                <div className="text-sm text-gray-600 ml-8">
                  <div className="font-semibold">500+</div>
                  <div>Active Members</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg"
                alt="Fitness transformation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Video thumbnail */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 p-4 rounded-lg">
                <div className="bg-white rounded-lg p-3 w-24 h-16 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <PlayIcon className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            EVERYTHING YOU NEED TO <br />
            <span className="text-orange-500">SUCCEED</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Personal Training</h3>
              <p className="text-gray-600">One-on-one sessions with certified trainers</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Class Booking</h3>
              <p className="text-gray-600">Schedule group classes that fit your lifestyle</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it</p>
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/2475875/pexels-photo-2475875.jpeg"
                alt="Personal Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Personal Training</h3>
                <p className="text-gray-600 mb-4">One-on-one sessions tailored to your goals</p>
                <Link href="/classes/personal-training" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1686749144292-a8dde2d2d499"
                alt="Outdoor Classes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Outdoor Classes</h3>
                <p className="text-gray-600 mb-4">Fresh air workouts in beautiful settings</p>
                <Link href="/classes/outdoor" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/4498475/pexels-photo-4498475.jpeg"
                alt="Digital Coaching"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Digital Coaching</h3>
                <p className="text-gray-600 mb-4">Virtual training sessions from anywhere</p>
                <Link href="/classes/digital" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1602827114685-efbb2717da9f"
                alt="Group Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Group Training</h3>
                <p className="text-gray-600 mb-4">Motivating group workouts with friends</p>
                <Link href="/classes/group" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">→</span>
                </Link>
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
              <h3 className="text-xl font-semibold text-black mb-2">Sign Up</h3>
              <p className="text-gray-600">Create your account and choose a membership</p>
            </div>
            
            <div className="w-16 h-px bg-gray-300 hidden md:block"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Train</h3>
              <p className="text-gray-600">Book classes and start your fitness journey</p>
            </div>
            
            <div className="w-16 h-px bg-gray-300 hidden md:block"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Track</h3>
              <p className="text-gray-600">Monitor your progress and achieve your goals</p>
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
              <Link href="/membership" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors inline-block">
                Choose Plan
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center transform scale-105 shadow-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">MONTHLY PASS</h3>
              <p className="text-3xl font-bold text-black mb-4">$90<span className="text-lg font-normal">/per month</span></p>
              <p className="text-gray-600 mb-6">Unlimited monthly access to gym, trainers and group sessions.</p>
              <Link href="/membership" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors inline-block">
                Choose Plan
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">YEARLY PASS</h3>
              <p className="text-3xl font-bold text-black mb-4">$589<span className="text-lg font-normal">/per year</span></p>
              <p className="text-gray-600 mb-6">Save more with full year access and benefits.</p>
              <Link href="/membership" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors inline-block">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            MEET YOUR <br />
            <span className="text-orange-500">EXPERT TRAINERS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <img
                src="https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg"
                alt="Coach 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">Alex Johnson</h3>
              <p className="text-gray-600 mb-2">Strength Training Expert</p>
              <p className="text-sm text-gray-500">5+ years experience</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxwZXJzb25hbCUyMHRyYWluZXJ8ZW58MHx8fHwxNzUxNzE0ODY4fDA&ixlib=rb-4.1.0&q=85"
                alt="Coach 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">Sarah Williams</h3>
              <p className="text-gray-600 mb-2">Yoga & Flexibility Coach</p>
              <p className="text-sm text-gray-500">8+ years experience</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <img
                src="https://images.pexels.com/photos/32852914/pexels-photo-32852914.jpeg"
                alt="Coach 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">Mike Chen</h3>
              <p className="text-gray-600 mb-2">Cardio & Endurance Specialist</p>
              <p className="text-sm text-gray-500">6+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            WHAT OUR MEMBERS SAY <br />
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
                <span className="text-orange-500">Slim</span> Fitness
              </div>
              <p className="text-gray-400">
                Your transformation starts here. Join our community and achieve your fitness goals.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/membership" className="text-gray-400 hover:text-white">Membership</Link></li>
                <li><Link href="/classes" className="text-gray-400 hover:text-white">Classes</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/nutrition" className="text-gray-400 hover:text-white">Nutrition Guide</Link></li>
                <li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">+1 800-565-9999</p>
              <p className="text-orange-500 text-sm">24/7 Support Available!</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Slim Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;