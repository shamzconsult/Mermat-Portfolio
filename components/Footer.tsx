import { Building2, Facebook, Instagram, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-blue-950 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-white rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-red-900" />
                </div>
                <span className="text-xl font-bold text-white">MIMETIC</span>
              </Link>
              <p className="text-gray-400">
                Building Nigeria&apos;s future through human capacity
                development and innovative educational standards.
              </p>
              <div className='flex text-gray-400 gap-4'>
                <Link href='' className='bg-green-700 rounded-full p-2'>
                <Instagram/>
                </Link>
                <Link href='' className='bg-green-700 rounded-full p-2'>
                <PhoneCall/>
                </Link>
                <Link href='' className='bg-green-700 rounded-full p-2'>
                <Facebook/>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    General Contracting
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Merchandise Trading
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Capacity Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Educational Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/leadership" className="hover:text-white transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
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

export default Footer