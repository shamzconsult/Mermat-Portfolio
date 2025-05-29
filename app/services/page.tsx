"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Shield,
  TrendingUp,
  Calendar,
  CheckCircle,
  Menu,
  X,
  Handshake,
  BookOpen,
  Briefcase,
  GraduationCap,
  Factory,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const mainServices = [
    {
      icon: Building2,
      title: "General Contracting",
      description: "Comprehensive construction and infrastructure development services across Nigeria",
      features: [
        "Commercial & Residential Construction",
        "Infrastructure Development",
        "Project Management",
        "Quality Assurance & Control",
        "Regulatory Compliance",
      ],
      image: "/images/construction-engineer.jpg",
    },
    {
      icon: TrendingUp,
      title: "Merchandise Trading",
      description: "Strategic trading and distribution of quality merchandise and commercial goods",
      features: [
        "Import & Export Services",
        "Supply Chain Management",
        "Quality Product Sourcing",
        "Distribution Networks",
        "Market Analysis",
      ],
      image: "/images/cyber-monday-shopping-sales.jpg",
    },
  ]

  const educationalServices = [
    {
      icon: Users,
      title: "Human Capacity Development",
      description: "Technical skills training that promotes job readiness, business startup, and development.",
      features: [
        "Technical Skills Training",
        "Vocational Education Programs",
        "Professional Certification Courses",
        "Entrepreneurship Development",
        "Job Readiness Programs",
      ],
    },
    {
      icon: BookOpen,
      title: "Educational & Career Mentoring",
      description: "Educational materials, research methods training, and comprehensive career mentoring services.",
      features: [
        "Career Guidance & Counseling",
        "Research Methodology Training",
        "Academic Support Services",
        "Professional Development",
        "Educational Resource Provision",
      ],
    },
    {
      icon: Handshake,
      title: "Educational Institution Collaboration",
      description: "Partnering with accredited institutions to support educational infrastructure and learning.",
      features: [
        "Institutional Partnerships",
        "Curriculum Development",
        "Infrastructure Support",
        "Faculty Development Programs",
        "Educational Technology Integration",
      ],
    },
    {
      icon: Factory,
      title: "Vocational & Technical Centers",
      description: "Creating franchise or study centers for regular and specialized technical education.",
      features: [
        "Learning Center Establishment",
        "Technical Training Facilities",
        "Equipment & Resource Provision",
        "Franchise Opportunities",
        "Specialized Program Development",
      ],
    },
    {
      icon: Calendar,
      title: "Event Organization & Advocacy",
      description: "Organizing debates, lectures, exhibitions, and conferences to promote education.",
      features: [
        "Educational Conferences",
        "Professional Workshops",
        "Public Lectures & Seminars",
        "Exhibition Organization",
        "Advocacy Campaigns",
      ],
    },
  ]

  const targetAudiences = [
    {
      icon: GraduationCap,
      title: "Students & Youth",
      description:
        "Technical/vocational education, job readiness skills, career mentoring, and business startup preparation.",
      services: ["Vocational Training", "Career Guidance", "Entrepreneurship Programs", "Skill Development"],
    },
    {
      icon: Building2,
      title: "Educational Institutions",
      description:
        "Schools, colleges, and training institutes needing infrastructure support and curriculum collaboration.",
      services: ["Infrastructure Development", "Curriculum Support", "Faculty Training", "Technology Integration"],
    },
    {
      icon: Briefcase,
      title: "Job Seekers & Entrepreneurs",
      description: "Skills development for employment opportunities and business launch/management support.",
      services: ["Employment Training", "Business Development", "Mentorship Programs", "Market Access"],
    },
    {
      icon: Shield,
      title: "Organizations & Research Bodies",
      description: "Training in research methods, educational consulting, and capacity development projects.",
      services: ["Research Training", "Consulting Services", "Capacity Building", "Project Management"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-white rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-red-900" />
              </div>
              <span className="text-xl font-bold text-white">MIMETIC</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white border-b-2 border-red-500">
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
              <Link href="/about" className="block text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="block text-white">
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
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/african-business-male-people-shaking-hands.jpg"
            alt="Our Services"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-6">
            Our Services
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive Solutions for
            <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent"> Every Need</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From infrastructure development to educational advancement, we provide integrated solutions that drive
            growth, innovation, and sustainable development across Nigeria.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Core Business Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our primary business operations focused on infrastructure development and strategic commerce.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-2xl">
                    <service.icon className="h-8 w-8 mr-3 text-red-400" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Services */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Educational & Development Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive human capacity development and educational services designed to empower individuals and
              institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-3 text-lg">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Services Include:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-xs flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Who We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse range of services caters to various sectors and audiences across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudiences.map((audience, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <audience.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-3">{audience.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{audience.description}</p>
                  <div className="space-y-1">
                    {audience.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-red-500/30 text-red-300 mr-1 mb-1">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your needs and objectives" },
              { step: "02", title: "Planning", description: "Developing comprehensive project strategies" },
              { step: "03", title: "Execution", description: "Implementing solutions with precision" },
              { step: "04", title: "Delivery", description: "Ensuring quality results and ongoing support" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-900 font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our comprehensive services can help achieve your goals and drive
              sustainable growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg"
                >
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Learn About Us
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
