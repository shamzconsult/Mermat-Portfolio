"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building2, Award, Shield, Calendar, Menu, X, Target, Globe, Handshake, Eye, BicepsFlexed } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      icon: BicepsFlexed,
      title: "Empowerment",
      description:
        "We believe in people. That is why we dedicate ourselves to helping individuals unlock their potential — with the right skills, mindset, and support.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
             <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-40 h-14 flex items-center justify-center">
                <Image
                  src="/images/logo.webp"
                  alt="Mimetic Nigeria Limited Logo"
                  width={160}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white border-b-2 border-red-500">
                About
              </Link>
              <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/leadership" className="text-white/80 hover:text-white transition-colors">
                Leadership
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                Get Started
              </Button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-white">
                About
              </Link>
              <Link href="/services" className="block text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/leadership" className="block text-white/80 hover:text-white transition-colors">
                Leadership
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/About-hero.png"
            alt="About Mimetic Nigeria"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-6">
            About Mimetic Nigeria Limited
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Pioneering Excellence in
            <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
              {" "}
              Nigeria&apos;s Educational Sector
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Since our establishment in 2023, Mimetic Nigeria Limited has been at the forefront of driving sustainable
            development through innovative educational services, and human capital development.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Building2 className="h-6 w-6 mr-2 text-red-400" />
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Registration Number</p>
                      <p className="font-semibold">6964866</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Date Registered</p>
                      <p className="font-semibold">May 12, 2023</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Company Type</p>
                      <p className="font-semibold">Private Limited by Shares</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                    </div>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-sm text-gray-400">Principal Business Activity</p>
                    <p className="font-semibold">Educational services, Human capital development, General Contract and Merchandise</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Head Office</p>
                    <p className="font-semibold">No. 27, 7th Avenue, Gwarimpa II, Abuja, FCT</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">mimeticnigerialimited@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>

           <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="h-6 w-6 mr-2 text-red-400" />
                    Why Choose Mimetic Nigeria Limited
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Proven Track Record</h4>
                        <p className="text-sm">
                          Consistent delivery of high-quality projects across Nigeria with 100% client satisfaction
                          rate.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                        <p className="text-sm">
                          Highly qualified professionals with extensive experience in contracting and educational
                          development.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Innovation Focus</h4>
                        <p className="text-sm">
                          Leveraging cutting-edge technology and modern methodologies to deliver superior results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Comprehensive Solutions</h4>
                        <p className="text-sm">
                          End-to-end services from planning to execution, ensuring seamless project delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mt-16 mb-16">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-2xl">
                  <Target className="h-8 w-8 mr-3 text-red-400" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg leading-relaxed">
                To empower individuals and institutions through technical skills training, educational support services, research, and development and  partnerships that will enhance personal growth and organizational development.
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-2xl">
                  <Eye className="h-8 w-8 mr-3 text-red-400" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg leading-relaxed">
                A leading provider of comprehensive human capital development and educational services that foster job readiness, entrepreneurship, and educational advancement in Nigeria and beyond.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our operations and define our commitment to excellence in every endeavor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our commitment to excellence and sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-red-900" />
                    </div>
                    <div>
                      <div className="text-red-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Partner with Nigeria&apos;s Trusted Human Capital Company
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join an array of satisfied clients who have experienced the Mimetic difference in quality, reliability,
              and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg"
                >
                  Get in Touch
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
