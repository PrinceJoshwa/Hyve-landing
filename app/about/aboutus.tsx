"use client"

import { Rocket, Target, Heart, Users, Handshake, Sparkles, MapPin, MessageSquareText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUsPage() {
  return (
    <main className="bg-[#FFFDFB] text-[#2D2D2D] relative overflow-hidden min-h-screen">
      {/* Background Decorations */}
      <div className="absolute top-[-5%] left-[-5%] w-64 h-64 bg-[#FFF4D6]/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-72 h-72 bg-[#FFF4D6]/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[20%] right-[10%] w-48 h-48 bg-[#FFF4D6]/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center text-[#2D2D2D] mb-16 lg:mb-24">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF4D6] text-[#F1AB13] text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" /> IN Born in India, Built for India
            </span>
            <h1 className="text-5xl sm:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Born from the{" "}
              <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
                Indian Freelance Hustle
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-700">
              Built by freelancers who understand Indian challenges, HYVE aims to empower freelancers to work
              collaboratively and grow sustainably in the digital economy.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column: Our Story & Features */}
            <div className="space-y-8">
              {/* Our Story Card */}
              <Card className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Heart className="w-8 h-8 text-red-500 mr-3" /> {/* Keeping red for heart as per image */}
                    <h2 className="text-3xl font-bold text-[#2D2D2D]">Our Story</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    HYVE was born from the frustration of talented Indian freelancers working in isolation, competing
                    instead of collaborating. We saw brilliant designers, developers, and marketers struggling to find
                    consistent work and grow beyond individual gigs.
                    <br />
                    <br />
                    As freelancers ourselves, we experienced the challenges of project management, payment delays, and
                    the constant hustle for the next gig. We knew there had to be a better way.
                  </p>
                </CardContent>
              </Card>

              {/* Three Feature Sections */}
              <div className="space-y-6">
                <div className="flex items-start p-6 bg-orange-50 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2D2D2D] mb-1">Collaboration Over Competition</h3>
                    <p className="text-base text-gray-700">
                      We believe freelancers achieve more when they work together, not against each other.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-6 bg-purple-50 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mr-4 flex-shrink-0">
                    <Handshake className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2D2D2D] mb-1">Trust & Transparency</h3>
                    <p className="text-base text-gray-700">
                      Every interaction on HYVE is built on trust, fair pricing, and clear communication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-6 bg-green-50 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mr-4 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2D2D2D] mb-1">Growth & Learning</h3>
                    <p className="text-base text-gray-700">
                      We're committed to helping every freelancer and startup grow and succeed together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission & Vision Card */}
            <Card className="bg-gradient-to-br from-[#F1AB13] to-[#FFD700] rounded-3xl shadow-xl p-8 text-white flex flex-col justify-between">
              <CardContent className="p-0 space-y-10">
                {/* Our Mission Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-white mr-3" />
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed">
                    "To empower Indian freelancers through collaboration, creating sustainable careers and building the
                    future of work in India."
                  </p>
                </div>

                {/* Our Vision Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <Rocket className="w-8 h-8 text-white mr-3" />
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed">
                    A future where freelancers thrive together, not alone. Where teams form naturally, projects flow
                    seamlessly, and success is shared by all.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Section */}
          <div className="mt-20 lg:mt-28 bg-[#FFF4D6] rounded-3xl p-8 sm:p-12 text-center shadow-lg">
            <MessageSquareText className="w-12 h-12 text-[#F1AB13] mx-auto mb-6" />
            <p className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-relaxed mb-4">
              {'"By Freelancers, For Freelancers — HYVE is built by those who\'ve lived the hustle."'}
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every feature, every decision, every line of code comes from real freelancing experience. We're not just
              building a platform; we're building a community.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for background blobs animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  )
}

// The ImpactContent component is kept here for reference, but not rendered in the current design
// as it's not part of the provided image's layout.
const ImpactContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
    {[
      {
        title: "For Indian Freelancers",
        content:
          "HYVE will break career stagnancy by enabling team collaborations, fostering continuous work opportunities, and ensuring fair pay with transparent payments in an ecosystem designed specifically for India.",
      },
      {
        title: "For Startups & Companies",
        content:
          "HYVE will bridge the talent gap by offering cost-efficient access to skilled freelance teams, making it easier for early-stage startups to scale without the high costs of agencies.",
      },
      {
        title: "For the Indian Gig Economy",
        content:
          "HYVE will redefine freelancing in India by shifting from solo gigs to structured team collaborations, creating an ecosystem where freelancers stand out, grow together, and boost their careers beyond traditional freelancing models dominated by foreign platforms.",
      },
    ].map((item, index) => (
      <Card
        key={index}
        className="feature-card p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:bg-yellow-50"
      >
        <CardContent className="p-0">
          <strong className="block text-[#2D2D2D] text-xl font-bold mb-2">{item.title}</strong>
          <p className="text-gray-700 text-base leading-relaxed">{item.content}</p>
        </CardContent>
      </Card>
    ))}
  </div>
)
