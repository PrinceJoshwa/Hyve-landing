// "use client"

// import {
//   Globe,
//   Rocket,
//   Target,
//   Hexagon,
//   Circle,
//   Triangle,
//   Star,
//   Sparkles,
// } from "lucide-react";
// import { useState } from "react";

// const About = () => {
//   const [activeTab, setActiveTab] = useState("mission");

//   const aboutTabs = {
//     mission: {
//       icon: <Target className="w-6 h-6" />,
//       title: "Our Mission",
//       content:
//         "HYVE is India's first homegrown freelancing platform designed to address the unique challenges faced by Indian freelancers. Our mission is to empower freelancers and early-stage startups by providing a collaborative, transparent, and opportunity-rich marketplace where skilled professionals can connect, form teams, and grow together. Unlike foreign platforms that dominate the Indian market without catering to its specific needs, HYVE focuses on team-based work dynamics, ensuring freelancers break out of stagnancy and accelerate their careers while helping startups access affordable, high-quality talent.",
//     },
//     vision: {
//       icon: <Rocket className="w-6 h-6" />,
//       title: "Our Vision",
//       content:
//         "To become the go-to freelancing ecosystem in India, where individuals and teams thrive, startups find cost-effective talent solutions, and collaboration fuels innovation and long-term success. HYVE envisions a future where freelancing is not just a solo journey but a dynamic, team-driven experience tailored to the Indian market, creating sustainable career paths and impactful startup solutions.",
//     },
//     impact: {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Our Impact",
//       content: <ImpactContent />,
//     },
//   };

//   return (
//     <main className="bg-[#FFFDFB] text-[#202124] relative overflow-hidden min-h-screen">
//       {/* Background Decorations
//       <div className="fixed inset-0 geometric-bg"></div>
//       <div className="blob bg-[#F5A623] w-96 h-96 top-[-20%] right-[-10%]"></div>
//       <div className="blob bg-[#F5A623] w-72 h-72 bottom-[-10%] left-[-10%]"></div> */}

//       {/* Floating Shapes */}
//       {/* <div className="fixed w-full h-full pointer-events-none">
//         <Hexagon className="absolute top-[20%] left-[10%] w-12 h-12 text-[#F5A623]/20 floating rotate" />
//         <Circle className="absolute top-[40%] right-[15%] w-8 h-8 text-[#F5A623]/20 floating-delayed" />
//         <Triangle className="absolute bottom-[30%] left-[20%] w-10 h-10 text-[#F5A623]/20 floating-more-delayed" />
//         <Hexagon className="absolute bottom-[20%] right-[25%] w-14 h-14 text-[#F5A623]/20 floating" />
//         <Star className="absolute top-[60%] right-[40%] w-6 h-6 text-[#F5A623]/30 floating-delayed" />
//         <Sparkles className="absolute top-[10%] right-[30%] w-8 h-8 text-[#F5A623]/20 floating-more-delayed" />
//       </div> */}
//       <div className="flex-grow py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center text-gray-800 mb-8 lg:mb-12">
//             <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 slide-in">
//               About HYVE
//             </h3>
//             <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto opacity-90 slide-in">
//               At HYVE, our mission is to redefine freelancing by making it more
//               collaborative, secure, and rewarding. We empower freelancers to
//               work in teams, get fairly paid, and deliver high-quality projects
//               while helping businesses find skilled talent without the hassle.
//             </p>
//           </div>

//           {/* Interactive Tabs Section */}
//           <div className="">
//             {/* Tab Buttons */}
//             <div className="sticky top-0 z-20 p-4 sm:p-6">
//               <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
//                 {Object.entries(aboutTabs).map(([key, { icon, title }]) => (
//                   <button
//                     key={key}
//                     onClick={() => setActiveTab(key)}
//                     className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
//                       activeTab === key
//                         ? "bg-[#F5A623] text-white shadow-md"
//                         : "bg-yellow-50 text-gray-700 hover:bg-yellow-100"
//                     }`}
//                   >
//                     <span className="mr-2">{icon}</span>
//                     {title}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Content Area */}
//             <div className="p-4 sm:p-6 lg:p-8">
//               {Object.entries(aboutTabs).map(([key, { content }]) => (
//                 <div
//                   key={key}
//                   className={`transition-all duration-500 ${
//                     activeTab === key
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-4 hidden"
//                   }`}
//                 >
//                   <div className="feature-card text-center p-4 md:p-6 rounded-lg border border-gray-200 hover:border-[#F5A623] transition-colors bg-white/80 backdrop-blur-sm hover:bg-white/90 h-full">
//                     {content}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// // Update the impact content JSX for better responsiveness
// const ImpactContent = () => (
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
//     {[
//       {
//         title: "For Indian Freelancers",
//         content:
//           "HYVE will break career stagnancy by enabling team collaborations, fostering continuous work opportunities, and ensuring fair pay with transparent payments in an ecosystem designed specifically for India.",
//       },
//       {
//         title: "For Startups & Companies",
//         content:
//           "HYVE will bridge the talent gap by offering cost-efficient access to skilled freelance teams, making it easier for early-stage startups to scale without the high costs of agencies.",
//       },
//       {
//         title: "For the Indian Gig Economy",
//         content:
//           "HYVE will redefine freelancing in India by shifting from solo gigs to structured team collaborations, creating an ecosystem where freelancers stand out, grow together, and boost their careers beyond traditional freelancing models dominated by foreign platforms.",
//       },
//     ].map((item, index) => (
//       <div
//         key={index}
//         className="feature-card text-center p-4 md:p-6 rounded-lg border border-gray-200 hover:border-[#F5A623] transition-colors backdrop-blur-sm hover:bg-gradient-to-br from-white to-[#F5A623]/10"
//       >
//         <strong className="block text-gray-900">{item.title}</strong>
//         <p className="text-gray-700">{item.content}</p>
//       </div>
//     ))}
//   </div>
// );


// export default About;

"use client"

import { Globe, Rocket, Target, Hexagon, Circle, Triangle, Star } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card" // Assuming Card and CardContent are available from shadcn/ui

const About = () => {
  const [activeTab, setActiveTab] = useState("mission")

  const aboutTabs = {
    mission: {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      content:
        "HYVE is India's first homegrown freelancing platform designed to address the unique challenges faced by Indian freelancers. Our mission is to empower freelancers and early-stage startups by providing a collaborative, transparent, and opportunity-rich marketplace where skilled professionals can connect, form teams, and grow together. Unlike foreign platforms that dominate the Indian market without catering to its specific needs, HYVE focuses on team-based work dynamics, ensuring freelancers break out of stagnancy and accelerate their careers while helping startups access affordable, high-quality talent.",
    },
    vision: {
      icon: <Rocket className="w-6 h-6" />,
      title: "Our Vision",
      content:
        "To become the go-to freelancing ecosystem in India, where individuals and teams thrive, startups find cost-effective talent solutions, and collaboration fuels innovation and long-term success. HYVE envisions a future where freelancing is not just a solo journey but a dynamic, team-driven experience tailored to the Indian market, creating sustainable career paths and impactful startup solutions.",
    },
    impact: {
      icon: <Globe className="w-6 h-6" />,
      title: "Our Impact",
      content: <ImpactContent />,
    },
  }

  return (
    <main className="bg-gradient-to-br from-yellow-50 to-white text-[#202124] relative overflow-hidden min-h-screen py-12 sm:py-20">
      {/* Floating Shapes for visual interest */}
      <Hexagon className="absolute top-[10%] left-[5%] w-16 h-16 text-yellow-200/30 floating animate-pulse" />
      <Circle className="absolute top-[30%] right-[10%] w-12 h-12 text-yellow-300/30 floating-delayed animate-bounce" />
      <Triangle className="absolute bottom-[20%] left-[15%] w-14 h-14 text-yellow-200/30 floating-more-delayed animate-spin-slow" />
      <Star className="absolute bottom-[10%] right-[5%] w-10 h-10 text-yellow-300/30 floating animate-pulse-delayed" />

      <div className="flex-grow px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center text-gray-800 mb-12 lg:mb-16">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 lg:mb-6 text-[#2D2D2D] leading-tight animate-fade-in-up">
              About{" "}
              <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
                HYVE
              </span>
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-gray-700 animate-fade-in-up-delay">
              At HYVE, our mission is to redefine freelancing by making it more collaborative, secure, and rewarding. We
              empower freelancers to work in teams, get fairly paid, and deliver high-quality projects while helping
              businesses find skilled talent without the hassle.
            </p>
          </div>

          {/* Interactive Tabs Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 border border-yellow-100 animate-scale-in">
            {/* Tab Buttons */}
            <div className="sticky top-0 z-20 pb-4 sm:pb-6 bg-white rounded-t-3xl">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                {Object.entries(aboutTabs).map(([key, { icon, title }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md transform hover:-translate-y-1 ${
                      activeTab === key
                        ? "bg-gradient-to-r from-[#F1AB13] to-[#FFD700] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-yellow-100"
                    }`}
                  >
                    <span className="mr-2">{icon}</span>
                    {title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              {Object.entries(aboutTabs).map(([key, { content }]) => (
                <div
                  key={key}
                  className={`transition-all duration-700 ease-in-out transform ${
                    activeTab === key ? "opacity-100 translate-y-0 block" : "opacity-0 translate-y-4 hidden"
                  }`}
                >
                  <Card className="bg-white border-0 shadow-none rounded-2xl p-4 md:p-8 text-center">
                    <CardContent className="p-0">{content}</CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes floating-delayed {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes floating-more-delayed {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fade-in-up {
          animation: fadeInFromBottom 1s ease-out forwards;
        }

        .animate-fade-in-up-delay {
          animation: fadeInFromBottom 1s ease-out 0.3s forwards;
          opacity: 0; /* Start hidden */
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .floating {
          animation: floating 6s ease-in-out infinite;
        }

        .floating-delayed {
          animation: floating-delayed 7s ease-in-out infinite;
        }

        .floating-more-delayed {
          animation: floating-more-delayed 8s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 5s infinite ease-in-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </main>
  )
}

// Update the impact content JSX for better responsiveness and card styling
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
          <strong className="block text-gray-900 text-xl font-bold mb-2">{item.title}</strong>
          <p className="text-gray-700 text-base leading-relaxed">{item.content}</p>
        </CardContent>
      </Card>
    ))}
  </div>
)

export default About
