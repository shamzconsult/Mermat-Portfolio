"use client"

import type React from "react"

import { type FormEvent, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

interface ContactFormData {
  name: string
  email: string
  phoneNumber: string
  company: string
  service: string
  message: string
}

export default function ContactPage() {
  const [showFallback, setShowFallback] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    service: "",
    message: "",
  })
  const mailtoRef = useRef<HTMLAnchorElement>(null)

  const [faqOpenStates, setFaqOpenStates] = useState(Array(6).fill(false))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, phoneNumber, company, service, message } = formData
    const subject = encodeURIComponent("Contact Request from Website")
    const body = encodeURIComponent(
      `**Contact Request**\n\n` +
        `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\n` +
        `Company: ${company}\nService: ${service}\n\nMessage:\n${message}`,
    )
    window.location.href = `mailto:mimeticnigerialimited@gmail.com?subject=${subject}&body=${body}`

    setShowFallback(true)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+2348034395365"],
      description: "Available Monday to Friday, 8:00 AM - 6:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mimeticnigerialimited@gmail.com"],
      description: "We respond within 24 hours",
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
      city: "Bauchi (Branch Office)",
      address: "Victoria Island, Bauchi State",
      phone: "+234 (0) 987 654 3210",
      email: "bauchi@mimeticnigeria.com",
    },
  ]

  const toggleFaq = (index: number) => {
    setFaqOpenStates((prev) => {
      const newStates = [...prev]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
       <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-600">
        <div className="absolute inset-0 bg-dots"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/608-6083509_free-contact-us-images-for-websites-clipart-png.png"
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
          />
          {/* <div className="absolute inset-0 bg-white/60"></div> */}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm mb-6">
            Get In Touch
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something
            <span className="text-emerald-300 shimmer"> Amazing Together</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Ready to transform your vision into reality? Our team of experts is here to help you achieve your goals
            through innovative solutions and exceptional services.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-blue opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/10 mr-3">
                  <MessageSquare className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-gray-900 font-bold text-2xl">Send Us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="+234 (0) 123 456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Company/Organization</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Service of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 text-gray-900 rounded-md px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="" className="bg-white">
                      Select a service
                    </option>
                    <option value="general-contracting" className="bg-white">
                      General Contracting
                    </option>
                    <option value="merchandise-trading" className="bg-white">
                      Merchandise Trading
                    </option>
                    <option value="capacity-development" className="bg-white">
                      Human Capital Development
                    </option>
                    <option value="educational-services" className="bg-white">
                      Educational Services
                    </option>
                    <option value="consultation" className="bg-white">
                      General Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500 min-h-[120px]"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-3 shadow-lg shadow-blue-500/20"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>

              {/* Hidden mailto anchor */}
              <a ref={mailtoRef} style={{ display: "none" }}>
                Mail
              </a>

              {/* Fallback message and Gmail link */}
              {showFallback && (
                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-sm">
                  <p>
                    <strong>If your email client did not open:</strong>
                  </p>
                  <ul className="list-disc ml-5">
                    <li>
                      You can{" "}
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=mimeticnigerialimited@gmail.com&su=Contact%20Request%20from%20Website&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}\nWhich company are you reaching us from?: ${formData.company}\nService Interested In:**\n${formData.service || "Not specified"}\n\nPlease provide more context here: ${formData.message}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-emerald-700"
                      >
                        send us an email via Gmail Webmail
                      </a>
                      .
                    </li>
                    <li>
                      Or, email us directly at{" "}
                      <a href="mailto:mimeticnigerialimited@gmail.com" className="underline text-emerald-700">
                        mimeticnigerialimited@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-700 text-lg mb-8">
                  We&apos;re here to help you succeed. Reach out to us through any of the following channels, and our
                  team will respond promptly to discuss your needs.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-card rounded-xl p-6 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/10 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="text-gray-500 text-sm mt-2">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-green-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              With offices across Nigeria, we&apos;re positioned to serve clients nationwide and provide localized
              support for all your business needs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[60%] h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.4096890635938!2d7.389433875691813!3d9.117417387597266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf7e5331fc91%3A0xe86223749a28b354!2sAuwalu%20Anwar%20Cl%2C%20Gwarinpa%2C%20900108%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1749501972096!5m2!1sen!2sng" 
                className="w-full h-full"
                style={{border:0}}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Our office location on Google Maps"
              />
            </div>

            <div className="w-full lg:w-[40%]">
              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6 h-full">
                {offices.map((office, index) => (
                  <div key={index} className="glass-card rounded-xl p-6 hover-lift h-full">
                    <div className="text-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/10">
                        <Building2 className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-gray-900 font-bold text-lg">{office.city}</h3>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-blue opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="md:flex md:flex-wrap gap-8">
            <div className="flex-1 min-w-0 md:min-w-[calc(50%-1rem)] space-y-6">
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
              ].map((faq, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden hover-lift">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors"
                  >
                    <h3 className="text-gray-900 font-semibold">{faq.question}</h3>
                    {faqOpenStates[index] ? (
                      <ChevronUp className="h-5 w-5 text-emerald-600 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-emerald-600 transition-transform duration-200" />
                    )}
                  </button>
                  {faqOpenStates[index] && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex-1 min-w-0 md:min-w-[calc(50%-1rem)] space-y-6 mt-6 md:mt-0">
              {[
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
                <div key={index + 3} className="glass-card rounded-xl overflow-hidden hover-lift">
                  <button
                    onClick={() => toggleFaq(index + 3)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors"
                  >
                    <h3 className="text-gray-900 font-semibold">{faq.question}</h3>
                    {faqOpenStates[index + 3] ? (
                      <ChevronUp className="h-5 w-5 text-emerald-600 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-emerald-600 transition-transform duration-200" />
                    )}
                  </button>
                  {faqOpenStates[index + 3] && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white mb-8">
              Join hundreds of satisfied clients who have experienced the Mimetic difference. Let&apos;s discuss how we
              can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/20"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
