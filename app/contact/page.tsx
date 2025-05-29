"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Menu, X, Phone, Mail, MapPin, Clock, Send, MessageSquare, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
      description: "Available Monday to Friday, 8:00 AM - 6:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["safiyabelo@yahoo.com", "info@mimeticnigeria.com"],
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["7th Avenue, Gwarimpa II", "Abuja, FCT, Nigeria"],
      description: "Visit us during business hours",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      description: "Closed on Sundays and public holidays",
    },
  ]

  const offices = [
    {
      city: "Abuja (Head Office)",
      address: "7th Avenue, Gwarimpa II, Abuja, FCT",
      phone: "+234 (0) 123 456 7890",
      email: "abuja@mimeticnigeria.com",
    },
    {
      city: "Lagos (Branch Office)",
      address: "Victoria Island, Lagos State",
      phone: "+234 (0) 987 654 3210",
      email: "lagos@mimeticnigeria.com",
    },
    {
      city: "Port Harcourt (Regional Office)",
      address: "GRA Phase II, Port Harcourt, Rivers State",
      phone: "+234 (0) 555 123 4567",
      email: "portharcourt@mimeticnigeria.com",
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
              <Link href="/leadership" className="text-white/80 hover:text-white transition-colors">
                Leadership
              </Link>
              <Link href="/contact" className="text-white border-b-2 border-red-500">
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
              <Link href="/leadership" className="block text-white/80 hover:text-white transition-colors">
                Leadership
              </Link>
              <Link href="/contact" className="block text-white">
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
            src="/images/608-6083509_free-contact-us-images-for-websites-clipart-png.png"
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-red-500/20 to-white/20 text-red-200 border-red-500/30 mb-6">
            Get In Touch
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something
            <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
              {" "}
              Amazing Together
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Ready to transform your vision into reality? Our team of experts is here to help you achieve your goals
            through innovative solutions and exceptional service.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-2xl">
                  <MessageSquare className="h-6 w-6 mr-3 text-red-400" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-300">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="+234 (0) 123 456 7890"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Company/Organization</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Service of Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2"
                    >
                      <option value="" className="bg-slate-800">
                        Select a service
                      </option>
                      <option value="general-contracting" className="bg-slate-800">
                        General Contracting
                      </option>
                      <option value="merchandise-trading" className="bg-slate-800">
                        Merchandise Trading
                      </option>
                      <option value="capacity-development" className="bg-slate-800">
                        Human Capacity Development
                      </option>
                      <option value="educational-services" className="bg-slate-800">
                        Educational Services
                      </option>
                      <option value="consultation" className="bg-slate-800">
                        General Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 text-lg mb-8">
                  We&apos;re here to help you succeed. Reach out to us through any of the following channels, and our team
                  will respond promptly to discuss your needs.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-300 mb-1">
                              {detail}
                            </p>
                          ))}
                          <p className="text-gray-400 text-sm mt-2">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Locations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With offices across Nigeria, we&apos;re positioned to serve clients nationwide and provide localized support
              for all your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{office.city}</h3>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What types of projects do you handle?",
                answer:
                  "We handle a wide range of projects including commercial construction, residential development, infrastructure projects, educational programs, and merchandise trading operations across Nigeria.",
              },
              {
                question: "How do you ensure project quality?",
                answer:
                  "We maintain strict quality control measures, employ certified professionals, use premium materials, and follow international standards while ensuring full compliance with Nigerian regulations.",
              },
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary based on scope and complexity. We provide detailed project schedules during the planning phase and maintain regular communication throughout the project lifecycle.",
              },
              {
                question: "Do you offer training and development programs?",
                answer:
                  "Yes, we provide comprehensive human capacity development programs, technical skills training, educational support, and career mentoring services for individuals and institutions.",
              },
              {
                question: "How can I get a project quote?",
                answer:
                  "Contact us through our form above, email, or phone. We'll schedule a consultation to understand your needs and provide a detailed proposal within 48-72 hours.",
              },
              {
                question: "Do you work with international partners?",
                answer:
                  "Yes, we collaborate with international institutions and organizations to bring global best practices and innovative solutions to our Nigerian clients.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied clients who have experienced the Mimetic difference. Let&apos;s discuss how we can
              help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
