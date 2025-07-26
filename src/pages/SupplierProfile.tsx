import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, Globe, Award, Truck, CheckCircle, MessageCircle, Heart } from 'lucide-react';

const SupplierProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock supplier data - in real app, this would be fetched based on ID
  const supplier = {
    id: 1,
    name: 'Global Steel Solutions',
    rating: 4.8,
    reviews: 234,
    location: 'Chicago, IL',
    distance: '15 miles',
    established: '2008',
    employees: '250-500',
    specializations: ['Steel & Metal', 'Construction Materials', 'Industrial Components'],
    certifications: ['ISO 9001', 'ISO 14001', 'OSHA Compliant'],
    description: 'Global Steel Solutions is a leading supplier of premium steel and metal products with over 15 years of experience serving businesses across the Midwest. We pride ourselves on quality, reliability, and competitive pricing.',
    contact: {
      phone: '(555) 123-4567',
      email: 'sales@globalsteel.com',
      website: 'www.globalsteelsolutions.com',
      address: '1234 Industrial Blvd, Chicago, IL 60601'
    },
    capabilities: {
      minOrder: '5 tons',
      maxCapacity: '500 tons/month',
      deliveryTime: '3-5 days',
      paymentTerms: 'Net 30',
      shippingOptions: ['Ground', 'Express', 'White Glove']
    },
    products: [
      {
        name: 'Steel Rods',
        price: '$2,450/ton',
        specifications: 'Grade A, 10-50mm diameter',
        availability: 'In Stock'
      },
      {
        name: 'Steel Sheets',
        price: '$2,680/ton',
        specifications: '1-10mm thickness, various sizes',
        availability: 'In Stock'
      },
      {
        name: 'Steel Beams',
        price: '$2,890/ton',
        specifications: 'I-beams, H-beams, custom lengths',
        availability: 'Made to Order'
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'Manufacturing Co.',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent quality steel and fast delivery. Have been working with them for 3 years and never had any issues.',
      verified: true
    },
    {
      id: 2,
      author: 'Construction LLC',
      rating: 5,
      date: '2024-01-10',
      comment: 'Competitive pricing and great customer service. The team is very knowledgeable and helped us find exactly what we needed.',
      verified: true
    },
    {
      id: 3,
      author: 'Industrial Solutions',
      rating: 4,
      date: '2024-01-05',
      comment: 'Good quality products. Delivery was slightly delayed but they kept us informed throughout the process.',
      verified: true
    }
  ];

  const handleContact = () => {
    // Handle contact supplier logic
    console.log('Contacting supplier...');
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-xl p-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{supplier.name}</h1>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{supplier.rating}</span>
                    <span className="text-gray-500 ml-1">({supplier.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{supplier.location} • {supplier.distance}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {supplier.specializations.map((spec, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mt-6 lg:mt-0">
              <button
                onClick={toggleFavorite}
                className={`p-2 rounded-lg border transition-colors duration-200 ${
                  isFavorite 
                    ? 'bg-red-50 border-red-200 text-red-600' 
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleContact}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Contact Supplier</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'products', label: 'Products & Pricing' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'contact', label: 'Contact Info' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About {supplier.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{supplier.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Company Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Established:</span>
                        <span className="font-medium">{supplier.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Employees:</span>
                        <span className="font-medium">{supplier.employees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Min Order:</span>
                        <span className="font-medium">{supplier.capabilities.minOrder}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Time:</span>
                        <span className="font-medium">{supplier.capabilities.deliveryTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Certifications</h3>
                    <div className="space-y-2">
                      {supplier.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium">Max Capacity</div>
                        <div className="text-sm text-gray-600">{supplier.capabilities.maxCapacity}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <div className="font-medium">Payment Terms</div>
                        <div className="text-sm text-gray-600">{supplier.capabilities.paymentTerms}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Shipping Options</div>
                    <div className="space-y-1">
                      {supplier.capabilities.shippingOptions.map((option, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-sm">{supplier.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-sm">{supplier.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-sm">{supplier.contact.website}</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Get Quote
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {reviews.slice(0, 2).map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment.substring(0, 100)}...</p>
                      <div className="text-xs text-gray-500 mt-1">- {review.author}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View All Reviews
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Products & Pricing</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {supplier.products.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.availability === 'In Stock' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.availability}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.specifications}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{supplier.rating}</span>
                <span className="text-gray-500">({supplier.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="font-medium text-gray-900">{review.author}</div>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Verified Buyer
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-600">{supplier.contact.address}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">{supplier.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">{supplier.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Website</div>
                    <div className="text-gray-600">{supplier.contact.website}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierProfile;