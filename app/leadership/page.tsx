"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Menu, X, Mail, MapPin, Calendar, Award, Briefcase, GraduationCap, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function LeadershipPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const directors = [
    {
      name: "Abdullahi Tiffi Bello",
      role: "Director",
      email: "tiffibelo@gmail.com",
      location: "Bauchi State",
      appointmentDate: "12 MAY 2023",
      gender: "Male",
      nationality: "Nigerian",
      experience: "15+ years",
      expertise: ["Strategic Planning", "Business Development", "Operations Management", "Stakeholder Relations"],
      education: "Bachelor's in Business Administration",
      bio: "Abdullahi brings over 15 years of extensive experience in business development and strategic planning. His leadership has been instrumental in establishing Mimetic Nigeria Limited as a trusted partner in the contracting and development sector.",
    },
    {
      name: "Safiya Tiffi-Lamorde Bello",
      role: "Director",
      email: "safiyabelo@yahoo.com",
      location: "Abuja, FCT",
      appointmentDate: "12 MAY 2023",
      gender: "Female",
      nationality: "Nigerian",
      experience: "12+ years",
      expertise: ["Educational Development", "Human Resources", "Project Management", "Community Relations"],
      education: "Master's in Educational Management",
      bio: "Safiya is a visionary leader with a passion for educational development and human capacity building. Her expertise in educational management drives our commitment to empowering individuals and institutions across Nigeria.",
    },
  ]

  const boardMembers = [
    {
      name: "Dr. Amina Hassan",
      role: "Advisory Board Member",
      expertise: ["Educational Policy", "Research & Development"],
      experience: "20+ years in Educational Leadership",
    },
    {
      name: "Engr. Ibrahim Musa",
      role: "Technical Advisor",
      expertise: ["Construction Management", "Infrastructure Development"],
      experience: "18+ years in Engineering & Construction",
    },
    {
      name: "Mrs. Fatima Aliyu",
      role: "Business Development Advisor",
      expertise: ["Strategic Partnerships", "Market Expansion"],
      experience: "14+ years in Business Development",
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
              <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/leadership" className="text-white border-b-2 border-red-500">
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
              <Link href="/services" className="block text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/leadership" className="block text-white">
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
            src="/images/view-dramatic-chess-pieces-with-man.jpg"
            alt="Leadership Team"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-6">
            Leadership Team
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Visionary Leaders Driving
            <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent"> Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Meet the experienced professionals who guide Mimetic Nigeria Limited&apos;s strategic direction, ensuring
            excellence in every project and sustainable growth across all our business sectors.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Board of Directors</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our directors bring decades of combined experience in business development, education, and strategic
              leadership to drive our company&apos;s vision forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {directors.map((director, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-12 w-12 text-red-900" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-2xl mb-2">{director.name}</CardTitle>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-4">{director.role}</Badge>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Since {director.appointmentDate.split(" ")[2]}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span>{director.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">{director.bio}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-red-400" />
                        Core Expertise
                      </h4>
                      <div className="space-y-2">
                        {director.expertise.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs border-red-500/30 text-red-300 mr-2 mb-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-red-400" />
                        Education
                      </h4>
                      <p className="text-gray-400 text-sm">{director.education}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Mail className="h-4 w-4 mr-2 text-red-400" />
                        <span>{director.email}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-red-400" />
                        <span>{director.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Advisory Board</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Distinguished professionals who provide strategic guidance and industry expertise to support our continued
              growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-10 w-10 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-lg">{member.name}</h3>
                  <Badge className="bg-white/10 text-white border-white/20 mb-4">{member.role}</Badge>
                  <p className="text-gray-400 text-sm mb-4">{member.experience}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-red-500/30 text-red-300 mr-1 mb-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles and values that guide our leadership approach and decision-making processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Visionary Thinking",
                description:
                  "We anticipate future trends and opportunities, positioning our company for long-term success.",
                icon: "🔮",
              },
              {
                title: "Collaborative Leadership",
                description: "We believe in the power of teamwork and inclusive decision-making processes.",
                icon: "🤝",
              },
              {
                title: "Ethical Standards",
                description: "We maintain the highest levels of integrity and transparency in all our operations.",
                icon: "⚖️",
              },
              {
                title: "Continuous Learning",
                description: "We foster a culture of growth, innovation, and professional development.",
                icon: "📚",
              },
            ].map((principle, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-white font-semibold mb-3">{principle.title}</h3>
                  <p className="text-gray-400 text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Connect with Our Leadership Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our leadership team is committed to building strong relationships with stakeholders, partners, and the
              communities we serve. Reach out to discuss opportunities for collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg"
                >
                  Schedule a Meeting
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Learn More About Us
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
