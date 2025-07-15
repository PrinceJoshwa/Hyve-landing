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
  Bot,
  GraduationCap,
  CheckCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import HowItWorks from "./howhyveworks"

export default function Home() {
  const [activeTab, setActiveTab] = useState("hire")
  const [activeSection, setActiveSection] = useState("freelancer") // Default to freelancer
  const teamMemberImages = ["/team1.jpg", "/team3.jpg", "/team4.jpg", "/team2.jpg", "/team5.jpg"]

  const projects = [
    {
      title: "Mobile App MVP",
      status: "In Progress",
      statusColor: "green", // Used for text/background, progress bar will use theme color
      members: 4,
      progress: 75,
      amount: "₹1,20,000",
    },
    {
      title: "Website Redesign",
      status: "Planning",
      statusColor: "blue", // Used for text/background, progress bar will use theme color
      members: 2,
      progress: 0,
      amount: "₹60,000",
    },
  ]

  const getStatusColors = (statusColor: string) => {
    switch (statusColor) {
      case "green":
        return "bg-green-100 text-green-700"
      case "blue":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

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
            <Image
              src="/check.png"
              alt="check"
              width={15}
              height={1}
              className="w-[15px] object-contain drop-shadow-xl"
            />
            <span className="text-[#F1AB13] text-xs sm:text-sm font-medium">India’s First Team-Based Freelance Platform</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="bg-dot-grid">
          <div className="text-center px-4 sm:px-6 pb-4 sm:pb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#2D2D2D] leading-tight mb-4 sm:mb-6">
              Find the{" "}
              <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
                Perfect Team
              </span>
              <br />
              in Minutes
            </h1>
            <p className="text-lg sm:text-xl text-[#F1AB13] font-medium">Built for Collaboration, Not Just Gigs.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center mb-6 sm:mb-8 px-4">
            <div className="flex rounded-lg border border-yellow-600 bg-gray-100 p-[2px]">
              <Link href="https://app.hyvefreelance.com" passHref>
                <Button
                  onClick={() => setActiveTab("hire")}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium ${activeTab === "hire"
                    ? "bg-[#2D2D2D] text-white hover:bg-[#2D2D2D] hover:text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  asChild
                >
                  <span>
                    <Rocket
                      className={`w-4 h-4 mr-2 text-yellow-400 ${activeTab === "hire" ? "text-yellow-400" : "text-gray-400"
                        }`}
                    />
                    Hire Talent
                  </span>
                </Button>
              </Link>

              <Link href="https://app.hyvefreelance.com" passHref>
                <Button
                  onClick={() => setActiveTab("find")}
                  className={`px-6 py-3 rounded-lg font-medium ${activeTab === "find"
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
          {/* <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] -z-10">
            <Image
              src="/ellipse-30-1.png"
              alt="Background circle"
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />
          </div> */}

          {/* Ved Sharma Card - Top Left */}
          <div className="float absolute top-0 sm:-top-18 sm:left-[15%] left-[0%] w-40 sm:w-70 z-10">
            <Image
              src="/ved-sharma-card.png"
              alt="Ved Sharma - Front End Developer"
              width={208}
              height={80}
              className="w-full h-auto object-contain "
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
          <div className="float absolute sm:top-4 top-10 center w-30 sm:w-52 z-10">
            <Image
              src="/Frame.png"
              alt="Team Card"
              width={208}
              height={80}
              className="w-full h-auto object-contain drop-shadow-xl cursor-pointer"
              onClick={() => {
                window.location.href = "https://app.hyvefreelance.com";
              }}
            />
            <div className="absolute bottom-12 bottom-12 sm:-bottom-13 sm:-right-50 -right-28 w-30 h-12 sm:w-50 sm:h-50 overflow-hidden ">
              <Image src="/Vector.png" alt="arrow" width={1000} height={1000} className="object-cover" />
            </div>
            <div className="absolute bottom-8 sm:-bottom-10 sm:-left-50 -left-16 w-20 h-12 sm:w-50 sm:h-50 overflow-hidden ">
              <Image src="/Vector1.png" alt="arrow" width={1000} height={1000} className="object-cover" />
            </div>
          </div>

          {/* Jiya Gupta Card - Top Right */}
          <div className=" float absolute top-0 right-[0%] sm:-top-18 sm:right-[15%] w-40 sm:w-68 z-10 ">
            <Image
              src="/jiya-gupta-card.png"
              alt="Jiya Gupta - Graphic Designer"
              width={208}
              height={80}
              className="w-full h-auto object-contain "
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
          {/* <div
            className="relative z-0 top-5 flex items-center justify-center rounded-full drop-shadow-[0_0_25px_rgba(253,216,53,1)] bg-yellow-rings"
          >
            <Image
              src="/hyve-hero-img.png"
              alt="Person with laptop on beanbag"
              width={320}
              height={320}
              className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] object-contain"
            />
          </div> */}

          <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] overflow-visible rounded-full bg-yellow-rings">
            <Image
              src="/hyvehero.png"
              alt="Person with laptop on beanbag"
              width={360}
              height={360}
              className="absolute inset-0 w-full h-full object-contain scale-125 top-3 -left-[7%]"
            />
          </div>



          {/* Rahul Shetty Card - Bottom Left */}
          <div className="float absolute top-20 left-0 sm:top-20 sm:left-[18%] w-40 sm:w-65 z-30 border-[#F1AB13] ">
            <Image
              src="/rahul-shetty-card.png"
              alt="Rahul Shetty - UI/UX Designer"
              width={208}
              height={100}
              className="w-full h-auto object-contain z-30"
            />
          </div>

          {/* Total Earnings Card - Right */}
          <div className="float absolute top-20 -right-1 sm:top-1/4 sm:right-[18%] w-44 sm:w-70 z-30 border-[#F1AB13] ">
            <Image
              src="/earnings-card.png"
              alt="Total Earnings ₹3,00,000"
              width={240}
              height={160}
              className="w-full h-auto object-contain z-30 "
            />
            <div className="absolute top-15 right-2 sm:right-5 w-12 h-12 sm:w-18 sm:h-18 sm:top-23 rounded-full overflow-hidden border-2 border-[#F1AB13] z-30">
              <Image
                src="/asian-man.png"
                alt="asian man"
                width={48}
                height={48}
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* Escrow Payment Card - Bottom Left */}
          <div className="float absolute bottom-0 left-4 sm:bottom-16 sm:left-[17%] w-44 sm:w-70 z-30 border-[#F1AB13] ">
            <Image
              src="/escrow-payment-card.png"
              alt="Escrow Payment - Safe & Secured Protection"
              width={224}
              height={60}
              className="w-full h-auto object-contain"
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
          <div className="float absolute bottom-0 right-4 sm:right-[24%] w-40 sm:w-70 z-30 border-[#F1AB13] ">
            <Image
              src="/new-task-alert.png"
              alt="New Task Alert - Build website for D2C brand ₹30,000"
              width={208}
              height={80}
              className="w-full h-auto object-contain"
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
            <div className="flex items-center gap-4 w-full lg:w-auto border-[#F1AB13] backdrop-blur-lg shadow-[0_0_15px_3px_rgba(241,171,19,0.5)">
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
                <Link href="https://app.hyvefreelance.com" passHref>
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
        <HowItWorks />


        {/* Professional Toggle Section */}
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Professional Toggle Switch */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-full p-1 inline-flex shadow-sm border border-gray-200">
                <button
                  onClick={() => setActiveSection("freelancer")}
                  className={`px-8 py-3 rounded-full font-semibold cursor-pointer text-sm transition-all duration-300 ${activeSection === "freelancer"
                    ? "bg-[#F1AB13] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  For Freelancers
                </button>
                <button
                  onClick={() => setActiveSection("company")}
                  className={`px-8 py-3 rounded-full font-semibold cursor-pointer text-sm transition-all duration-300 ${activeSection === "company"
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


                      {/* Testimonial Card - Aditi Sharma */}
                      <div className="space-y-8">
                        {/* Aditi's Profile Card */}
                        <Card className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-6 border border-gray-200">


                          {/* Header */}
                          <div className="flex items-center justify-between mb-0">
                            <div className="flex items-center">
                              <Avatar className="w-16 h-16 mr-4">
                                <AvatarImage src="/ved-sharma.jpg" alt="Ved Sharma" />
                                <AvatarFallback>VS</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="font-bold text-2xl text-[#2D2D2D]">Ved Sharma</p>
                                  <CheckCheck className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                </div>
                                <p className="text-sm text-gray-500">Freelancer Web Developer</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-400">Rating</p>
                              <p className="font-bold text-yellow-500 text-lg">4.0 ⭐</p>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            <span className="flex items-center gap-1 bg-[#E6F7ED] text-[#34A853] px-4 py-2 rounded-full text-sm font-medium">
                              <span className="w-2 h-2 bg-[#34A853] rounded-full" />
                              Front End Developer
                            </span>
                            <span className="flex items-center gap-1 bg-[#E8F0FE] text-[#4285F4] px-4 py-2 rounded-full text-sm font-medium">
                              <span className="w-2 h-2 bg-[#4285F4] rounded-full" />
                              UI/UX Designer
                            </span>
                          </div>

                          {/* Main Content - Two Columns */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column: Active Team */}
                            <div className="bg-gray-50 p-5 rounded-xl">
                              <p className="text-gray-600 text-base mb-2 font-semibold">Active Team</p>
                              <p className="text-blue-600 font-bold text-2xl mb-3">Team ALPHA</p>
                              <div className="flex -space-x-3 mb-4">
                                <Avatar className="w-10 h-10 border-2 border-white">
                                  <AvatarImage src="/Tobe.png" alt="Team Member 1" />
                                  <AvatarFallback>TM1</AvatarFallback>
                                </Avatar>
                                <Avatar className="w-10 h-10 border-2 border-white">
                                  <AvatarImage src="/jiya-gupta.jpg" alt="Team Member 2" />
                                  <AvatarFallback>TM2</AvatarFallback>
                                </Avatar>
                                <Avatar className="w-10 h-10 border-2 border-white">
                                  <AvatarImage src="/asian-man.png" alt="Team Member 3" />
                                  <AvatarFallback>TM3</AvatarFallback>
                                </Avatar>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                <span>Completed Projects:</span>
                                <strong>10/15</strong>
                              </div>
                              <Progress value={(10 / 15) * 100} className="h-2 bg-gray-200 [&>*]:bg-[#34A853]" />
                              <p className="text-gray-700 italic text-sm mt-18 mb-4">"Elevate Your Freelance Career"</p>
                              <Button
                                className="bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm sm:text-base px-6 py-2 rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition">
                                Join Now
                              </Button>
                            </div>

                            {/* Right Column: Milestone Summary & Team Project Value */}
                            <div className="space-y-6">
                              {/* Milestone Summary */}
                              <div className="bg-gray-50 p-5 rounded-xl">
                                <p className="text-gray-600 text-base mb-2 font-semibold">Milestone Summary</p>
                                <div className="flex items-center gap-2 mb-3">
                                  <span className="flex items-center gap-1 bg-[#E6F7ED] text-[#34A853] px-3 py-1 rounded-full text-xs font-medium">
                                    <span className="w-1.5 h-1.5 bg-[#34A853] rounded-full" />
                                    Released
                                  </span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-lg font-semibold text-[#2D2D2D]">Website Development</p>
                                  <p className="text-lg font-bold text-[#2D2D2D]">₹15,000</p>
                                </div>
                              </div>

                              {/* Team Project Value Card */}
                              <div className="bg-gradient-to-br from-[#FFF4D6] to-[#FDF5D3] rounded-xl p-5">
                                <p className="text-gray-600 text-base mb-2 font-semibold">Team Project Value</p>
                                <div className="flex items-center gap-2 mb-3">
                                  <span className="flex items-center gap-1 bg-[#FFF3E0] text-[#FF9800] px-3 py-1 rounded-full text-xs font-medium">
                                    <span className="w-1.5 h-1.5 bg-[#FF9800] rounded-full" />
                                    Upcoming
                                  </span>
                                  <p className="text-sm text-gray-500">₹20,000</p>
                                </div>
                                <div className="flex items-center gap-3 mb-1">
                                  <span className="bg-[#34A853] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                                    ₹
                                  </span>
                                  <p className="text-4xl font-bold text-[#2D2D2D]">1,50,000</p>
                                </div>
                                <p className="text-sm text-gray-500">5 weeks collaboration</p>
                              </div>
                            </div>
                          </div>
                        </Card>
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

                      {/* CTA instead of Skills */}
                      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">Ready to Elevate Your Freelance Career?</h3>
                        <p className="text-gray-600 mb-6 max-w-md">
                          Join HYVE today and collaborate with top-tier teams on impactful projects.
                        </p>
                        <Link href="https://app.hyvefreelance.com" passHref>
                          <Button
                            className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] text-[#2D2D2D] px-8 py-3 rounded-full text-base font-semibold shadow-md hover:from-[#FFD700] hover:to-[#F1AB13] transition-all duration-300 transform hover:-translate-y-1"
                            asChild
                          >
                            <span>
                              Join Now <Sparkles className="ml-2 w-4 h-4" />
                            </span>
                          </Button>
                        </Link>
                      </div>
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
                        <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
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
                            <div className="p-3 rounded-full bg-gradient-to-br from-[#F1AB13] to-[#FFD700] shadow-md flex-shrink-0">
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
                      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-3xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Projects</h2>
                        <div className="space-y-6">
                          {projects.map((project, idx) => (
                            <div
                              key={idx}
                              className="rounded-2xl bg-gray-50 p-6 border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                            >
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColors(project.statusColor)}`}>
                                  {project.status}
                                </span>
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                <div className="flex -space-x-2">
                                  {Array.from({ length: project.members }).map((_, i) => (
                                    <Avatar key={i} className="h-12 w-12 border-2 border-white">
                                      <AvatarImage src={teamMemberImages[i % teamMemberImages.length] || "/placeholder.svg"} />
                                      <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                                    </Avatar>
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {project.members} team member{project.members > 1 && "s"}
                                </span>
                              </div>
                              {project.progress > 0 && (
                                <div className="mb-4">
                                  <Progress value={project.progress} className="h-2 bg-gray-200 [&>*]:bg-[#34A853]" />
                                  <p className="text-sm text-gray-500 mt-2">Progress: {project.progress}%</p>
                                </div>
                              )}
                              <p className="text-right font-semibold text-gray-700 text-lg">{project.amount}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-500 mb-6">Ideal for startups, product teams, agencies & service-based firms.</p>
                      <Link href="https://app.hyvefreelance.com" passHref>
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

        {/*  Coming Soon Section */}
      </main>
    </div>
  )
}