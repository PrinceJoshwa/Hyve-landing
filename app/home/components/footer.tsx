import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#202124] text-white w-full z-10 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#F1AB13] w-8 h-8 flex items-center justify-center rounded-md text-black font-bold">
                H
              </div>
              <span className="text-xl font-semibold">HYVE</span>
            </div>
            <p className="text-gray-400 text-sm">
              India's first team-based freelancing platform built for
              collaboration, not just gigs.
            </p>
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
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg mb-4">Company</h4>
            <div className="flex flex-col space-y-3">
              <Link
                href="/about"
                className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg mb-4">Support</h4>
            <div className="flex flex-col space-y-3">
              <Link
                href="/help"
                className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="/community"
                className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                Community
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg mb-4">Legal</h4>
            <div className="flex flex-col space-y-3">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 HYVE. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <h4 className="text-sm mr-2">Follow Us</h4>
              <Link
                href="https://www.instagram.com/hyvefreelance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F5A623] transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/hyve-work"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F5A623] transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center md:text-right">
            <p className="text-[#F5A623] text-sm italic">
              "By Freelancers, For Freelancers — HYVE is built by those who've
              lived the hustle."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
