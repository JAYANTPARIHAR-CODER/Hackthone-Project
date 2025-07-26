import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Search, Filter, Star, MapPin, TrendingUp, DollarSign, Package, Bell, User, Settings } from 'lucide-react';

interface DashboardProps {
  isAuthenticated: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isAuthenticated }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  const recentSearches = [
    { material: 'Steel Rods', quantity: '50 tons', date: '2 days ago' },
    { material: 'Aluminum Sheets', quantity: '200 units', date: '5 days ago' },
    { material: 'Copper Wire', quantity: '1000 meters', date: '1 week ago' }
  ];

  const favoriteSuppliers = [
    { name: 'Global Steel Solutions', rating: 4.8, lastOrder: '2024-01-15' },
    { name: 'Premium Alloys Inc.', rating: 4.9, lastOrder: '2024-01-10' },
    { name: 'Midwest Materials Co.', rating: 4.6, lastOrder: '2024-01-05' }
  ];

  const notifications = [
    { type: 'price_alert', message: 'Steel prices dropped 5% in your area', time: '2 hours ago' },
    { type: 'new_supplier', message: 'New verified supplier in Chicago, IL', time: '1 day ago' },
    { type: 'order_update', message: 'Your order from Global Steel is ready', time: '2 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Manage your procurement needs and discover new opportunities.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <Search className="h-8 w-8 text-blue-600" />
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">New</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Suppliers</h3>
            <p className="text-gray-600 text-sm">Search for new suppliers based on your needs</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <Package className="h-8 w-8 text-green-600" />
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">My Orders</h3>
            <p className="text-gray-600 text-sm">Track your current and past orders</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Updated</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Insights</h3>
            <p className="text-gray-600 text-sm">View latest market trends and analysis</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <Settings className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Settings</h3>
            <p className="text-gray-600 text-sm">Manage your profile and preferences</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Savings</p>
                <p className="text-2xl font-bold text-green-600">$45,230</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-xs text-gray-500 mt-2">↑ 12% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Suppliers</p>
                <p className="text-2xl font-bold text-blue-600">23</p>
              </div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-xs text-gray-500 mt-2">5 new this month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Orders</p>
                <p className="text-2xl font-bold text-purple-600">89</p>
              </div>
              <Package className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-xs text-gray-500 mt-2">↑ 8% from last month</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Searches */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Searches</h2>
              <div className="space-y-4">
                {recentSearches.map((search, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                    <div>
                      <h3 className="font-medium text-gray-900">{search.material}</h3>
                      <p className="text-sm text-gray-600">Quantity: {search.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{search.date}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Search Again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View All Searches
              </button>
            </div>

            {/* Favorite Suppliers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Favorite Suppliers</h2>
              <div className="space-y-4">
                {favoriteSuppliers.map((supplier, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div>
                      <h3 className="font-medium text-gray-900">{supplier.name}</h3>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-600">{supplier.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Last order: {supplier.lastOrder}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-900 mb-1">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Notifications
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">This Month</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Searches Made</span>
                  <span className="font-bold text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Suppliers Contacted</span>
                  <span className="font-bold text-gray-900">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Orders Placed</span>
                  <span className="font-bold text-gray-900">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Money Saved</span>
                  <span className="font-bold text-green-600">$3,240</span>
                </div>
              </div>
            </div>

            {/* Market Trends */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Market Trends</h2>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">Steel Prices</span>
                    <span className="text-green-600 text-sm">-5%</span>
                  </div>
                  <p className="text-xs text-gray-600">Prices dropped this week</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">Aluminum</span>
                    <span className="text-red-600 text-sm">+3%</span>
                  </div>
                  <p className="text-xs text-gray-600">Slight increase expected</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">Copper</span>
                    <span className="text-blue-600 text-sm">Stable</span>
                  </div>
                  <p className="text-xs text-gray-600">No significant change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;