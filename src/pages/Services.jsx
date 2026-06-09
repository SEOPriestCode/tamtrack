import { MapPin, Wrench, Fuel, Shield, FileText, BarChart3, Clock, Users, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: MapPin,
      title: 'GPS Tracking & Monitoring',
      description: 'Real-time vehicle tracking with advanced GPS technology. Monitor location, speed, and route history 24/7 through our intuitive dashboard.',
      features: ['Live tracking', 'Geofencing', 'Route replay', 'Speed alerts']
    },
    {
      icon: Wrench,
      title: 'Maintenance Management',
      description: 'Proactive maintenance scheduling to prevent breakdowns and extend vehicle lifespan. Automated reminders and service history tracking.',
      features: ['Service scheduling', 'Maintenance alerts', 'Cost tracking', 'Vendor management']
    },
    {
      icon: Fuel,
      title: 'Fuel Management',
      description: 'Comprehensive fuel monitoring to reduce costs and prevent theft. Track consumption, identify inefficiencies, and optimize fuel usage.',
      features: ['Fuel level monitoring', 'Consumption analysis', 'Theft prevention', 'Cost reporting']
    },
    {
      icon: Shield,
      title: 'Driver Safety & Behavior',
      description: 'Monitor and improve driver performance with behavior analysis. Reduce accidents and promote safe driving habits across your fleet.',
      features: ['Behavior scoring', 'Harsh braking alerts', 'Speed monitoring', 'Safety training']
    },
    {
      icon: FileText,
      title: 'Compliance & Documentation',
      description: 'Streamline regulatory compliance with automated documentation. Stay compliant with Nigerian transportation regulations effortlessly.',
      features: ['License tracking', 'Insurance management', 'Vehicle registration', 'Audit reports']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Powerful analytics and custom reports to gain insights into your fleet operations. Data-driven decisions for better efficiency.',
      features: ['Custom dashboards', 'Performance metrics', 'Trend analysis', 'Export capabilities']
    },
    {
      icon: Clock,
      title: 'Route Optimization',
      description: 'Intelligent route planning to reduce mileage, save time, and improve delivery efficiency. AI-powered recommendations for optimal routes.',
      features: ['Traffic-aware routing', 'Multi-stop optimization', 'ETA calculation', 'Route history']
    },
    {
      icon: Users,
      title: 'Driver Management',
      description: 'Complete driver profile management with performance tracking, scheduling, and communication tools for efficient workforce management.',
      features: ['Driver profiles', 'Shift scheduling', 'Performance reviews', 'Communication hub']
    }
  ]

  return (
    <div>
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-700/80" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">Our Services</h1>
          <p className="text-2xl text-primary-100 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Comprehensive fleet management solutions tailored for Nigerian businesses, refined over 20+ years of excellence
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-blob" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Fleet Management Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From tracking to analytics, we provide end-to-end fleet management services designed to optimize every aspect of your operations. Built on 20+ years of industry experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-700">
                      <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Our Services Stand Out</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our solutions are designed specifically for the Nigerian market, understanding local challenges and regulatory requirements. 20+ years of local experience.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you have 10 vehicles or 1,000, our services scale to meet your needs without compromising quality. Proven at every scale.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated support team is available around the clock to assist with any issues or questions. Always there when you need us.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Continuous Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We regularly update our platform with new features and improvements to stay ahead of industry trends. Two decades of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Fleet Operations Today</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our services can help your business save costs, improve safety, and increase efficiency. Leverage our 20+ years of experience.
          </p>
          <a href="/contact" className="inline-block bg-white text-primary-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
