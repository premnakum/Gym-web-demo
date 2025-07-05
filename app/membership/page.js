'use client';

import React, { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

const MembershipPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    goals: '',
    experience: ''
  });

  const membershipPlans = [
    {
      id: 'day',
      name: 'One Day Pass',
      price: 15,
      period: 'per day',
      description: 'Perfect for trying us out',
      features: [
        'Full gym access for 24 hours',
        'Access to all equipment',
        'Locker room facilities',
        'Basic support'
      ],
      notIncluded: [
        'Group classes',
        'Personal training',
        'Nutrition guidance'
      ]
    },
    {
      id: 'monthly',
      name: 'Monthly Pass',
      price: 90,
      period: 'per month',
      description: 'Most popular choice',
      features: [
        'Unlimited gym access',
        'All group fitness classes',
        'Fitness assessment',
        'Locker rental',
        'Mobile app access',
        'Basic nutrition guidance'
      ],
      notIncluded: [
        'Personal training sessions',
        'Advanced nutrition consultation'
      ],
      popular: true
    },
    {
      id: 'yearly',
      name: 'Yearly Pass',
      price: 589,
      period: 'per year',
      description: 'Best value - Save $491',
      features: [
        'Everything in Monthly Pass',
        'Personal training (2 sessions/month)',
        'Advanced nutrition consultation',
        'Premium locker',
        'Guest passes (2 per month)',
        'Priority class booking',
        'Free fitness gear',
        'Wellness seminars'
      ],
      notIncluded: []
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setFormData({ ...formData, plan: planId });
    setShowSignupForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // This would typically integrate with Stripe for payment processing
    // For now, we'll simulate the signup process
    console.log('Membership signup:', formData);
    alert('Membership signup submitted! We\'ll contact you soon to complete the process.');
    setShowSignupForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      plan: '',
      goals: '',
      experience: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-black">
              <span className="text-orange-500">Slim</span> Fitness
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-500">Home</a>
              <a href="/membership" className="text-orange-500 font-semibold">Membership</a>
              <a href="/classes" className="text-gray-700 hover:text-orange-500">Classes</a>
              <a href="/blog" className="text-gray-700 hover:text-orange-500">Blog</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">CHOOSE YOUR MEMBERSHIP</h1>
          <p className="text-xl">Start your fitness journey with the plan that fits your lifestyle</p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black">${plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <XMarkIcon className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            MEMBERSHIP BENEFITS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Gym Access</h3>
              <p className="text-gray-600">Work out whenever it fits your schedule</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Certified professionals to guide your journey</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Group Classes</h3>
              <p className="text-gray-600">Variety of classes for all fitness levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form Modal */}
      {showSignupForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-black">Sign Up for Membership</h3>
              <button
                onClick={() => setShowSignupForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fitness Goals
                </label>
                <select
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select your primary goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="endurance">Improve Endurance</option>
                  <option value="strength">Build Strength</option>
                  <option value="general-fitness">General Fitness</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fitness Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowSignupForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MembershipPage;