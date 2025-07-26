import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Star, Filter, ArrowRight, Zap } from 'lucide-react';

const AIEngine = () => {
  const [searchData, setSearchData] = useState({
    material: '',
    quantity: '',
    budget: '',
    location: '',
    quality: 'any'
  });
  
  const [showResults, setShowResults] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: 'any',
    rating: 'any',
    location: 'any'
  });

  const sampleSuppliers = [
    {
      id: 1,
      name: 'Global Steel Solutions',
      rating: 4.8,
      price: '$2,450/ton',
      location: 'Chicago, IL',
      distance: '15 miles',
      quality: 'Premium',
      reviews: 234,
      specialization: 'Steel & Metal',
      deliveryTime: '3-5 days',
      minOrder: '5 tons'
    },
    {
      id: 2,
      name: 'Midwest Materials Co.',
      rating: 4.6,
      price: '$2,280/ton',
      location: 'Milwaukee, WI',
      distance: '85 miles',
      quality: 'Standard',
      reviews: 187,
      specialization: 'Construction Materials',
      deliveryTime: '5-7 days',
      minOrder: '10 tons'
    },
    {
      id: 3,
      name: 'Premium Alloys Inc.',
      rating: 4.9,
      price: '$2,650/ton',
      location: 'Detroit, MI',
      distance: '120 miles',
      quality: 'Premium',
      reviews: 312,
      specialization: 'Specialty Alloys',
      deliveryTime: '2-4 days',
      minOrder: '3 tons'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const resetSearch = () => {
    setSearchData({
      material: '',
      quantity: '',
      budget: '',
      location: '',
      quality: 'any'
    });
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-12 w-12 text-yellow-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">AI Deal Engine</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let our AI find the perfect suppliers for your needs. Enter your requirements 
            and get instant recommendations based on price, quality, and location.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us What You Need</h2>
          
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Raw Material Type *
                </label>
                <input
                  type="text"
                  value={searchData.material}
                  onChange={(e) => setSearchData({...searchData, material: e.target.value})}
                  placeholder="e.g., Steel, Aluminum, Plastic"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity Needed *
                </label>
                <input
                  type="text"
                  value={searchData.quantity}
                  onChange={(e) => setSearchData({...searchData, quantity: e.target.value})}
                  placeholder="e.g., 50 tons, 1000 units"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range *
                </label>
                <input
                  type="text"
                  value={searchData.budget}
                  onChange={(e) => setSearchData({...searchData, budget: e.target.value})}
                  placeholder="e.g., $10,000 - $50,000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Location *
                </label>
                <input
                  type="text"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  placeholder="e.g., Chicago, IL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quality Requirements
              </label>
              <select
                value={searchData.quality}
                onChange={(e) => setSearchData({...searchData, quality: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="any">Any Quality Level</option>
                <option value="standard">Standard Quality</option>
                <option value="premium">Premium Quality</option>
                <option value="industrial">Industrial Grade</option>
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Search size={20} />
                <span>Find Suppliers</span>
              </button>
              
              {showResults && (
                <button
                  type="button"
                  onClick={resetSearch}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  New Search
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="space-y-8">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Filter Results</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="any">Any Price</option>
                    <option value="low">$0 - $2,000</option>
                    <option value="medium">$2,000 - $5,000</option>
                    <option value="high">$5,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                  <select
                    value={filters.rating}
                    onChange={(e) => setFilters({...filters, rating: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="any">Any Rating</option>
                    <option value="4">4+ Stars</option>
                    <option value="4.5">4.5+ Stars</option>
                    <option value="4.8">4.8+ Stars</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="any">Any Location</option>
                    <option value="local">Within 50 miles</option>
                    <option value="regional">Within 200 miles</option>
                    <option value="national">Nationwide</option>
                  </select>
                </div>
              </div>
            </div>

            {/* AI Recommendations Header */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="flex items-center mb-2">
                <Zap className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">AI Recommendations</h3>
              </div>
              <p className="text-gray-600">
                Based on your requirements for <strong>{searchData.material}</strong> in <strong>{searchData.location}</strong>, 
                we found <strong>{sampleSuppliers.length} perfect matches</strong>. Results are ranked by our AI algorithm 
                considering price, quality, proximity, and supplier reliability.
              </p>
            </div>

            {/* Supplier Results */}
            <div className="space-y-6">
              {sampleSuppliers.map((supplier, index) => (
                <div key={supplier.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{supplier.name}</h3>
                        <p className="text-gray-600">{supplier.specialization}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{supplier.price}</div>
                      <div className="text-sm text-gray-500">per unit</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-2 fill-current" />
                      <span className="font-semibold">{supplier.rating}</span>
                      <span className="text-gray-500 ml-1">({supplier.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span>{supplier.location}</span>
                      <span className="text-gray-500 ml-1">• {supplier.distance}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium">Quality: {supplier.quality}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="text-sm text-gray-600">Delivery Time:</span>
                      <span className="ml-2 font-medium">{supplier.deliveryTime}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Minimum Order:</span>
                      <span className="ml-2 font-medium">{supplier.minOrder}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      <span>Contact Supplier</span>
                      <ArrowRight size={16} />
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      View Full Profile
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      Add to Compare
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Comparison</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Supplier</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Rating</th>
                      <th className="text-left py-3 px-4">Location</th>
                      <th className="text-left py-3 px-4">Delivery</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleSuppliers.map((supplier) => (
                      <tr key={supplier.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{supplier.name}</td>
                        <td className="py-3 px-4 text-blue-600 font-bold">{supplier.price}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                            {supplier.rating}
                          </div>
                        </td>
                        <td className="py-3 px-4">{supplier.location}</td>
                        <td className="py-3 px-4">{supplier.deliveryTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIEngine;