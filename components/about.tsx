import {
  Globe,
  Rocket,
  Target,
  Hexagon,
  Circle,
  Triangle,
  Star,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

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
  };

  return (
    <main className="bg-[#FFFDFB] text-[#202124] relative overflow-hidden min-h-screen">
      {/* Background Decorations
      <div className="fixed inset-0 geometric-bg"></div>
      <div className="blob bg-[#F5A623] w-96 h-96 top-[-20%] right-[-10%]"></div>
      <div className="blob bg-[#F5A623] w-72 h-72 bottom-[-10%] left-[-10%]"></div> */}

      {/* Floating Shapes */}
      {/* <div className="fixed w-full h-full pointer-events-none">
        <Hexagon className="absolute top-[20%] left-[10%] w-12 h-12 text-[#F5A623]/20 floating rotate" />
        <Circle className="absolute top-[40%] right-[15%] w-8 h-8 text-[#F5A623]/20 floating-delayed" />
        <Triangle className="absolute bottom-[30%] left-[20%] w-10 h-10 text-[#F5A623]/20 floating-more-delayed" />
        <Hexagon className="absolute bottom-[20%] right-[25%] w-14 h-14 text-[#F5A623]/20 floating" />
        <Star className="absolute top-[60%] right-[40%] w-6 h-6 text-[#F5A623]/30 floating-delayed" />
        <Sparkles className="absolute top-[10%] right-[30%] w-8 h-8 text-[#F5A623]/20 floating-more-delayed" />
      </div> */}
      <div className="flex-grow py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center text-gray-800 mb-8 lg:mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 slide-in">
              About HYVE
            </h3>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto opacity-90 slide-in">
              At HYVE, our mission is to redefine freelancing by making it more
              collaborative, secure, and rewarding. We empower freelancers to
              work in teams, get fairly paid, and deliver high-quality projects
              while helping businesses find skilled talent without the hassle.
            </p>
          </div>

          {/* Interactive Tabs Section */}
          <div className="">
            {/* Tab Buttons */}
            <div className="sticky top-0 z-20 p-4 sm:p-6">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {Object.entries(aboutTabs).map(([key, { icon, title }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                      activeTab === key
                        ? "bg-[#F5A623] text-white shadow-md"
                        : "bg-yellow-50 text-gray-700 hover:bg-yellow-100"
                    }`}
                  >
                    <span className="mr-2">{icon}</span>
                    {title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-6 lg:p-8">
              {Object.entries(aboutTabs).map(([key, { content }]) => (
                <div
                  key={key}
                  className={`transition-all duration-500 ${
                    activeTab === key
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 hidden"
                  }`}
                >
                  <div className="feature-card text-center p-4 md:p-6 rounded-lg border border-gray-200 hover:border-[#F5A623] transition-colors bg-white/80 backdrop-blur-sm hover:bg-white/90 h-full">
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Update the impact content JSX for better responsiveness
const ImpactContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
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
      <div
        key={index}
        className="feature-card text-center p-4 md:p-6 rounded-lg border border-gray-200 hover:border-[#F5A623] transition-colors backdrop-blur-sm hover:bg-gradient-to-br from-white to-[#F5A623]/10"
      >
        <strong className="block text-gray-900">{item.title}</strong>
        <p className="text-gray-700">{item.content}</p>
      </div>
    ))}
  </div>
);


export default About;