import { Truck, Bus, Car, Bike, Building2, Factory, ShoppingBag, Hospital, Zap } from 'lucide-react'

export default function FleetSolutions() {
  const industries = [
    {
      icon: Building2,
      title: 'Corporate & Business',
      description: 'Manage company vehicles, sales fleets, and executive transportation with comprehensive tracking and reporting.',
      benefits: ['Employee vehicle tracking', 'Mileage reimbursement', 'Cost allocation', 'Usage analytics']
    },
    {
      icon: Factory,
      title: 'Logistics & Distribution',
      description: 'Optimize delivery routes, monitor cargo vehicles, and ensure timely deliveries across Nigeria.',
      benefits: ['Route optimization', 'Delivery confirmation', 'Fleet utilization', 'Proof of delivery']
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Track delivery fleets, manage last-mile deliveries, and provide customers with real-time updates.',
      benefits: ['Customer notifications', 'Delivery window management', 'Driver assignment', 'Performance tracking']
    },
    {
      icon: Bus,
      title: 'Transportation & Public Transit',
      description: 'Manage bus fleets, monitor routes, and ensure passenger safety with advanced monitoring systems.',
      benefits: ['Route monitoring', 'Passenger counting', 'Schedule adherence', 'Safety compliance']
    },
    {
      icon: Hospital,
      title: 'Healthcare & Emergency',
      description: 'Critical fleet management for ambulances and medical response vehicles with priority routing.',
      benefits: ['Emergency response tracking', 'Vehicle readiness', 'Maintenance scheduling', 'Compliance reporting']
    },
    {
      icon: Car,
      title: 'Car Rental & Leasing',
      description: 'Track rental fleets, manage bookings, and monitor vehicle condition and maintenance needs.',
      benefits: ['Fleet availability', 'Maintenance alerts', 'Usage tracking', 'Damage reporting']
    }
  ]

  const vehicleTypes = [
    { icon: Truck, name: 'Trucks & HGVs', description: 'Heavy goods vehicles for logistics and construction' },
    { icon: Bus, name: 'Buses & Coaches', description: 'Public transport and private charter services' },
    { icon: Car, name: 'Cars & SUVs', description: 'Corporate fleets and rental vehicles' },
    { icon: Bike, name: 'Motorcycles', description: 'Last-mile delivery and courier services' }
  ]

  return (
    <div>
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-700/80" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp">Fleet Solutions</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Tailored fleet management solutions for every industry and vehicle type, refined over 20+ years of serving Nigerian businesses
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-blob" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Industry-Specific Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that different industries have unique fleet management needs. Our solutions are customized to address your specific challenges, built on 20+ years of industry experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-6 leading-relaxed text-sm sm:text-base">{industry.description}</p>
                <ul className="space-y-1.5 sm:space-y-3">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 sm:space-x-3 text-gray-700 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              Our Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Vehicle Types We Manage</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From motorcycles to heavy trucks, our platform supports all types of vehicles in your fleet. 20+ years of managing diverse vehicle types across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <vehicle.icon className="h-7 w-7 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-blob" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Fleet Management Process</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">1</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Assessment</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">We analyze your current fleet operations and identify improvement opportunities. 20+ years of assessment expertise.</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">2</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Customization</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">We tailor our solutions to match your specific industry requirements and goals. Proven customization methodologies.</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">3</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Implementation</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">Our team handles installation, setup, and training for seamless integration. Smooth deployments guaranteed.</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">4</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Support</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">Ongoing support and optimization to ensure continuous improvement. 24/7 dedicated support team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Need a Custom Solution?</h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Every fleet is unique. Let us discuss your specific requirements and create a tailored solution for your business. Leverage our 20+ years of experience.
          </p>
          <a href="/contact" className="inline-block bg-white text-primary-600 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
            Contact Us for Custom Solutions
          </a>
        </div>
      </section>
    </div>
  )
}
