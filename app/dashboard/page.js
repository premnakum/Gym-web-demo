'use client';

import React, { useState } from 'react';
import { 
  UserIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  CogIcon,
  FireIcon,
  TrophyIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    membershipType: 'Monthly Pass',
    joinDate: '2024-01-15',
    currentWeight: 180,
    goalWeight: 165,
    workoutsThisMonth: 12,
    totalWorkouts: 48
  };

  const workoutStats = [
    { name: 'Workouts This Month', value: 12, target: 16, icon: FireIcon },
    { name: 'Total Workouts', value: 48, target: 50, icon: TrophyIcon },
    { name: 'Average Duration', value: '45 min', target: '60 min', icon: ClockIcon },
    { name: 'Goals Achieved', value: 3, target: 5, icon: CheckCircleIcon }
  ];

  const recentWorkouts = [
    { date: '2024-01-20', type: 'Strength Training', duration: '45 min', calories: 320 },
    { date: '2024-01-18', type: 'Cardio', duration: '30 min', calories: 250 },
    { date: '2024-01-16', type: 'Yoga', duration: '60 min', calories: 180 },
    { date: '2024-01-14', type: 'HIIT', duration: '25 min', calories: 300 }
  ];

  const upcomingClasses = [
    { name: 'Morning Yoga', date: '2024-01-22', time: '8:00 AM', trainer: 'Sarah Williams' },
    { name: 'HIIT Training', date: '2024-01-23', time: '6:00 PM', trainer: 'Mike Chen' },
    { name: 'Strength Training', date: '2024-01-24', time: '10:00 AM', trainer: 'Alex Johnson' }
  ];

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
              <a href="/membership" className="text-gray-700 hover:text-orange-500">Membership</a>
              <a href="/classes" className="text-gray-700 hover:text-orange-500">Classes</a>
              <a href="/dashboard" className="text-orange-500 font-semibold">Dashboard</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Welcome back, {userData.name}!</h1>
              <p className="text-gray-600">Ready to crush your fitness goals today?</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Member since</p>
              <p className="text-lg font-semibold text-orange-500">{userData.joinDate}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('workouts')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'workouts'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Workouts
            </button>
            <button
              onClick={() => setActiveTab('classes')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'classes'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Classes
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'progress'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Progress
            </button>
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workoutStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                      <p className="text-2xl font-semibold text-black">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Recent Workouts</h3>
                <div className="space-y-4">
                  {recentWorkouts.map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-black">{workout.type}</p>
                        <p className="text-sm text-gray-500">{workout.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-700">{workout.duration}</p>
                        <p className="text-sm text-orange-500">{workout.calories} cal</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Upcoming Classes</h3>
                <div className="space-y-4">
                  {upcomingClasses.map((cls, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-black">{cls.name}</p>
                        <p className="text-sm text-gray-500">{cls.trainer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-700">{cls.date}</p>
                        <p className="text-sm text-orange-500">{cls.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workouts Tab */}
        {activeTab === 'workouts' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Log New Workout</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Select workout type</option>
                  <option>Strength Training</option>
                  <option>Cardio</option>
                  <option>Yoga</option>
                  <option>HIIT</option>
                </select>
                <input
                  type="number"
                  placeholder="Duration (minutes)"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Log Workout
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Workout History</h3>
              <div className="space-y-4">
                {recentWorkouts.map((workout, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <FireIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-black">{workout.type}</p>
                        <p className="text-sm text-gray-500">{workout.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-700">{workout.duration}</p>
                      <p className="text-sm text-orange-500">{workout.calories} calories</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Classes Tab */}
        {activeTab === 'classes' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Book a Class</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Select class type</option>
                  <option>Yoga</option>
                  <option>HIIT</option>
                  <option>Strength Training</option>
                  <option>Cardio</option>
                </select>
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Select time</option>
                  <option>6:00 AM</option>
                  <option>8:00 AM</option>
                  <option>10:00 AM</option>
                  <option>6:00 PM</option>
                  <option>8:00 PM</option>
                </select>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Book Class
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Your Booked Classes</h3>
              <div className="space-y-4">
                {upcomingClasses.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-black">{cls.name}</p>
                        <p className="text-sm text-gray-500">with {cls.trainer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-700">{cls.date}</p>
                      <p className="text-sm text-orange-500">{cls.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Weight Progress</h3>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Current Weight</p>
                  <p className="text-2xl font-bold text-black">{userData.currentWeight} lbs</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Goal Weight</p>
                  <p className="text-2xl font-bold text-orange-500">{userData.goalWeight} lbs</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Progress</p>
                  <p className="text-2xl font-bold text-green-500">-15 lbs</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Monthly Goals</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Complete 16 workouts</span>
                  <span className="text-orange-500 font-semibold">12/16</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Attend 8 group classes</span>
                  <span className="text-orange-500 font-semibold">5/8</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Lose 2 lbs</span>
                  <span className="text-green-500 font-semibold">✓ Achieved</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;