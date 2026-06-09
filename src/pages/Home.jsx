import { Link } from 'react-router-dom'
import { Truck, Shield, MapPin, Users, TrendingUp, Clock, ArrowRight, CheckCircle, Award, Globe, Zap } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <div>
      <HeroSlider />

      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-2 animate-pulse">20+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Years Experience</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-2 animate-pulse">3000+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Fleets Managed</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-2 animate-pulse">36</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">States Covered</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-2 animate-pulse">99%</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Tamtrack?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              For over two decades, we've been the trusted partner for Nigeria's leading businesses, combining cutting-edge technology with deep local expertise to deliver unmatched fleet management solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Monitor your entire fleet in real-time with our advanced GPS tracking system. Know exactly where your vehicles are at all times with precision accuracy.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Enhanced Safety</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Protect your drivers and assets with comprehensive safety features including driver behavior monitoring, emergency alerts, and proactive risk management.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Cost Optimization</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Reduce operational costs by up to 25% through intelligent fuel management, predictive maintenance scheduling, and AI-powered route optimization.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Nationwide Coverage</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our network spans all 36 states in Nigeria, ensuring consistent service and support wherever your operations take you across the nation.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our experienced team of fleet management professionals provides dedicated support and tailored solutions built on 20+ years of industry expertise.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Round-the-clock customer support ensures you never face downtime. Our dedicated team is here whenever you need assistance, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="animate-fadeInLeft">
              <span className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                Proven Results
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Transform Your Fleet Operations Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Join hundreds of businesses across Nigeria who trust Tamtrack's 20+ years of expertise to manage their fleets efficiently and effectively. Our track record speaks for itself.
              </p>
              <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                <li className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="bg-green-100 p-2 rounded-full group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">Reduce fuel costs by up to 25%</span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="bg-green-100 p-2 rounded-full group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">Improve driver safety and compliance</span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="bg-green-100 p-2 rounded-full group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">Optimize routes and reduce mileage</span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="bg-green-100 p-2 rounded-full group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">Extend vehicle lifespan through proactive maintenance</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center space-x-2 sm:space-x-3 bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <span>Request a Demo</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fleet Management Dashboard"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-4 sm:p-6 shadow-xl animate-float">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">20+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Years Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Trusted by Industry Leaders</h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
              For over two decades, Nigeria's top companies have relied on Tamtrack to power their fleet operations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {['Logistics', 'Manufacturing', 'Retail', 'Transportation'].map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Globe className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-3" />
                <div className="font-semibold text-sm sm:text-base">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              Our Promise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join the hundreds of businesses across Nigeria that trust Tamtrack's 20+ years of expertise to manage their fleets efficiently and effectively.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary-100 rounded-full filter blur-3xl opacity-50 animate-blob" />
              <div className="relative z-10">
                <Zap className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-600 mx-auto mb-4 sm:mb-6 animate-pulse" />
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Start Your Journey Today</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  Get a free consultation and discover how Tamtrack can transform your fleet operations with our proven, battle-tested solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link to="/contact" className="bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                    Get Free Consultation
                  </Link>
                  <Link to="/services" className="border-2 border-primary-600 text-primary-600 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 text-sm sm:text-base">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
