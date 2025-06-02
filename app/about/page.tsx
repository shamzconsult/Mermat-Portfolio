"use client"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building2, Award, Shield, Target, Globe, Handshake, Eye, Zap, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

export default function AboutPage() {
  const milestones = [
    {
      year: "2023",
      title: "Company Establishment",
      description:
        "Mimetic Nigeria Limited was officially incorporated with a vision to transform Nigeria's business landscape.",
    },
    {
      year: "2023",
      title: "Initial Capital Investment",
      description: "Secured ₦1,000,000 in share capital, establishing a strong financial foundation for growth.",
    },
    {
      year: "2024",
      title: "Service Expansion",
      description: "Expanded operations to include comprehensive educational and capacity development services.",
    },
    {
      year: "2024",
      title: "Strategic Partnerships",
      description: "Formed key partnerships with educational institutions and industry leaders across Nigeria.",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We do what is right. Trust is the foundation of how we operate, and we are committed to being transparent, responsible, and fair in all our dealings.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "From the quality of our training to the delivery of our services, we pursue excellence — not because it is easy, but because it matters.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "Whether it is with students, clients, partners, or institutions, we value relationships built on mutual respect, shared goals, and honest communication.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "We do not just follow trends, we create better ways to teach, learn, and grow. We embrace creativity and smart thinking to make education and training more practical and impactful.",
    },
    {
      icon: Zap,
      title: "Empowerment",
      description:
        "We believe in people. That is why we dedicate ourselves to helping individuals unlock their potential — with the right skills, mindset, and support.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
       <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-600">
        <div className="absolute inset-0 bg-dots"></div>
        <div className="absolute inset-0">
          <Image src="/images/About-hero.png" alt="About Mimetic Nigeria" fill className="object-cover opacity-20" />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70"></div> */}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm mb-6">
            About Mimetic Nigeria Limited
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Pioneering Excellence in
            <span className="text-emerald-300 shimmer"> Nigeria&apos;s Educational Sector</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Since our establishment in 2023, Mimetic Nigeria Limited has been at the forefront of driving sustainable
            development through innovative educational services, and human capital development.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-gray-900 flex items-center text-2xl">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="h-6 w-6 text-emerald-600" />
                    </div>
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 px-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500 font-medium">Registration Number</p>
                      <p className="font-semibold">6964866</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500 font-medium">Date Registered</p>
                      <p className="font-semibold">May 12, 2023</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500 font-medium">Company Type</p>
                      <p className="font-semibold">Private Limited by Shares</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500 font-medium">Status</p>
                      <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
                    </div>
                  </div>
                  <Separator className="bg-gray-200 my-4" />
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 font-medium">Principal Business Activity</p>
                    <p className="font-semibold">
                      Educational services, Human capital development, General Contract and Merchandise
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 font-medium">Head Office</p>
                    <p className="font-semibold">No. 27, 7th Avenue, Gwarimpa II, Abuja, FCT</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="font-semibold">mimeticnigerialimited@gmail.com</p>
                  </div>
                </CardContent>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-gray-900 flex items-center text-2xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    Why Choose Mimetic Nigeria Limited
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 px-0">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-1">Proven Track Record</h4>
                        <p className="text-gray-600">
                          Consistent delivery of high-quality projects across Nigeria with 100% client satisfaction
                          rate.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-1">Expert Team</h4>
                        <p className="text-gray-600">
                          Highly qualified professionals with extensive experience in contracting and educational
                          development.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-1">Innovation Focus</h4>
                        <p className="text-gray-600">
                          Leveraging cutting-edge technology and modern methodologies to deliver superior results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-1">Comprehensive Solutions</h4>
                        <p className="text-gray-600">
                          End-to-end services from planning to execution, ensuring seamless project delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mt-20">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-100 rounded-full opacity-20"></div>
              <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-emerald-100 rounded-full opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 mr-6">
                    <Target className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-2xl">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower individuals and institutions through technical skills training, educational support services,
                  research, and development and partnerships that will enhance personal growth and organizational
                  development.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 relative overflow-hidden">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
              <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-blue-100 rounded-full opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 mr-6">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-2xl">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A leading provider of comprehensive human capital development and educational services that foster job
                  readiness, entrepreneurship, and educational advancement in Nigeria and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm mb-4 hover:shadow-md hover:text-white transition-all duration-300">
              Our Foundation
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-white bg-clip-text text-transparent"> Our Core Values</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide our operations and define our commitment to excellence in every endeavor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-100 group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/10 group-hover:rotate-6 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 font-semibold text-xl mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-2 text-sm mb-4 hover:shadow-md transition-all duration-300">
              Our Growth Story
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Key <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our journey of commitment to excellence and sustainable development.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-blue-500 -translate-x-1/2"></div>
            
            <div className="space-y-8 md:space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Year badge */}
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/10 z-10 mb-4 md:mb-0">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-emerald-200">
                      <span className="text-emerald-600 font-bold text-xl">{milestone.year}</span>
                    </div>
                  </div>
                  
                  {/* Connector dot */}
                  <div className="hidden md:block w-6 h-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-6 z-10"></div>
                  
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <h3 className="text-gray-900 font-semibold text-xl mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/grid-white.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm mb-6 backdrop-blur-sm">
              Join Us Today
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Partner with Nigeria&apos;s Trusted Human Capital Company
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join an array of satisfied clients who have experienced the Mimetic difference in quality, reliability,
              and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-grren-900 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}