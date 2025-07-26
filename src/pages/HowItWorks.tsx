import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Brain, Filter, Users, TrendingUp, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: 'Submit Your Requirements',
      description: 'Tell us what raw materials you need, your budget constraints, preferred location, and quality requirements.',
      details: [
        'Specify material type and quantity',
        'Set your budget range',
        'Choose preferred suppliers location',
        'Define quality standards'
      ]
    },
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: 'AI Analysis & Matching',
      description: 'Our advanced AI algorithm analyzes thousands of suppliers to find the best matches for your specific needs.',
      details: [
        'Price comparison across suppliers',
        'Quality rating analysis',
        'Location proximity calculation',
        'Historical performance review'
      ]
    },
    {
      icon: <Filter className="h-12 w-12 text-blue-600" />,
      title: 'Filter & Compare',
      description: 'Use our powerful filtering tools to narrow down options and compare suppliers side-by-side.',
      details: [
        'Filter by price, rating, location',
        'Compare multiple suppliers',
        'View detailed supplier profiles',
        'Check reviews and ratings'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Connect & Purchase',
      description: 'Connect directly with your chosen suppliers and start building profitable business relationships.',
      details: [
        'Direct supplier contact',
        'Negotiate terms and prices',
        'Track order history',
        'Build long-term partnerships'
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Cost Savings',
      description: 'Save up to 30% on procurement costs through better supplier selection and negotiation.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: 'Quality Assurance',
      description: 'Work only with verified suppliers who meet our strict quality and reliability standards.'
    },
    {
      icon: <Brain className="h-8 w-8 text-green-600" />,
      title: 'Smart Insights',
      description: 'Get actionable market insights and recommendations to optimize your procurement strategy.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How SupplyAI Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our AI-powered platform simplifies supplier discovery and procurement, 
            helping you find the best deals and build lasting business relationships.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-50 p-3 rounded-xl mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-blue-600 mb-1">STEP {index + 1}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose SupplyAI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform delivers measurable results that transform how you approach procurement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already transforming their procurement with SupplyAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
            >
              Start Free Trial
            </Link>
            <Link
              to="/ai-engine"
              className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              Try AI Engine
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;