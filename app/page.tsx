"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  UsersRoundIcon,
  Eye,
  Handshake,
  Combine,
  Zap,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function HomePage() {
  const achievements = [
    { number: "2023", label: "Founded", icon: Calendar },
    { number: "2", label: "Expert Directors", icon: Users },
    { number: "5", label: "Team members", icon: UsersRoundIcon, plus: true },
    { number: "100%", label: "Active Status", icon: CheckCircle },
  ]

  const features = [
    {
      icon: Handshake,
      title: "Strategic Collaborations",
      description:
        "We have a wide range of strategic partnership deal with champions in the educational sector such as Government Agencies, Accredited Institutions and private organizations.",
    },
    {
      icon: Globe,
      title: "Educational Innovation",
      description:
        "We employ innovation in the delivery of our educational support and capacity building services through the application of cutting edge technologies.",
    },
    {
      icon: Target,
      title: "Human Capital Development",
      description:
        "We offer a wide array human capital development services ranging from technical skills training, entrepreneurial development skills, career support and mentorship services among others.",
    },
    {
      icon: Combine,
      title: "Multi-Sector Capabilities",
      description:
        "Our capacity as an organization transcends capacity development, to this end, we are knowledgeable in executing jobs in general contracting, procurement, logistics, and inter-agency services.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-custom">
        <div className="absolute inset-0 bg-dots"></div>
         <div className="absolute inset-0">
          <Image
            src="/images/african-american-employee-wearing-industrial-overall.jpg"
            alt="Professional business environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

         <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm">
                Trusted by 10+ Companies Across Nigeria
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Building Nigeria&apos;s
                  <span className="text-green-300"> Future </span>
                  Together
                </h1>
                <p className="text-gray-400 italic">Nurturing Human Potential.......</p>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Leading provider of comprehensive human capital development
                  services. Empowering individuals, institutions, and communities across Nigeria through education and
                  innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-6 text-lg w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Fully Licensed & Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">CAC Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 bg-gradient-to-b from-green-100 to-blue-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/images/dot-grid.svg')] bg-[length:40px_40px] bg-center"></div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-white/80 backdrop-blur-sm text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100 mb-3 shadow-sm">
              OUR IMPACT
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">Numbers</span> That Speak
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Quantifying our excellence through measurable achievements
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 hover:shadow-md transition-all duration-300 border border-gray-100/50 group relative overflow-hidden"
              >
                {/* Animated background element */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                {/* Icon container */}
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-inner shadow-emerald-100/50">
                  <achievement.icon className="h-6 w-6 text-emerald-600" />
                </div>
                
                {/* Number display */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {achievement.number}
                    {achievement.plus && <span className="text-emerald-500">+</span>}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-gray-500 font-medium">{achievement.label}</div>
                </div>
                
                {/* Subtle decorative corner */}
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-emerald-400/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-blue opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm mb-4">
              Why Choose Mimetic
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Driving Excellence Across Industries</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are a private Nigerian company focused on human capacity development, educational services, research
              and development and general educational consultancy and Advisory services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover-lift">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">
                  <feature.icon className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
               
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
           <div className="grid lg:grid-cols-2 gap-8 mt-20">
            <div className="gradient-card-blue rounded-3xl p-10 text-white hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-3xl">Our Vision</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                A leading provider of comprehensive human capital development and educational services that foster job
                readiness, entrepreneurship, and educational advancement in Nigeria and beyond.
              </p>
            </div>

            <div className="gradient-card-green rounded-3xl p-10 text-white hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-3xl">Our Mission</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                To empower individuals and institutions through technical skills training, educational support services,
                research, and development and partnerships that will enhance personal growth and organizational
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl floating-element"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 px-6 py-3 text-lg font-semibold mb-8">
              <Zap className="h-5 w-5 mr-2" />
              Ready to Transform?
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Partner with Mimetic Nigeria Limited for comprehensive solutions that drive growth, innovation, and
              sustainable development across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90 px-10 py-6 text-xl font-bold shadow-2xl"
                >
                  <Sparkles className="mr-2 h-6 w-6" />
                  Contact Us
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-10 py-6 text-xl font-bold"
                >
                  View Our Services
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
