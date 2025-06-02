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
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function HomePage() {
  const achievements = [
    { number: "2023", label: "Founded", icon: Calendar },
    { number: "2", label: "Expert Directors", icon: Users },
    { number: "5+", label: "Team members", icon: UsersRoundIcon },
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
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> Future </span>
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
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-blue-500/20"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-200 bg-white/80 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg w-full sm:w-auto"
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
      <section className="py-16 bg-gradient-to-b from-green-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Excellence in Numbers</h2>
            <p className="text-xl text-gray-700">Demonstrating our commitment to quality and growth</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">
                  <achievement.icon className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
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
                <Link
                  href="/services"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mt-20">
            <div className="glass-card-green rounded-xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 mr-4">
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

            <div className="glass-card-blue rounded-xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 mr-4">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-green-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Partner with Mimetic Nigeria Limited for comprehensive solutions that drive growth, innovation, and
              sustainable development across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/20"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg"
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
