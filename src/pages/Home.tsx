import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, TrendingUp, Users, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'AI-Powered Matching',
      description: 'Our advanced AI algorithm analyzes your needs and matches you with the best suppliers based on price, quality, and proximity.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Smart Filtering',
      description: 'Filter suppliers by price range, quality ratings, location, and delivery times to find exactly what you need.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Market Insights',
      description: 'Get weekly insights about market trends, price fluctuations, and the best deals in your industry.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Verified Suppliers',
      description: 'All suppliers are verified and rated by our community, ensuring you work with reliable partners.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Manufacturing Co.',
      rating: 5,
      comment: 'SupplyAI helped us reduce our procurement costs by 30% while maintaining quality. The AI recommendations are spot-on!'
    },
    {
      name: 'Michael Chen',
      company: 'Green Building Materials',
      rating: 5,
      comment: 'The weekly insights have been invaluable for our business planning. We always know when to buy and from whom.'
    },
    {
      name: 'Emma Rodriguez',
      company: 'Artisan Crafts LLC',
      rating: 5,
      comment: 'As a small business, finding reliable suppliers was always a challenge. SupplyAI made it effortless.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find the Perfect Suppliers with
              <span className="block text-yellow-300">AI-Powered Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Connect with verified suppliers, compare prices instantly, and get personalized recommendations 
              that save you time and money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth"
                className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Finding Suppliers</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SupplyAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines artificial intelligence with real-world supplier data to give you 
              the competitive edge in procurement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-xl text-gray-700">Verified Suppliers</div>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">$2.5M+</div>
              <div className="text-xl text-gray-700">Cost Savings Generated</div>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-xl text-gray-700">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tell Us Your Needs</h3>
              <p className="text-gray-600">Enter your raw material requirements, budget, and location preferences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get AI Recommendations</h3>
              <p className="text-gray-600">Our AI analyzes thousands of suppliers to find your perfect matches.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect & Save</h3>
              <p className="text-gray-600">Compare options, connect with suppliers, and start saving money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Procurement?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already saving time and money with SupplyAI.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105"
          >
            <span>Get Started Free</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;