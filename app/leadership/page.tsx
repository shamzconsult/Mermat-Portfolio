"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, MapPin, Calendar, Award, Briefcase, GraduationCap, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function LeadershipPage() {
  const directors = [
    {
      name: "Dr. Abdullahi Bello Tiffi",
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
      image: "/images/Abdullahi_Tiffi.webp",
    },
    {
      name: "Safiya Bello Tiffi-Lamorde",
      role: "Managing Director/Chief Executive Officer",
      email: "safiyabelo@yahoo.com",
      location: "Abuja, FCT",
      appointmentDate: "12 MAY 2023",
      gender: "Female",
      nationality: "Nigerian",
      experience: "12+ years",
      expertise: ["Educational Development", "Human Resources", "Project Management", "Community Relations"],
      education: "Master's in Educational Management",
      bio: "Safiya is a visionary leader with a passion for educational development and human capacity building. Her expertise in educational management drives our commitment to empowering individuals and institutions across Nigeria.",
      image: "/images/Safiya_picture.webp",
    },
  ]

  const boardMembers = [
    {
      name: "Dr. Baliqees Bello Tiffi",
      role: "Advisory Board Member",
      expertise: ["Educational Policy", "Research & Development"],
      experience: "20+ years in Educational Leadership",
    },
    {
      name: "Mr. Shamsudeem Aderoju",
      role: "Program Development Advisor",
      expertise: ["Construction Management", "Infrastructure Development"],
      experience: "18+ years in Programs Co-ordination",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-custom">
        <div className="absolute inset-0 bg-dots"></div>
       <div className="absolute inset-0">
          <Image
            src="/images/leadership-hero.png"
            alt="Leadership Team"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm mb-6">
            Leadership Team
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Visionary Leaders Driving
            <span className="text-gradient"> Excellence</span>
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Meet the experienced professionals who guide Mimetic Nigeria Limited&apos;s strategic direction, ensuring
            excellence in every project and sustainable growth across all our business sectors.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-blue opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Board of Directors</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our directors bring decades of combined experience in business development, education, and strategic
              leadership to drive our company&apos;s vision forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {directors.map((director, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover-lift">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative w-40 h-40 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 p-1 shadow-lg shadow-blue-500/20">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={director.image || "/placeholder.svg"}
                          alt={director.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-gray-900 font-bold text-2xl mb-2">{director.name}</h3>
                    <Badge className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 mb-4">
                      {director.role}
                    </Badge>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>Since {director.appointmentDate.split(" ")[2]}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>{director.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <p className="text-gray-700 leading-relaxed">{director.bio}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-emerald-600" />
                        Core Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {director.expertise.map((skill, idx) => (
                          <Badge
                            key={idx}
                            className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3 flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-emerald-600" />
                        Education
                      </h4>
                      <p className="text-gray-600">{director.education}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>{director.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>{director.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-green-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Advisory Board</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Distinguished professionals who provide strategic guidance and industry expertise to support our continued
              growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-center hover-lift">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/10">
                  <Users className="h-12 w-12 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 font-bold text-2xl mb-2">{member.name}</h3>
                <Badge className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 mb-4">
                  {member.role}
                </Badge>
                <p className="text-gray-600 mb-4">{member.experience}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-blue opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
              <div key={index} className="glass-card rounded-xl p-6 text-center hover-lift">
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-gray-900 font-semibold text-xl mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-emerald-600  relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Connect with Our Leadership Team</h2>
            <p className="text-xl text-white mb-8">
              Our leadership team is committed to building strong relationships with stakeholders, partners, and the
              communities we serve. Reach out to discuss opportunities for collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/20"
                >
                  Schedule a Meeting
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg"
                >
                  Learn More About Us
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
