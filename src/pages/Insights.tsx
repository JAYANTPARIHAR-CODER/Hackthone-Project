import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Mail, MessageSquare, BarChart3, PieChart, AlertCircle, Calendar } from 'lucide-react';

const Insights = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [subscribedToUpdates, setSubscribedToUpdates] = useState(false);

  const marketTrends = [
    {
      material: 'Steel',
      price: '$2,450/ton',
      change: -5.2,
      trend: 'down',
      forecast: 'Expected to stabilize next month',
      volume: '↑ 15% trading volume'
    },
    {
      material: 'Aluminum',
      price: '$1,850/ton',
      change: 3.1,
      trend: 'up',
      forecast: 'Continued growth expected',
      volume: '↑ 8% trading volume'
    },
    {
      material: 'Copper',
      price: '$8,200/ton',
      change: -1.2,
      trend: 'down',
      forecast: 'Slight decline expected',
      volume: '→ Stable volume'
    },
    {
      material: 'Plastic Resin',
      price: '$1,450/ton',
      change: 2.8,
      trend: 'up',
      forecast: 'Supply constraints driving prices',
      volume: '↑ 12% trading volume'
    }
  ];

  const insights = [
    {
      type: 'opportunity',
      title: 'Best Time to Buy Steel',
      description: 'Steel prices are at a 6-month low. Consider bulk purchasing in the next 2 weeks.',
      priority: 'high',
      savings: '$12,000'
    },
    {
      type: 'alert',
      title: 'Aluminum Price Surge',
      description: 'Aluminum prices increased 15% in the last month due to supply chain disruptions.',
      priority: 'medium',
      impact: 'Price increase'
    },
    {
      type: 'trend',
      title: 'New Suppliers in Your Area',
      description: '5 new verified suppliers joined SupplyAI in Chicago, IL with competitive rates.',
      priority: 'low',
      benefit: 'More options'
    }
  ];

  const topDeals = [
    {
      supplier: 'Midwest Steel Co.',
      material: 'Steel Rods',
      discount: '20%',
      originalPrice: '$2,800/ton',
      salePrice: '$2,240/ton',
      validUntil: 'Feb 15, 2024',
      savings: '$560/ton'
    },
    {
      supplier: 'Premium Alloys Inc.',
      material: 'Aluminum Sheets',
      discount: '15%',
      originalPrice: '$2,100/ton',
      salePrice: '$1,785/ton',
      validUntil: 'Feb 20, 2024',
      savings: '$315/ton'
    },
    {
      supplier: 'Global Materials',
      material: 'Copper Wire',
      discount: '12%',
      originalPrice: '$9,500/ton',
      salePrice: '$8,360/ton',
      validUntil: 'Feb 28, 2024',
      savings: '$1,140/ton'
    }
  ];

  const handleSubscribe = () => {
    setSubscribedToUpdates(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Insights & Reports</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the market with real-time insights, price trends, and exclusive deals 
              from our AI-powered analysis.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Period Selector */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Market Overview</h2>
            <p className="text-gray-600">Real-time market data and trends</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Calendar className="h-5 w-5 text-gray-400" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
            </select>
          </div>
        </div>

        {/* Market Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketTrends.map((trend, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{trend.material}</h3>
                <div className={`flex items-center space-x-1 ${trend.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {trend.change > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="text-sm font-medium">{Math.abs(trend.change)}%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900">{trend.price}</div>
                <div className="text-sm text-gray-600">{trend.volume}</div>
                <div className="text-sm text-gray-500">{trend.forecast}</div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">AI-Powered Insights</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className={`p-6 rounded-lg border-l-4 ${
                insight.priority === 'high' ? 'border-red-500 bg-red-50' :
                insight.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                'border-blue-500 bg-blue-50'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                  <AlertCircle className={`h-5 w-5 ${
                    insight.priority === 'high' ? 'text-red-500' :
                    insight.priority === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                </div>
                <p className="text-gray-700 text-sm mb-3">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    insight.priority === 'high' ? 'bg-red-100 text-red-800' :
                    insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {insight.priority.toUpperCase()} PRIORITY
                  </span>
                  {insight.savings && (
                    <span className="text-green-600 font-medium text-sm">Save {insight.savings}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Deals */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <PieChart className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Exclusive Deals This Week</h2>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Limited Time
            </span>
          </div>
          
          <div className="space-y-6">
            {topDeals.map((deal, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{deal.supplier}</h3>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
                        {deal.discount} OFF
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{deal.material}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Valid until {deal.validUntil}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-gray-500 line-through">{deal.originalPrice}</span>
                      <span className="text-2xl font-bold text-green-600">{deal.salePrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium mb-3">Save {deal.savings}</div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Contact Supplier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        {!subscribedToUpdates && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Get Weekly Market Insights</h2>
              </div>
              <p className="text-blue-100 mb-6">
                Stay ahead of the competition with our weekly insights delivered straight to your inbox. 
                Get price alerts, market trends, and exclusive deals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
              
              <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-blue-100">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>Email Updates</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>SMS Alerts</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {subscribedToUpdates && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="text-green-600 mb-2">✓ Successfully Subscribed!</div>
            <p className="text-gray-700">You'll receive weekly insights and market updates in your inbox.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Insights;