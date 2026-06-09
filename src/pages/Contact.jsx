import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-700/80" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Get in touch with our team to discuss your fleet management needs. 20+ years of expertise at your service.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-blob" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto">
            <div className="animate-fadeInLeft">
              <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                Get in Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. Our 20+ years of experience means we understand your needs.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-400"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-400"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-400"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-400"
                    placeholder="+234 800 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none hover:border-primary-400"
                    placeholder="Tell us about your fleet management needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            <div className="animate-fadeInRight">
              <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                Reach Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>

              <div className="space-y-5 sm:space-y-6 md:space-y-8 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 sm:p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                       7 Eletu Ogabi Street,<br />
                      Victoria Island, Lagos.<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 sm:p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Phone</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">+234 806 317 7773</p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">+234 806 317 7773</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 sm:p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Email</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">tech@tamtrack.ng</p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">pierre.dina@tamtrack.ng</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 sm:p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Business Hours</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl">
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Emergency Support</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  For urgent matters outside business hours, our 24/7 support line is available. We've been there for our clients for 20+ years.
                </p>
                <p className="text-primary-600 font-bold text-xl sm:text-2xl">+234 806 317 7773</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 text-left">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">How quickly can you implement fleet tracking?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We can typically implement basic tracking within 48 hours. Full system integration takes 1-2 weeks depending on fleet size. 20+ years of streamlined implementation experience.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Do you offer training for our team?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Yes, we provide comprehensive training for administrators and drivers as part of our implementation process. Our training programs are refined over two decades.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">What areas of Nigeria do you cover?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We provide coverage across all 36 states in Nigeria with a network of service centers and support teams. Nationwide coverage for 20+ years.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Can I try the system before committing?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Yes, we offer a free 30-day trial for qualified businesses. Contact us to learn more. Experience our proven solutions firsthand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
