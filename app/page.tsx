"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Globe,
  UsersRoundIcon,
  Eye,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function HomePage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  const achievements = [
    { number: "2023", label: "Founded", icon: Calendar },
    { number: "2", label: "Expert Directors", icon: Users },
    { number: "5+", label: "Team members", icon: UsersRoundIcon },
    { number: "100%", label: "Active Status", icon: CheckCircle },
  ]

  const features = [
    {
      icon: Building2,
      title: "Infrastructure Excellence",
      description: "Leading construction and development projects across Nigeria with unmatched quality standards.",
    },
    {
      icon: Globe,
      title: "Educational Impact",
      description: "Empowering communities through comprehensive educational and capacity development programs.",
    },
    {
      icon: Target,
      title: "Strategic Partnerships",
      description: "Building lasting relationships with institutions and organizations for sustainable growth.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Delivering exceptional results with full regulatory compliance and industry recognition.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
      {/* Navigation */}
      <Header/>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
              <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30">
                Trusted by 10+ Companies Across Nigeria
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Building Nigeria&apos;s
                  <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent"> Future </span>
                  Together
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Leading provider of comprehensive human capacity development
                  services. Empowering individuals, institutions, and communities across Nigeria through education and
                  innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg w-full sm:w-auto"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto"
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
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Excellence in Numbers</h2>
            <p className="text-xl text-gray-300">Demonstrating our commitment to quality and growth</p>
          </div>
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

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-4">
              Why Choose Mimetic
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Driving Excellence Across Industries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From infrastructure development to educational advancement, we deliver comprehensive solutions that create
              lasting impact across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
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
                  To empower individuals and institutions through technical skills training, educational support,
                  research, and development partnerships, enabling personal growth and sustainable development while
                  delivering exceptional contracting and merchandise solutions that drive Nigeria&apos;s economic progress.
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
                  To be Nigeria&apos;s leading provider of comprehensive human capacity development and educational services
                  that foster job readiness, entrepreneurship, and educational advancement, while maintaining excellence
                  in contracting and merchandise trading across West Africa.
                </CardContent>
              </Card>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Mimetic Nigeria Limited for comprehensive solutions that drive growth, innovation, and
              sustainable development across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  View Our Services
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

