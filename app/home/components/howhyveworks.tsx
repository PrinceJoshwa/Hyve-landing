"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { FileText, Users, Handshake, Shield, Building } from "lucide-react"
import { Badge } from "@/components/ui/badge" // Assuming shadcn/ui Badge

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [lineFillHeight, setLineFillHeight] = useState(0)
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const steps = [
    {
      icon: FileText,
      title: "Post a Project",
      description: "Describe your project, set your budget, and specify the skills you need.",
      visual: (
        // <div className="relative z-10 w-64 md:w-72 bg-white/30 rounded-xl shadow-xl p-3 md:p-4 border border-[#F1AB13] backdrop-blur-lg shadow-[0_0_120px_rgba(241,171,19,0.8)]">
          <div className="relative z-10 w-64 md:w-72 bg-white/30 rounded-xl p-3 md:p-4 border border-[#F1AB13] backdrop-blur-lg shadow-[0_0_15px_3px_rgba(241,171,19,0.5)]">

          <h3 className="font-bold text-xs md:text-sm mb-2 text-gray-800">Project Details</h3>
          <p className="text-xs text-gray-600 mb-2 md:mb-3 leading-relaxed">
            Designing a Logo and website for your Fashion Apparel Brand
          </p>
          <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
            <Badge className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1">UI/UX Designer</Badge>
            <Badge className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1">Logo Designer</Badge>
          </div>
          <div className="flex justify-between text-xs">
            <div>
              <p className="text-gray-500 text-xs mb-1">Timeline</p>
              <p className="font-semibold text-gray-800">20th July-30th Aug</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs mb-1">Estimated Cost</p>
              <p className="font-bold text-sm md:text-base text-gray-800">₹ 30,000</p>
            </div>
          </div>
        </div>
      ),
      // imageEllipses removed
    },
    {
      icon: Users,
      title: "Get Matched",
      description:
        "We match you with vetted <span class='font-semibold'>Freelance Teams</span> or <span class='font-semibold'>Skilled individuals</span> that fits your requirements.",
      visual: (
        // <div className="relative z-10 w-64 md:w-72 bg-white/30 rounded-xl shadow-xl p-3 md:p-4 border border-[#F1AB13] backdrop-blur-lg shadow-[0_0_120px_rgba(241,171,19,0.8)]">
          <div className="relative z-10 w-64 md:w-72 bg-white/30 rounded-xl p-3 md:p-4 border border-[#F1AB13] backdrop-blur-lg shadow-[0_0_15px_3px_rgba(241,171,19,0.5)]">
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/ved-sharma.jpg"
                  alt="Team member"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/jiya-gupta.jpg"
                  alt="Team member"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/asian-man.png"
                  alt="Team member"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">3 Matches found</p>
              <p className="text-xs text-gray-500">Based on your requirements</p>
            </div>
          </div>
          <h3 className="font-bold text-xs md:text-sm mb-3 text-gray-800">Team ALPHA</h3>
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
      ),
      // imageEllipses removed
    },
    {
      icon: Handshake,
      title: "Collaborate",
      description:
        "Work directly with you team and have the discussions on our platform with the build in Project Management tool.",
      visual: (
        // <div className="relative z-10 w-64 md:w-72 bg-white/30 rounded-xl shadow-xl p-3 md:p-4 border border-[#F1AB13] backdrop-blur-lg shadow-[0_0_120px_rgba(241,171,19,0.8)]">
         <div className="relative z-10 w-64 md:w-72 bg-white/30 rounded-xl p-3 md:p-4 border border-[#F1AB13] backdrop-blur-lg shadow-[0_0_15px_3px_rgba(241,171,19,0.5)]">
         <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
              <Building className="w-4 h-4 text-yellow-600" />
            </div>
            <p className="bg-gray-100 rounded-lg p-2 text-xs text-gray-800 max-w-[75%]">
              How is the logo designing work going along, any updates?
            </p>
          </div>
          <div className="flex items-end justify-end mb-3">
            <p className="bg-[#F1AB13] text-white rounded-lg p-2 text-xs max-w-[75%]">
              It is going great, almost finalised and completed!
            </p>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#F1AB13] ml-2 flex-shrink-0">
              <Image
                src="/asian-man.png"
                alt="User avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
              <Building className="w-4 h-4 text-yellow-600" />
            </div>
            <p className="bg-gray-100 rounded-lg p-2 text-xs text-gray-800 max-w-[75%]">
              Could you share me the files.
            </p>
          </div>
          <div className="flex items-end justify-end">
            <p className="bg-[#F1AB13] text-white rounded-lg p-2 text-xs max-w-[75%]">
              Yes on my way, sharing you with the logo.
            </p>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#F1AB13] ml-2 flex-shrink-0">
              <Image
                src="/asian-man.png"
                alt="User avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
      // imageEllipses removed
    },
    {
      icon: Shield,
      title: "Pay Securely",
      description: "Only release payments when you are satisfied with the milestone deliverables.",
      visual: (
        // <div className="relative z-10 w-64 md:w-72 bg-white/30 rounded-xl shadow-xl p-3 md:p-4 border border-[#F1AB13] backdrop-blur-lg shadow-[0_0_120px_rgba(241,171,19,0.8)]">
         <div className="relative z-10 w-64 md:w-72 bg-white/30 rounded-xl p-3 md:p-4 border border-[#F1AB13] backdrop-blur-lg shadow-[0_0_15px_3px_rgba(241,171,19,0.5)]">
        <h3 className="font-bold text-sm mb-4 text-gray-800">Milestone Payment</h3>
          <p className="text-xs text-gray-600 mb-3">Summary</p>
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-gray-800">Logo Design</p>
            <div className="flex items-center">
              <Badge className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 mr-2">Released</Badge>
              <p className="font-semibold text-sm text-gray-800">₹15,000</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-800">Website Designing</p>
            <Badge className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1">Pending</Badge>
          </div>
        </div>
      ),
      // imageEllipses removed
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.scrollHeight
        const scrollY = window.scrollY
        const viewportHeight = window.innerHeight

        const scrollStart = sectionTop - viewportHeight / 2
        const scrollEnd = sectionTop + sectionHeight - viewportHeight / 2

        let progress = 0
        if (scrollY > scrollStart) {
          progress = (scrollY - scrollStart) / (scrollEnd - scrollStart)
        }
        progress = Math.max(0, Math.min(1, progress))

        setLineFillHeight(progress * 100)

        const stepHeight = sectionHeight / steps.length
        const currentStep = Math.floor(progress * steps.length)
        setActiveStepIndex(currentStep)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [steps.length])

  return (
    <div ref={sectionRef} className="relative py-12 md:py-20 bg-white overflow-hidden">
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
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200">
          {/* Dynamic fill line */}
          <div
            className="absolute top-0 left-0 w-full bg-[#F1AB13] transition-all duration-100"
            style={{ height: `${lineFillHeight}%` }}
          ></div>
        </div>

        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${idx <= activeStepIndex ? "bg-[#F1AB13]" : "bg-gray-300"}`}
                  >
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  {/* Content */}
                  <div className="max-w-md">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                      <span className="text-[#F1AB13] mr-2">{idx + 1}.</span>
                      {step.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-gray-600 leading-relaxed mb-3"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                  {/* Visual */}
                  <div className="relative w-full py-12 flex items-center justify-center">
                    {/* Ellipses removed */}
                    {step.visual}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className={`hidden lg:flex items-center ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}>
                {/* Left/Right Side - Visual */}
                <div className={`w-1/2 flex justify-center ${idx % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="relative w-full py-12 flex items-center justify-center">
                    {/* Ellipses removed */}
                    {step.visual}
                  </div>
                </div>

                {/* Center Line with Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${idx <= activeStepIndex ? "bg-[#F1AB13]" : "bg-gray-300"}`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Right/Left Side - Content */}
                <div className={`w-1/2 ${idx % 2 === 0 ? "pl-16" : "pr-16 text-right"}`}>
                  <div className={`max-w-md ${idx % 2 === 1 ? "ml-auto" : ""}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      <span className="text-[#F1AB13] mr-2">{idx + 1}.</span>
                      {step.title}
                    </h3>
                    <p
                      className="text-base text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
