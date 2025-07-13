"use client"

import {
  Search,
  Users,
  FileText,
  Handshake,
  Shield,
  Brain,
  Briefcase,
  Award,
  Crown,
  Building,
  MessageCircle,
  Rocket,
  Sparkles,
  CheckCircle,
  BarChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const [activeTab, setActiveTab] = useState("hire")
  const [activeSection, setActiveSection] = useState("freelancer") // Default to freelancer

  // Listen for hash changes to handle navbar navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#for-freelancers") {
        setActiveSection("freelancer");
        const el = document.getElementById("for-freelancers");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (hash === "#for-companies") {
        setActiveSection("company");
        const el = document.getElementById("for-companies");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    // On mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Main Content */}
      <main className="relative overflow-hidden bg-dot-grid">
        {/* Beta Launch Badge */}
        <div className="flex justify-center pt-4 sm:pt-6 pb-2 sm:pb-4 px-4 ">
          <div className="bg-[#FFF4D6] px-3 sm:px-4 py-2 rounded-full flex items-center space-x-2">
            <span className="text-[#F1AB13]">🚀</span>
            <span className="text-[#F1AB13] text-xs sm:text-sm font-medium">Beta Launch</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="bg-dot-grid">
          <div className="text-center px-4 sm:px-6 pb-4 sm:pb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#2D2D2D] leading-tight mb-4 sm:mb-6">
              India's First{" "}
              <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
                Team-Based
              </span>
              <br />
              Freelancing Platform
            </h1>
            <p className="text-lg sm:text-xl text-[#F1AB13] font-medium">Built for Collaboration, Not Just Gigs.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center mb-6 sm:mb-8 px-4">
            <div className="flex rounded-lg border border-yellow-600 bg-gray-100 p-[2px]">
              <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
                <Button
                  onClick={() => setActiveTab("hire")}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium ${
                    activeTab === "hire"
                      ? "bg-[#2D2D2D] text-white hover:bg-[#2D2D2D] hover:text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                  }`}
                  asChild
                >
                  <span>
                    <Rocket
                      className={`w-4 h-4 mr-2 text-yellow-400 ${
                        activeTab === "hire" ? "text-yellow-400" : "text-gray-400"
                      }`}
                    />
                    Hire Talent
                  </span>
                </Button>
              </Link>

              <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
                <Button
                  onClick={() => setActiveTab("find")}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    activeTab === "find"
                      ? "bg-[#2D2D2D] text-white hover:bg-[#2D2D2D] hover:text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                  }`}
                  asChild
                >
                  <span>Find Tasks</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section with Floating Cards */}
        <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] px-4 sm:px-6 ">
          {/* Background Yellow Circle */}
          <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] -z-10">
            <Image
              src="/ellipse-30.png"
              alt="Background circle"
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Ved Sharma Card - Top Left */}
          <div className="absolute top-0 sm:-top-18 sm:left-[15%] left-[0%] w-40 sm:w-70 z-10">
            <Image
              src="/ved-sharma-card.png"
              alt="Ved Sharma - Front End Developer"
              width={208}
              height={80}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
            <div className="absolute bottom-12 sm:bottom-21 left-4 sm:left-10 w-12 h-12 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-[#F1AB13]">
              <Image
                src="/ved-sharma.jpg"
                alt="ved sharma"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form Team Card - Top Center */}
          <div className="absolute sm:top-4 top-10 center w-30 sm:w-52 z-10">
            <Image
              src="/Frame.png"
              alt="Team Card"
              width={208}
              height={80}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
            <div className="absolute bottom-12 bottom-12 sm:-bottom-13 sm:-right-50 -right-28 w-30 h-12 sm:w-50 sm:h-50 overflow-hidden ">
              <Image src="/Vector.png" alt="arrow" width={1000} height={1000} className="object-cover" />
            </div>
            <div className="absolute bottom-8 sm:-bottom-10 sm:-left-50 -left-16 w-20 h-12 sm:w-50 sm:h-50 overflow-hidden ">
              <Image src="/Vector1.png" alt="arrow" width={1000} height={1000} className="object-cover" />
            </div>
          </div>

          {/* Jiya Gupta Card - Top Right */}
          <div className="absolute top-0 right-[0%] sm:-top-18 sm:right-[15%] w-40 sm:w-68 z-10">
            <Image
              src="/jiya-gupta-card.png"
              alt="Jiya Gupta - Graphic Designer"
              width={208}
              height={80}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
            <div className="absolute bottom-12 sm:bottom-22 right-8 w-12 h-12 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-[#F1AB13]">
              <Image
                src="/jiya-gupta.jpg"
                alt="Jiya Gupta"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Central Hero Image */}
          <div className="relative z-0">
            <Image
              src="/hero-person.png"
              alt="Person with laptop on beanbag"
              width={320}
              height={320}
              className="w-[300px] h-[300px] sm:w-[700px] sm:h-[700px] object-contain mx-auto"
            />
          </div>

          {/* Rahul Shetty Card - Bottom Left */}
          <div className="absolute top-20 left-0 sm:top-36 sm:left-[18%] w-40 sm:w-65 z-30">
            <Image
              src="/rahul-shetty-card.png"
              alt="Rahul Shetty - UI/UX Designer"
              width={208}
              height={100}
              className="w-full h-auto object-contain drop-shadow-xl z-30"
            />
          </div>

          {/* Total Earnings Card - Right */}
          <div className="absolute top-20 -right-1 sm:top-1/4 sm:right-[18%] w-44 sm:w-70 z-30">
            <Image
              src="/earnings-card.png"
              alt="Total Earnings ₹3,00,000"
              width={240}
              height={160}
              className="w-full h-auto object-contain drop-shadow-xl z-30"
            />
            <div className="absolute top-15 right-2 sm:right-5 w-12 h-12 sm:w-18 sm:h-18 sm:top-23 rounded-full overflow-hidden border-2 border-[#F1AB13] z-30">
              <Image
                src="/asian-man.png"
                alt="asian man"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Escrow Payment Card - Bottom Left */}
          <div className="absolute bottom-0 left-4 sm:bottom-16 sm:left-[17%] w-44 sm:w-70 z-30">
            <Image
              src="/escrow-payment-card.png"
              alt="Escrow Payment - Safe & Secured Protection"
              width={224}
              height={60}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
            <div className="absolute -top-9 left-1 w-12 h-12 sm:w-18 sm:-top-20 sm:h-18 rounded-full bg-blue-400 overflow-hidden border-2 border-[#F1AB13] z-30">
              <Image
                src="/student-woman.png"
                alt="student"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* New Task Alert - Bottom Right */}
          <div className="absolute bottom-0 right-4 sm:right-[20%] w-40 sm:w-70 z-30">
            <Image
              src="/new-task-alert.png"
              alt="New Task Alert - Build website for D2C brand ₹30,000"
              width={208}
              height={80}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Dotted connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8">
                <circle cx="4" cy="4" r="1" fill="#F1AB13" opacity="0.5" />
              </pattern>
            </defs>
            <path d="M 200 150 Q 350 200 500 250" stroke="url(#dots)" strokeWidth="2" fill="none" />
            <path d="M 600 150 Q 450 200 300 250" stroke="url(#dots)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Statistics Section */}
        <div className="w-full px-4 sm:px-10 lg:px-20 mt-10">
          <div className="bg-gradient-to-r from-[#FEEEAC] via-[#FDF5D3] to-[#E9D1FF]/70 rounded-[14px] border border-[#F4DE8F] shadow-[0_4px_30px_rgba(0,0,0,0.05)] px-6 sm:px-10 py-2 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Left section: Image + text */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <Image
                src="/team-group.png"
                alt="Group"
                width={100}
                height={100}
                className="w-[150px] h-[120px] object-contain translate-y-4"
              />
              <div className="text-[#2D2D2D] ml-6">
                <p className="text-[16px] sm:text-[18px] font-medium leading-tight">
                  India's Freelance
                  <br />
                  Workforce Is
                  <br />
                  Expected to Cross
                </p>
              </div>
            </div>

            {/* Middle section: Stats */}
            <div className="text-center px-12 border-l border-r border-[#D8CBA0]">
              <h2 className="text-[32px] font-bold text-[#1E1E1E] leading-none">35 Million</h2>
              <p className="text-[14px] text-[#1E1E1E]">by 2027 —</p>
            </div>

            {/* Right section: Quote + Button */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 w-full lg:w-auto">
              <div className="text-[#1E1E1E] sm:text-left text-center">
                <p className="text-[14px] sm:text-[16px] leading-snug max-w-xs">
                  But, those who <span className="font-bold">TEAM</span> up will lead the next wave of innovation.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-[2px] shadow-md">
                <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
                  <Button
                    className="bg-[#FFD600] hover:bg-[#FFC400] text-black text-[14px] font-semibold px-5 py-2 rounded-[10px]"
                    asChild
                  >
                    <span>
                      <span className="mr-2 w-4 h-4 flex items-center justify-center border border-black rounded-full text-[14px] font-bold leading-[1rem]">
                        {" "}
                        +
                      </span>{" "}
                      Explore TEAMS
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

       {/* How HYVE Works Section */}
        <div className="relative py-12 md:py-20 bg-gray-50 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-20 md:h-20 opacity-40">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 transform rotate-12"></div>
          </div>
          <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-20 md:h-20 opacity-40">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 transform -rotate-12"></div>
          </div>
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-4 md:mb-6">
              How exactly <span className="text-[#F1AB13] font-bold">HYVE</span> works
            </h2>
            <p className="mx-auto max-w-[700px] text-base md:text-lg text-gray-600 leading-relaxed">
              Our Platform makes it easy to find your perfect Team and manage your projects from start to finish
            </p>
          </div>
          {/* Steps Container */}
          <div className="max-w-6xl mx-auto px-4 relative">
            {/* Desktop Vertical Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#F1AB13] opacity-80"></div>
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* Step 1: Post a Project */}
              <div className="relative">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F1AB13] rounded-full flex items-center justify-center shadow-lg">
                      <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    {/* Content */}
                    <div className="max-w-md">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                        <span className="text-[#F1AB13] mr-2">1.</span>Post a Project
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                        Describe your project, set your budget, and specify the skills you need.
                      </p>
                    </div>
                    {/* Visual */}
                    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
                      <Image
                        src="/ellipse-28-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <Image
                        src="/ellipse-30-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -bottom-20 -right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <div className="relative z-10 w-72 md:w-80 bg-white/30 rounded-xl shadow-xl p-4 md:p-5 border border-[#F1AB13] backdrop-blur-lg">
                        <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3 text-gray-800">Project Details</h3>
                        <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed">
                          Designing a Logo and website for your Fashion Apparel Brand
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                          <Badge className="bg-blue-100 text-blue-700 text-xs font-medium px-2 md:px-3 py-1">
                            UI/UX Designer
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 md:px-3 py-1">
                            Logo Designer
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm">
                          <div>
                            <p className="text-gray-500 text-xs mb-1">Timeline</p>
                            <p className="font-semibold text-gray-800">20th July-30th Aug</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500 text-xs mb-1">Estimated Cost</p>
                            <p className="font-bold text-base md:text-lg text-gray-800">₹ 30,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center">
                  {/* Left Side - Visual */}
                  <div className="w-1/2 flex justify-center pr-8">
                    <div className="relative w-full h-[400px] flex items-center justify-center">
                      <Image
                        src="/ellipse-28-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <Image
                        src="/ellipse-30-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -bottom-20 -right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <div className="relative z-10 w-92 bg-white/30 rounded-xl shadow-xl p-5 border border-[#F1AB13] backdrop-blur-lg">
                        <h3 className="font-bold text-base mb-3 text-gray-800">Project Details</h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          Designing a Logo and website for your Fashion Apparel Brand
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1">
                            UI/UX Designer
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1">
                            Logo Designer
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div>
                            <p className="text-gray-500 text-xs mb-1">Timeline</p>
                            <p className="font-semibold text-gray-800">20th July-30th Aug</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500 text-xs mb-1">Estimated Cost</p>
                            <p className="font-bold text-lg text-gray-800">₹ 30,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Center Line with Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-14 h-14 bg-[#F1AB13] rounded-full flex items-center justify-center shadow-lg">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  {/* Right Side - Content */}
                  <div className="w-1/2 pl-16">
                    <div className="max-w-md">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        <span className="text-[#F1AB13] mr-2">1.</span>Post a Project
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Describe your project, set your budget, and specify the skills you need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 2: Get Matched */}
              <div className="relative">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F1AB13] rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    {/* Content */}
                    <div className="max-w-md">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                        <span className="text-[#F1AB13] mr-2">2.</span>Get Matched
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                        We match you with vetted <span className="font-semibold">Freelance Teams</span> or{" "}
                        <span className="font-semibold">Skilled individuals</span> that fits your requirements.
                      </p>
                    </div>
                    {/* Visual */}
                    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
                      <Image
                        src="/ellipse-28-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <Image
                        src="/ellipse-30-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -bottom-20 -right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <div className="relative z-10 w-72 md:w-80 bg-white/30 rounded-xl shadow-xl p-4 md:p-5 border border-[#F1AB13] backdrop-blur-lg">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white">
                              <Image
                                src="/ved-sharma.jpg"
                                alt="Team member"
                                width={36}
                                height={36}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white">
                              <Image
                                src="/jiya-gupta.jpg"
                                alt="Team member"
                                width={36}
                                height={36}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white">
                              <Image
                                src="/asian-man.png"
                                alt="Team member"
                                width={36}
                                height={36}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-xs md:text-sm font-semibold text-gray-800">3 Matches found</p>
                            <p className="text-xs text-gray-500">Based on your requirements</p>
                          </div>
                        </div>
                        <h3 className="font-bold text-sm md:text-base mb-4 text-gray-800">Team ALPHA</h3>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Completed Projects</p>
                            <p className="font-semibold text-gray-800">15/22</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500 mb-1">Rating</p>
                            <div className="flex items-center">
                              <span className="font-bold text-gray-800">4.9</span>
                              <span className="text-[#F1AB13] ml-1 text-sm">⭐</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop Layout - Swapped for Step 2 */}
                <div className="hidden lg:flex items-center">
                  {/* Right Side - Content (now on left) */}
                  <div className="w-1/2 pr-16 text-right">
                    <div className="max-w-md ml-auto">
                      {" "}
                      {/* Use ml-auto to push content to the right within its half-width */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        <span className="text-[#F1AB13] mr-2">2.</span>Get Matched
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We match you with vetted <span className="font-semibold">Freelance Teams</span> or{" "}
                        <span className="font-semibold">Skilled individuals</span> that fits your requirements.
                      </p>
                    </div>
                  </div>
                  {/* Center Line with Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-14 h-14 bg-[#F1AB13] rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  {/* Left Side - Visual (now on right) */}
                  <div className="w-1/2 flex justify-center pl-8">
                    <div className="relative w-full h-[400px] flex items-center justify-center">
                      <Image
                        src="/ellipse-28-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <Image
                        src="/ellipse-30-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -bottom-20 -right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <div className="relative z-10 w-92 bg-white/30 rounded-xl shadow-xl p-5 border border-[#F1AB13] backdrop-blur-lg">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex -space-x-2">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white">
                              <Image
                                src="/ved-sharma.jpg"
                                alt="Team member"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white">
                              <Image
                                src="/jiya-gupta.jpg"
                                alt="Team member"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white">
                              <Image
                                src="/asian-man.png"
                                alt="Team member"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">3 Matches found</p>
                            <p className="text-xs text-gray-500">Based on your requirements</p>
                          </div>
                        </div>
                        <h3 className="font-bold text-base mb-4 text-gray-800">Team ALPHA</h3>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Completed Projects</p>
                            <p className="font-semibold text-gray-800">15/22</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500 mb-1">Rating</p>
                            <div className="flex items-center">
                              <span className="font-bold text-gray-800">4.9</span>
                              <span className="text-[#F1AB13] ml-1 text-sm">⭐</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 3: Collaborate */}
              <div className="relative">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F1AB13] rounded-full flex items-center justify-center shadow-lg">
                      <Handshake className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    {/* Content */}
                    <div className="max-w-md">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                        <span className="text-[#F1AB13] mr-2">3.</span>Collaborate
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                        Work together seamlessly with built-in communication tools and project management features.
                      </p>
                    </div>
                    {/* Visual */}
                    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
                      <Image
                        src="/ellipse-28-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <Image
                        src="/ellipse-30-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -bottom-20 -right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <div className="relative z-10 w-72 md:w-80 bg-white/30 rounded-xl shadow-xl p-4 md:p-5 border border-[#F1AB13] backdrop-blur-lg">
                        <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3 text-gray-800">Project Details</h3>
                        <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed">
                          Designing a Logo and website for your Fashion Apparel Brand
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                          <Badge className="bg-blue-100 text-blue-700 text-xs font-medium px-2 md:px-3 py-1">
                            UI/UX Designer
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 md:px-3 py-1">
                            Logo Designer
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm">
                          <div>
                            <p className="text-gray-500 text-xs mb-1">Timeline</p>
                            <p className="font-semibold text-gray-800">20th July-30th Aug</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500 text-xs mb-1">Estimated Cost</p>
                            <p className="font-bold text-base md:text-lg text-gray-800">₹ 30,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center">
                  {/* Left Side - Visual */}
                  <div className="w-1/2 flex justify-center pr-8">
                    <div className="relative w-full h-[400px] flex items-center justify-center">
                      <Image
                        src="/ellipse-28-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <Image
                        src="/ellipse-30-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -bottom-20 -right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <div className="relative z-10 w-92 bg-white/30 rounded-xl shadow-xl p-5 border border-[#F1AB13] backdrop-blur-lg">
                        <h3 className="font-bold text-base mb-3 text-gray-800">Project Details</h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          Designing a Logo and website for your Fashion Apparel Brand
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1">
                            UI/UX Designer
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1">
                            Logo Designer
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div>
                            <p className="text-gray-500 text-xs mb-1">Timeline</p>
                            <p className="font-semibold text-gray-800">20th July-30th Aug</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500 text-xs mb-1">Estimated Cost</p>
                            <p className="font-bold text-lg text-gray-800">₹ 30,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Center Line with Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F1AB13] rounded-full flex items-center justify-center shadow-lg">
                      <Handshake className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  {/* Right Side - Content */}
                  <div className="w-1/2 pl-16">
                    <div className="max-w-md">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        <span className="text-[#F1AB13] mr-2">3.</span>Collaborate
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Work together seamlessly with built-in communication tools and project management features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 4: Pay Securely */}
              <div className="relative">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F1AB13] rounded-full flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    {/* Content */}
                    <div className="max-w-md">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                        <span className="text-[#F1AB13] mr-2">4.</span>Pay Securely
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                        Release payments safely through our escrow system. Pay only when you're satisfied with the work.
                      </p>
                    </div>
                    {/* Visual */}
                    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
                      <Image
                        src="/ellipse-28-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <Image
                        src="/ellipse-30-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -bottom-20 -right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <div className="relative z-10 w-72 md:w-80 bg-white/30 rounded-xl shadow-xl p-4 md:p-5 border border-[#F1AB13] backdrop-blur-lg">
                        <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3 text-gray-800">Project Details</h3>
                        <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed">
                          Designing a Logo and website for your Fashion Apparel Brand
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                          <Badge className="bg-blue-100 text-blue-700 text-xs font-medium px-2 md:px-3 py-1">
                            UI/UX Designer
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 md:px-3 py-1">
                            Logo Designer
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm">
                          <div>
                            <p className="text-gray-500 text-xs mb-1">Timeline</p>
                            <p className="font-semibold text-gray-800">20th July-30th Aug</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500 text-xs mb-1">Estimated Cost</p>
                            <p className="font-bold text-base md:text-lg text-gray-800">₹ 30,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop Layout - Swapped for Step 4 */}
                <div className="hidden lg:flex items-center">
                  {/* Right Side - Content (now on left) */}
                  <div className="w-1/2 pr-16 text-right">
                    <div className="max-w-md ml-auto">
                      {" "}
                      {/* Use ml-auto to push content to the right within its half-width */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        <span className="text-[#F1AB13] mr-2">4.</span>Pay Securely
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Release payments safely through our escrow system. Pay only when you're satisfied with the work.
                      </p>
                    </div>
                  </div>
                  {/* Center Line with Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-14 h-14 bg-[#F1AB13] rounded-full flex items-center justify-center shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  {/* Left Side - Visual (now on right) */}
                  <div className="w-1/2 flex justify-center pl-8">
                    <div className="relative w-full h-[400px] flex items-center justify-center">
                      <Image
                        src="/ellipse-28-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <Image
                        src="/ellipse-30-1.png"
                        alt="Background ellipse"
                        width={250}
                        height={250}
                        className="absolute -bottom-20 -right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-contain opacity-80 blur-lg z-0"
                      />
                      <div className="relative z-10 w-92 bg-white/30 rounded-xl shadow-xl p-5 border border-[#F1AB13] backdrop-blur-lg">
                        <h3 className="font-bold text-base mb-3 text-gray-800">Project Details</h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          Designing a Logo and website for your Fashion Apparel Brand
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1">
                            UI/UX Designer
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1">
                            Logo Designer
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div>
                            <p className="text-gray-500 text-xs mb-1">Timeline</p>
                            <p className="font-semibold text-gray-800">20th July-30th Aug</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500 text-xs mb-1">Estimated Cost</p>
                            <p className="font-bold text-lg text-gray-800">₹ 30,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Professional Toggle Section */}
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Professional Toggle Switch */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-full p-1 inline-flex shadow-sm border border-gray-200">
                <button
                  onClick={() => setActiveSection("freelancer")}
                  className={`px-8 py-3 rounded-full font-semibold cursor-pointer text-sm transition-all duration-300 ${
                    activeSection === "freelancer"
                      ? "bg-[#F1AB13] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  For Freelancers
                </button>
                <button
                  onClick={() => setActiveSection("company")}
                  className={`px-8 py-3 rounded-full font-semibold cursor-pointer text-sm transition-all duration-300 ${
                    activeSection === "company"
                      ? "bg-[#F1AB13] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  For Companies
                </button>
              </div>
            </div>

            {/* Content Sections */}
            <div className="transition-all duration-500 ease-in-out">
              {/* Freelancer Section */}
              {activeSection === "freelancer" && (
                <section id="for-freelancers" className="animate-fadeIn">
                  <div className="container mx-auto">
                    {/* Section Heading */}
                    <div className="text-center mb-16">
                      <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] leading-tight mb-6">
                        Grow{" "}
                        <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
                          Together.
                        </span>
                      </h1>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        HYVE empowers your career growth and connects you with high-value opportunities, beyond just finding gigs.
                      </p>
                    </div>

                    {/* Features + Testimonial */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-20">
                      {/* Feature List */}
                      <div className="space-y-6">
                        {[
                          {
                            icon: <Users className="w-6 h-6 text-white" />,
                            title: "Build or Join Teams",
                            desc: "Collaborate with trusted peers on high-value, multi-skill projects.",
                          },
                          {
                            icon: <Rocket className="w-6 h-6 text-white" />,
                            title: "Work on Large Projects",
                            desc: "Access and lead complex, impactful projects beyond solo gigs.",
                          },
                          {
                            icon: <Briefcase className="w-6 h-6 text-white" />,
                            title: "Showcase Real Work",
                            desc: "Build a powerful portfolio with meaningful project contributions.",
                          },
                          {
                            icon: <MessageCircle className="w-6 h-6 text-white" />,
                            title: "Stay Connected",
                            desc: "Discover consistent opportunities and expand your professional network.",
                          },
                        ].map(({ icon, title, desc }, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                          >
                            <div className="p-3 rounded-full bg-gradient-to-br from-[#F1AB13] to-[#FFD700] shadow-md flex-shrink-0">
                              {icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">{title}</h3>
                              <p className="text-gray-600 leading-relaxed">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial Card */}
                      <div className="bg-gradient-to-br from-[#FFF4D6] to-[#FDF5D3] p-8 rounded-3xl shadow-lg border border-yellow-200">
                        <div className="mb-6">
                          <svg className="w-8 h-8 text-[#F1AB13] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                          </svg>
                        </div>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                          HYVE helped me get into high-value team projects — way beyond solo gigs. The collaboration tools are fantastic!
                          HYVE helped me get into high-value team projects — way beyond solo gigs. The collaboration tools are fantastic!
                          HYVE helped me get into high-value team projects — way beyond solo gigs. The collaboration tools are fantastic!
                          HYVE helped me get into high-value team projects — way beyond solo gigs. The collaboration tools are fantastic!
                          HYVE helped me get into high-value team projects — way beyond solo gigs. The collaboration tools are fantastic!
                        </p>
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F1AB13] to-[#FFD700] flex items-center justify-center text-white font-bold text-xl mr-4">
                            A
                          </div>
                          <div>
                            <p className="font-bold text-lg text-[#2D2D2D]">Aditi Sharma</p>
                            <p className="text-gray-500">Freelance UI/UX Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Active Teams & Skills */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                      {/* Active Teams */}
                      <div className="bg-white shadow-lg rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">Your Active Teams</h3>
                        <div className="space-y-4">
                          {[
                            {
                              title: "E-commerce App",
                              role: "UI/UX Team",
                              color: "green",
                              amount: "₹45,000",
                            },
                            {
                              title: "SaaS Dashboard",
                              role: "Full Stack Team",
                              color: "blue",
                              amount: "₹80,000",
                            },
                          ].map((team, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                            >
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full bg-${team.color}-500 mr-3 flex items-center justify-center`}>
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium text-[#2D2D2D]">{team.title}</p>
                                  <p className="text-sm text-gray-500">{team.role}</p>
                                </div>
                              </div>
                              <p className={`font-semibold text-${team.color}-600 text-lg`}>{team.amount}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="bg-white shadow-lg rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">Your Skills</h3>
                        <div className="flex flex-wrap gap-3">
                          {["UI/UX Design", "Figma", "React", "User Research", "Wireframing", "Prototyping", 
                            "UI/UX Design", "Figma", "React", "User Research", "Wireframing", "Prototyping",
                            "UI/UX Design", "Figma", "React", "User Research", "Wireframing", "Prototyping",
                          ].map((skill, i) => (
                            <span
                              key={i}
                              className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
                        <Button
                          className=" bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm px-6 py-2 rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition"
                          asChild
                        >
                          <span>
                            Join as Freelancer <Sparkles className="ml-3 w-5 h-5" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>
              )}

              {/* Company Section */}
              {activeSection === "company" && (
                <section id="for-companies" className="animate-fadeIn">
                  <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        No More Hiring Headaches.
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                          Just Plug, Play, and Build.
                        </span>
                      </h1>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        HYVE is your shortcut to fast, scalable talent.
                      </p>
                    </div>

                    {/* Feature & Projects */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-16">
                      {/* Features / Benefits */}
                      <div className="space-y-6">
                        {[
                          {
                            title: "Hire Curated Talent",
                            desc: "Pre-vetted freelancers & agile teams.",
                            icon: <Search className="w-6 h-6 text-white" />,
                          },
                          {
                            title: "Streamlined Communication",
                            desc: "Chat, deliverables, and payments in one place.",
                            icon: <MessageCircle className="w-6 h-6 text-white" />,
                          },
                          {
                            title: "Focus on Execution",
                            desc: "Onboard instantly—skip hiring delays.",
                            icon: <Brain className="w-6 h-6 text-white" />,
                          },
                          {
                            title: "Transparent Tracking",
                            desc: "Milestone-based pricing & updates.",
                            icon: <BarChart className="w-6 h-6 text-white" />,
                          },
                        ].map(({ icon, title, desc }, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                          >
                            <div className="p-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 shadow-md flex-shrink-0">
                              {icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                              <p className="text-gray-600 leading-relaxed">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Active Projects Panel */}
                      <div className="bg-white shadow-lg rounded-3xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Projects</h2>
                        <div className="space-y-6">
                          {[
                            {
                              title: "Mobile App MVP",
                              status: "In Progress",
                              statusColor: "green",
                              members: 4,
                              progress: 75,
                              amount: "₹1,20,000",
                            },
                            {
                              title: "Website Redesign",
                              status: "Planning",
                              statusColor: "blue",
                              members: 2,
                              progress: 0,
                              amount: "₹60,000",
                            },
                          ].map((project, idx) => (
                            <div
                              key={idx}
                              className="rounded-2xl bg-gray-50 p-6 border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                            >
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                                <span
                                  className={`text-xs px-3 py-1 rounded-full bg-${project.statusColor}-100 text-${project.statusColor}-700 font-medium`}
                                >
                                  {project.status}
                                </span>
                              </div>

                              <div className="flex items-center gap-3 mb-4">
                                <div className="flex -space-x-2">
                                  {Array.from({ length: project.members }).map((_, i) => (
                                    <div
                                      key={i}
                                      className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[#F1AB13] to-[#FFD700] flex items-center justify-center text-white text-xs font-bold"
                                    >
                                      {String.fromCharCode(65 + i)}
                                    </div>
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {project.members} team member{project.members > 1 && "s"}
                                </span>
                              </div>

                              {project.progress > 0 && (
                                <div className="mb-4">
                                  <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                                    <div
                                      className={`h-2 rounded-full bg-${project.statusColor}-500 transition-all duration-300`}
                                      style={{ width: `${project.progress}%` }}
                                    />
                                  </div>
                                  <p className="text-sm text-gray-500">Progress: {project.progress}%</p>
                                </div>
                              )}

                              <p className="text-right font-semibold text-gray-700 text-lg">{project.amount}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-500 mb-6">Ideal for startups, product teams, agencies & service-based firms.</p>
                      <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
                        <Button
                          className="bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm px-6 py-2 rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition"
                          asChild
                        >
                          <span>
                            Post a Task <Briefcase className="ml-3 w-5 h-5" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-[#F8F9FF] to-[#E8F0FF] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">Coming Soon 🚀</h2>
              <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                We're just getting started. Here's what's next on HYVE:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AI-Based Talent Matching */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFF4D6] rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-[#F1AB13]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">AI-Based Talent Matching</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Smart algorithms to find the perfect freelancer-project fit
                  </p>
                </CardContent>
              </Card>

              {/* Portfolio Builder Tools */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFF4D6] rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-[#F1AB13]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Portfolio Builder Tools</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Showcase your work with professional portfolio templates
                  </p>
                </CardContent>
              </Card>

              {/* Skill Resources & Certification */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#E8F5E8] rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Skill Resources & Certification</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Upskill with curated resources and earn verified badges
                  </p>
                </CardContent>
              </Card>

              {/* Premium Freelancer Subscriptions */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F3E8FF] rounded-lg flex items-center justify-center mb-4">
                    <Crown className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Premium Freelancer Subscriptions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Exclusive perks and priority access for pro members
                  </p>
                </CardContent>
              </Card>

              {/* Team to Agency Conversions */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFE8E8] rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Team to Agency Conversions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Scale your freelance team into a full-fledged agency
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
                <Button
                  className="bg-[#FDC10B] hover:bg-[#F1AB13] text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                  asChild
                >
                  <span>🔔 Get Notified When We Launch</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
