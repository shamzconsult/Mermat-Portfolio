"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Building2,
  Users,
  Award,
  Shield,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Handshake,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const directors = [
    {
      name: "Abdullahi Tiffi Bello",
      role: "Director",
      email: "tiffibelo@gmail.com",
      location: "Bauchi State",
      appointmentDate: "12 MAY 2023",
      gender: "Male",
      nationality: "Nigerian"
    },
    {
      name: "Safiya Tiffi-Lamorde Bello",
      role: "Director",
      email: "safiyabelo@yahoo.com",
      location: "Abuja, FCT",
      appointmentDate: "12 MAY 2023",
      gender: "Female",
      nationality: "Nigerian"
    },
  ]

  const services = [
    {
      icon: Building2,
      title: "General Contracting",
      description: "Comprehensive construction and infrastructure development services across Nigeria",
    },
    {
      icon: TrendingUp,
      title: "Merchandise Trading",
      description: "Strategic trading and distribution of quality merchandise and commercial goods",
    },
    {
      icon: Handshake,
      title: "Business Partnerships",
      description: "Building lasting partnerships with clients and stakeholders for mutual growth",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Committed to delivering excellence in every project with rigorous quality standards",
    },
  ]

  const achievements = [
    { number: "1M+", label: "Share Capital", icon: TrendingUp },
    { number: "2", label: "Expert Directors", icon: Users },
    { number: "2023", label: "Established", icon: Calendar },
    { number: "100%", label: "Active Status", icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-white rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-red-900" />
              </div>
              <span className="text-xl font-bold text-white">MIMETIC</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#leadership" className="text-white/80 hover:text-white transition-colors">
                Leadership
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                Start Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <Link href="#home" className="block text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="block text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#services" className="block text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#leadership" className="block text-white/80 hover:text-white transition-colors">
                Leadership
              </Link>
              <Link href="#contact" className="block text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/african-american-employee-wearing-industrial-overall.jpg"
            alt="Modern building architecture"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30">
                Trusted by 500+ Companies in Nigeria
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Your Complete
                  <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                    {" "}
                    Business{" "}
                  </span>
                  Solution
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Streamline operations, boost revenue, and delight your customers with our comprehensive contracting
                  and merchandise solutions across Nigeria.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg"
                >
                  Start Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 outline bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  View Portfolio
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Setup in 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Right side content can be added here if needed */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon className="h-8 w-8 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-4">
              About Mimetic Nigeria Limited
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Building Nigeria&apos;s Future</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Established in 2023, we are a dynamic private company committed to excellence in general contracting and
              merchandise trading.
            </p>
          </div>

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
                      <p className="font-semibold">Private Limited</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                    </div>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-sm text-gray-400">Principal Business Activity</p>
                    <p className="font-semibold">General Contract and Merchandise</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Head Office</p>
                    <p className="font-semibold">7th Avenue, Gwarimpa II, Abuja, FCT</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2 text-red-400" />
                    Share Capital Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Share Class</span>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Ordinary</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Nominal Value per Share</span>
                      <span className="font-semibold">₦1.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total Issued Shares</span>
                      <span className="font-semibold">1,000,000</span>
                    </div>
                    <Separator className="bg-white/10" />
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-semibold">Total Share Capital</span>
                      <span className="font-bold text-red-400">₦1,000,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-red-500/10 to-white/10 backdrop-blur-sm">
                <CardContent className="p-6 bg-red-950/70 rounded-full">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Certified & Compliant</h3>
                      <p className="text-gray-300 text-sm">
                        Fully registered and compliant with Nigerian corporate regulations
                      </p>
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
                  <TrendingUp className="h-8 w-8 mr-3 text-red-400" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg leading-relaxed">
                To empower individuals and institutions through technical skills training, educational support,
                research, and development partnerships, enabling personal growth and sustainable development.
              </CardContent>
            </Card>

            <Card className="bg-red-950 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-2xl">
                  <Award className="h-8 w-8 mr-3 text-white" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg leading-relaxed">
                A leading provider of comprehensive human capacity development and educational services that foster job
                readiness, entrepreneurship, and educational advancement in Nigeria and beyond.
              </CardContent>
            </Card>
          </div>

          {/* Core Functions */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Core Functions</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive services designed to drive growth and development across multiple sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-rose-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-red-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Human Capacity Development</h4>
                  <p className="text-gray-400 text-sm">
                    Technical skills training that promotes job readiness, business startup, and development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Educational & Career Mentoring</h4>
                  <p className="text-gray-400 text-sm">
                    Educational materials, research methods training, and comprehensive career mentoring services.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Handshake className="h-6 w-6 text-red-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Educational Institution Collaboration</h4>
                  <p className="text-gray-400 text-sm">
                    Partnering with accredited institutions to support educational infrastructure and learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500/20 to-red-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="h-6 w-6 text-rose-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Vocational & Technical Centers</h4>
                  <p className="text-gray-400 text-sm">
                    Creating franchise or study centers for regular and specialized technical education.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-red-300/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calendar className="h-6 w-6 text-red-300" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Event Organization & Advocacy</h4>
                  <p className="text-gray-400 text-sm">
                    Organizing debates, lectures, exhibitions, and conferences to promote education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Target Audiences */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Target Audiences</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Serving diverse communities with tailored solutions for growth and development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-red-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Students & Youth</h4>
                  <p className="text-gray-400 text-sm">
                    Technical/vocational education, job readiness skills, career mentoring, and business startup
                    preparation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Educational Institutions</h4>
                  <p className="text-gray-400 text-sm">
                    Schools, colleges, and training institutes needing infrastructure support and curriculum
                    collaboration.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-red-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Job Seekers & Entrepreneurs</h4>
                  <p className="text-gray-400 text-sm">
                    Skills development for employment opportunities and business launch/management support.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500/20 to-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-rose-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Organizations & Research Bodies</h4>
                  <p className="text-gray-400 text-sm">
                    Training in research methods, educational consulting, and capacity development projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-red-300/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calendar className="h-6 w-6 text-red-300" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Event Participants</h4>
                  <p className="text-gray-400 text-sm">
                    Professionals and public interested in debates, exhibitions, lectures, and educational events.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What We Do Best</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your business needs across contracting and merchandise sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-4">
              Leadership Team
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Meet Our Directors</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in every aspect of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {directors.map((director, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-red-900" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{director.name}</CardTitle>
                      <CardDescription className="text-red-300">{director.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold text-sm">{director.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-semibold text-sm">{director.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Nationality</p>
                      <p className="font-semibold text-sm">{director.nationality}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Appointed</p>
                      <p className="font-semibold text-sm">{director.appointmentDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                    <span className="text-sm text-gray-400">Gender: {director.gender}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-4">
              Our Partners
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Trusted Partnerships</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building strong relationships with industry leaders and stakeholders across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <div
                key={partner}
                className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=80&width=120&text=Partner+${partner}`}
                  alt={`Partner ${partner}`}
                  width={120}
                  height={80}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+234 (0) 123 456 7890</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-400">safiyabelo@yahoo.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-gray-400">7th Avenue, Gwarimpa II, Abuja, FCT</p>
              </CardContent>
            </Card>
          </div>

          {/* <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-white rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-red-900" />
                </div>
                <span className="text-xl font-bold text-white">MIMETIC</span>
              </div>
              <p className="text-gray-400">
                Building Nigeria&apos;s future through excellence in contracting and merchandise.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>General Contracting</li>
                <li>Merchandise Trading</li>
                <li>Business Partnerships</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Leadership</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Compliance</li>
                <li>Certificates</li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/10 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mimetic Nigeria Limited. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">Registration Number: 6964866 | RC: 6964866</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
