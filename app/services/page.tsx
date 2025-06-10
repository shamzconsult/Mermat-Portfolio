"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Calendar,
  CheckCircle,
  Handshake,
  BookOpen,
  Briefcase,
  GraduationCap,
  Factory,
  ArrowRight,
  Building,
  Search,
  Heart,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Users,
      title: "Human Capacity Development Services",
      description:
        "Technical and professional development skills training services that promotes job readiness, business startup, and development.",
      features: [
        "Technical Skills Training",
        "Professional Development Programs",
        "Job Readiness Preparation",
        "Business Startup Training",
        "Entrepreneurship Development",
      ],
      image: "/images/Human-capacity.png",
      gradient: "gradient-card-emerald",
    },
    {
      icon: BookOpen,
      title: "Educational and Career Mentoring Services",
      description:
        "Multi-sectorial research and development services that enhance educational and career development opportunities.",
      features: [
        "Career Development Guidance",
        "Research & Development Services",
        "Multi-sectorial Consulting",
        "Organizational Growth Support",
        "Professional Mentoring Programs",
      ],
      image: "/images/Educational-career.png",
      gradient: "gradient-card-blue",
    },
    {
      icon: Factory,
      title: "Educational Materials and Infrastructure Supply",
      description:
        "Bespoke materials and infrastructure that improves learning and research to enhance organizational growth and development.",
      features: [
        "Educational Materials Supply",
        "Learning Infrastructure Development",
        "Research Equipment Provision",
        "Customized Learning Solutions",
        "Organizational Development Support",
      ],
      image: "/images/Educational-materials.png",
      gradient: "gradient-card-teal",
    },
    {
      icon: GraduationCap,
      title: "Vocational & Technical Learning Centers",
      description:
        "Creating franchise or study centers for regular or specialized educational programs including external examinations preparation.",
      features: [
        "Learning Center Establishment",
        "External Examination Preparation",
        "Technical Skills Training Centers",
        "Vocational Education Programs",
        "Specialized Education Centers",
      ],
      image: "/images/Vocational-technical.png",
      gradient: "gradient-card-cyan",
    },
    {
      icon: Calendar,
      title: "Educational Advocacy Services",
      description:
        "Educational development advocacy through debates, lectures, exhibitions, outdoor events, public meetings, and conferences.",
      features: [
        "Educational Conferences",
        "Public Lectures & Debates",
        "Educational Exhibitions",
        "Outdoor Educational Events",
        "Professional Development Seminars",
      ],
      image: "/images/study-group-african-people.jpg",
      gradient: "gradient-card-sky",
    },
    {
      icon: Building2,
      title: "General Contracting Services",
      description: "Comprehensive contracting services including logistics, procurement, curriculum development.",
      features: [
        "Logistics Services",
        "Procurement Management",
        "Curriculum Development",
        "Educational Events Management",
        "Educational Development Activities",
      ],
      image: "/images/General-contracting.png",
      gradient: "gradient-card-indigo",
    },
  ]

  const targetAudiences = [
    {
      icon: Building,
      title: "Government Agencies",
      description:
        "We partner with ministries, departments and public sector institutions to implement training programs, educational initiatives, youth development strategies, and research-based policy support.",
      gradient: "gradient-card-emerald",
    },
    {
      icon: Search,
      title: "Research Institutions and Institutes",
      description:
        "We collaborate with research organizations to provide training in research methods, data interpretation, and the design of practical, community-impact-driven projects.",
      gradient: "gradient-card-blue",
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description:
        "From primary schools to tertiary institutions and training centers, we support education providers with infrastructure setup, study center operations, and curriculum enhancement.",
      gradient: "gradient-card-teal",
    },
    {
      icon: Handshake,
      title: "NGOs and Development Organizations",
      description:
        "We work alongside development partners and non-profits to co-create community education initiatives, skill empowerment programs, and public enlightenment campaigns.",
      gradient: "gradient-card-cyan",
    },
    {
      icon: Briefcase,
      title: "Private Organizations",
      description:
        "Whether you're an SME or a large enterprise, we provide training, business development support, talent readiness programs, and supply services tailored to your organizational needs.",
      gradient: "gradient-card-sky",
    },
    {
      icon: Users,
      title: "Youth and Students",
      description:
        "Our heartbeat. We help young people access job-readiness skills, technical and vocational education, entrepreneurial mentorship, and career guidance.",
      gradient: "gradient-card-indigo",
    },
    {
      icon: Heart,
      title: "High Net-Worth Individuals (HNWIs)",
      description:
        "For individuals passionate about giving back or building educational impact, we offer partnership opportunities in CSR, scholarship schemes, and strategic philanthropic ventures.",
      gradient: "gradient-card-mint",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-600">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="absolute inset-0">
          <Image src="/images/service-hero.png" alt="Our Services" fill className="object-cover opacity-20" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-xl floating-element"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300/30 rounded-full blur-lg floating-element"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-blue-300/20 rounded-full blur-xl floating-element"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-300/30 rounded-full blur-lg floating-element"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm mb-6">
            Our Services
          </Badge>
          <h1 className="text-5xl lg:text-6xl  font-bold text-white mb-6">
            Comprehensive Solutions for
            <span className="block text-emerald-300 shimmer"> Every Need</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            From infrastructure development to educational advancement, we provide integrated solutions that drive
            growth, innovation, and sustainable development across Nigeria.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-green opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 text-lg font-semibold mb-6">
              <Sparkles className="h-5 w-5 mr-2" />
              Core Services
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Our Amazing</span> Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive Educational Development and Human Capacity Building Solutions designed to empower individuals, organizations and communities across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className={`${service.gradient} rounded-3xl overflow-hidden hover-lift text-white`}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mr-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  </div>
                  <p className="text-white/90 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-white/80 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-white mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
        <div className="absolute inset-0 bg-dots-blue opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-3 text-lg font-semibold mb-6">
              <Users className="h-5 w-5 mr-2" />
              Target Audiences
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Who We</span> Proudly Serve
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              At Mimetic Nigeria Limited, our work touches diverse sectors of society — from policy to people,
              institutions to individuals. Here&apos;s who we proudly serve:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {targetAudiences.map((audience, index) => (
              <div
                key={index}
                className={`${audience.gradient} rounded-3xl p-8 text-white hover-lift hover-glow-green`}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <audience.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{audience.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="gradient-card-arctic rounded-3xl p-10 text-center">
              <p className="text-blue-800 text-2xl font-bold italic">
                &ldquo;Together, we work toward national development goals and sustainable impact across all
                sectors.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl floating-element"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 px-6 py-3 text-lg font-semibold mb-6">
              <Zap className="h-5 w-5 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">How We Work</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your needs and objectives",
                gradient: "gradient-card-emerald",
              },
              {
                step: "02",
                title: "Planning",
                description: "Developing comprehensive project strategies",
                gradient: "gradient-card-blue",
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing solutions with precision",
                gradient: "gradient-card-teal",
              },
              {
                step: "04",
                title: "Evaluation",
                description: "Evaluating quality results",
                gradient: "gradient-card-cyan",
              },
              {
                step: "05",
                title: "Delivery",
                description: "Ensuring quality results and ongoing support",
                gradient: "gradient-card-sky",
              },
            ].map((process, index) => (
              <div key={index} className={`${process.gradient} rounded-3xl p-8 text-center hover-lift text-white`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{process.title}</h3>
                <p className="text-white/90 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-green opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-3 text-lg font-semibold mb-8">
              <Sparkles className="h-5 w-5 mr-2" />
              Ready to Get Started?
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Ready to Get</span> Started?
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Contact us today to discuss how our comprehensive services can help achieve your goals and drive
              sustainable growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-10 py-6 text-xl font-bold shadow-2xl"
                >
                  <Star className="mr-2 h-6 w-6" />
                  Request Consultation
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 text-xl font-bold"
                >
                  Learn About Us
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
