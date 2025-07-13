import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
      <footer className="py-8 md:py-12 px-4 bg-[#202124] text-white w-full z-10 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:flex md:justify-between">
            <div className="flex flex-col items-center md:items-start">
              Recognized by
              <Image
                src="/startup.png"
                alt="HYVE Logo"
                className="mt-2"
                width={160}
                height={40}
              />
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
              <div className="flex justify-center md:justify-start space-x-4 flex-wrap">
                <Link
                  href="https://www.linkedin.com/company/hyve-work/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#F5A623] transition-colors"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="https://www.instagram.com/hyvefreelance"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#F5A623] transition-colors"
                >
                  <Instagram />
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <a
                href="mailto:team@hyvefreelance.com"
                className="text-gray-300 hover:text-[#F5A623] transition-colors"
              >
                team@hyvefreelance.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 text-center text-gray-400">
            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} HYVE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}