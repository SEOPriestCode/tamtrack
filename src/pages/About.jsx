import { Award, Target, Users, Globe, HeartHandshake, Zap, Clock, TrendingUp, Shield, Truck } from 'lucide-react'

export default function About() {
  return (
    <div>
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-700/80" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">About Tamtrack</h1>
          <p className="text-2xl text-primary-100 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Nigeria's leading fleet management company with over two decades of excellence
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">Our Story</h2>
            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p className="animate-fadeInUp">
                Founded over 20 years ago, Tamtrack has grown from a small startup to Nigeria's premier fleet management company. Our journey began with a simple yet powerful vision: to help businesses optimize their fleet operations through cutting-edge technology and deep industry expertise.
              </p>
              <p className="animate-fadeInUp animation-delay-200">
                Today, we proudly manage over 3,000 fleets across all 36 states of Nigeria, serving businesses of all sizes from logistics companies to government agencies. Our deep understanding of the Nigerian market, combined with world-class technology, makes us the trusted partner for fleet management.
              </p>
              <p className="animate-fadeInUp animation-delay-400">
                We've navigated the unique challenges of the Nigerian transportation landscape - from diverse road conditions to varying regulatory requirements across states. This experience has made us uniquely positioned to deliver solutions that work in the Nigerian context, built on two decades of hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-blob" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              Our Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To provide innovative, reliable, and cost-effective fleet management solutions that empower Nigerian businesses to operate more efficiently, safely, and profitably. For over 20 years, we've been committed to driving operational excellence across the nation.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To be the undisputed leader in fleet management across Africa, setting the standard for excellence, innovation, and customer satisfaction in the industry. Building on two decades of success, we're expanding our footprint continent-wide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              What Drives Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We operate with honesty, transparency, and ethical principles in all our dealings. For 20+ years, our reputation has been built on trust.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Innovation</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We continuously evolve our solutions to meet the changing needs of our clients. Two decades of innovation have kept us at the forefront.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Customer Focus</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our clients' success is our success. We go above and beyond to exceed expectations. Our 99% satisfaction rate speaks volumes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              Our Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Achievements</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of excellence reflected in our numbers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
              <Clock className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-600 mx-auto mb-3 sm:mb-4 animate-float" />
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">20+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Years in Business</div>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
              <Truck className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-600 mx-auto mb-3 sm:mb-4 animate-float animation-delay-200" />
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">3000+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Fleets Managed</div>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
              <Users className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-600 mx-auto mb-3 sm:mb-4 animate-float animation-delay-400" />
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">500+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Corporate Clients</div>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
              <Globe className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary-600 mx-auto mb-3 sm:mb-4 animate-float animation-delay-600" />
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">36</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Partner with Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-8 leading-relaxed">
              Join the hundreds of businesses across Nigeria that trust Tamtrack's 20+ years of expertise for their fleet management needs. Let us help you optimize your operations and drive your business forward.
            </p>
            <a href="/contact" className="inline-block bg-white text-primary-600 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
