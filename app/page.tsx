import { Search, Users, FileText, Handshake, Shield, Brain, Briefcase, Award, Crown, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function HyveExactReplica() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-white">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#F1AB13] to-[#E8A317] rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">🏠</span>
          </div>
          <span className="text-2xl font-bold text-black">HYVE</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-[#666666] hover:text-[#F1AB13] text-sm font-medium">
            About
          </a>
          <a href="#" className="text-[#666666] hover:text-[#F1AB13] text-sm font-medium">
            For freelancers
          </a>
          <a href="#" className="text-[#666666] hover:text-[#F1AB13] text-sm font-medium">
            For companies
          </a>
          <a href="#" className="text-[#666666] hover:text-[#F1AB13] text-sm font-medium">
            Hire Teams
          </a>
          <a href="#" className="text-[#666666] hover:text-[#F1AB13] text-sm font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-[#666666] text-sm font-medium">
            Login
          </Button>
          <Button className="bg-[#FDC10B] hover:bg-[#F1AB13] text-black text-sm font-medium px-6 py-2 rounded-lg">
            Sign up
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative overflow-hidden">
        {/* Beta Launch Badge */}
        <div className="flex justify-center pt-6 pb-4">
          <div className="bg-[#FFF4D6] px-4 py-2 rounded-full flex items-center space-x-2">
            <span className="text-[#F1AB13]">🚀</span>
            <span className="text-[#F1AB13] text-sm font-medium">Beta Launch</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center px-6 pb-4">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#2D2D2D] leading-tight mb-6">
            India's First <span className="text-[#F1AB13]">Team-Based</span>
            <br />
            Freelancing Platform
          </h1>
          <p className="text-xl text-[#F1AB13] font-medium">Built for Collaboration, Not Just Gigs.</p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center px-6 mb-6">
          <div className="relative w-full max-w-lg">
            <Input
              placeholder="Browse skilled teams and individuals"
              className="pr-24 h-14 border-2 border-[#F1AB13] focus:border-[#F1AB13] rounded-xl text-base bg-white"
            />
            <Button className="absolute right-2 top-2 h-10 bg-[#FDC10B] hover:bg-[#F1AB13] text-black rounded-lg px-4">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button className="bg-[#2D2D2D] hover:bg-[#404040] text-white px-6 py-3 rounded-lg font-medium">
            <Users className="w-4 h-4 mr-2" />
            Hire Talent
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#2D2D2D] text-[#2D2D2D] bg-white hover:bg-gray-50 px-6 py-3 rounded-lg font-medium"
          >
            Find Tasks
          </Button>
        </div>

        {/* Hero Section with Floating Cards */}
        <div className="relative flex justify-center items-center min-h-[500px] px-6">
          {/* Background Yellow Circle */}
          <div className="absolute w-[450px] h-[450px] -z-10">
            <Image
              src="/ellipse-30.png"
              alt="Background circle"
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Ved Sharma Card - Top Left */}
          <div className="absolute top-4 left-[15%] w-52">
            <Image
              src="/ved-sharma-card.png"
              alt="Ved Sharma - Front End Developer"
              width={208}
              height={80}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          <div className="absolute bottom-16 left-4 w-22 h-22 rounded-full overflow-hidden border-2 border-[#F1AB13]">
              <Image
                src="/ved-sharma.jpg"
                alt="ved sharma"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>  
          </div>

          {/* Jiya Gupta Card - Top Right */}
          {/* <div className="absolute top-4 right-[15%] w-52">
            <Image
              src="/jiya-gupta-card.png"
              alt="Jiya Gupta - Graphic Designer"
              width={208}
              height={80}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div> */}
          <div className="absolute top-4 right-[15%] w-52">
            <Image
              src="/jiya-gupta-card.png"
              alt="Jiya Gupta - Graphic Designer"
              width={208}
              height={80}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
            <div className="absolute bottom-16 right-4 w-22 h-22 rounded-full overflow-hidden border-2 border-[#F1AB13]">
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
          <div className="relative z-10">
            <Image
              src="/hero-person.png"
              alt="Person with laptop on beanbag"
              width={320}
              height={320}
              className="w-[600px] h-[600px] object-contain"
            />
          </div>

          {/* Rahul Shetty Card - Bottom Left */}
          <div className="absolute top-36 left-[22%] w-52">
            <Image
              src="/rahul-shetty-card.png"
              alt="Rahul Shetty - UI/UX Designer"
              width={208}
              height={100}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Total Earnings Card - Right */}
          <div className="absolute top-1/4 right-[20%] w-60">
            <Image
              src="/earnings-card.png"
              alt="Total Earnings ₹3,00,000"
              width={240}
              height={160}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
              <div className="absolute top-20 right-3 w-18 h-18 rounded-full overflow-hidden border-2 border-[#F1AB13]">
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
          <div className="absolute bottom-16 left-[20%] w-56">
            <Image
              src="/escrow-payment-card.png"
              alt="Escrow Payment - Safe & Secured Protection"
              width={224}
              height={60}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Form a Team / Create TEAM buttons with dotted lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-3 z-20">
            <Button className="bg-[#FFF4D6] hover:bg-[#FDC10B] text-[#F1AB13] border border-[#F1AB13] rounded-lg px-4 py-2 text-sm font-medium">
              📝 Form a Team
            </Button>
            <Button className="bg-[#F1AB13] hover:bg-[#E8A317] text-white rounded-lg px-4 py-2 text-sm font-medium">
              ⚡ Create TEAM
            </Button>
          </div>

          {/* New Task Alert - Bottom Right */}
          <div className="absolute bottom-4 right-[20%] w-52">
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
        <div className="bg-gradient-to-r from-[#FFF8E1] to-[#F3E5AB] py-8 mt-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24">
                  <Image
                    src="/team-group.png"
                    alt="Team group"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium text-[#2D2D2D]">India's Freelance</p>
                  <p className="text-lg font-medium text-[#2D2D2D]">Workforce Is</p>
                  <p className="text-lg font-medium text-[#2D2D2D]">Expected to Cross</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-[#2D2D2D]">35 Million</div>
                <p className="text-lg text-[#666666]">by 2027 —</p>
              </div>

              <div className="max-w-sm">
                <p className="text-lg text-[#666666] italic mb-4">
                  "But, those who <span className="font-bold text-[#2D2D2D]">TEAM</span> up will lead the next wave of
                  innovation."
                </p>
                <Button className="bg-[#FDC10B] hover:bg-[#F1AB13] text-black rounded-lg px-6 py-3 font-medium">
                  🔍 Explore TEAMS
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* How HYVE Works Section */}
        <div className="relative py-12 bg-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
            <Image
              src="/ellipse-28.png"
              alt="Decorative element"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <Image
              src="/ellipse-28.png"
              alt="Decorative element"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4">
              How exactly <span className="text-[#F1AB13]">HYVE</span> Works
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              Our Platform makes it easy to find your perfect Team and manage your projects from start to finish
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-6xl mx-auto px-6 space-y-0">
            {/* Step 1: Post a Project */}
            <div className="flex items-center justify-between">
              <div className="relative w-[300px] h-[300px]">
                <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/ellipse-30.png"
                    alt="Background circle"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-xl shadow-lg p-6 border">
                  <h3 className="font-bold text-lg mb-2">Project Details</h3>
                  <p className="text-sm text-[#666666] mb-4">
                    Designing a Logo and website for your Fashion Apparel Brand
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <Badge className="bg-blue-100 text-blue-600 text-xs">UI/UX Designer</Badge>
                    <Badge className="bg-yellow-100 text-yellow-600 text-xs">Logo Designer</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-[#666666]">Timeline</p>
                      <p className="font-medium">20th July-30th Aug</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#666666]">Estimated Cost</p>
                      <p className="font-bold text-lg">₹ 30,000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#F1AB13] rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-1 h-12 bg-[#F1AB13]"></div>
                </div>

                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">1. Post a Project</h3>
                  <p className="text-lg text-[#666666]">
                    Describe your project, set your budget, and specify the skills you need.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Get Matched */}
            <div className="flex items-center justify-between flex-row-reverse">
              <div className="relative w-[300px] h-[300px]">
                <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/ellipse-30.png"
                    alt="Background circle"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 bg-white rounded-xl shadow-lg p-6 border">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                        <Image
                          src="/ved-sharma.jpg"
                          alt="Team member"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                        <Image
                          src="/jiya-gupta.jpg"
                          alt="Team member"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
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
                      <p className="text-sm text-[#666666]">3 Matches found</p>
                      <p className="text-xs text-[#666666]">Based on your requirements</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Team ALPHA</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#666666]">Completed Projects</p>
                      <p className="font-medium">15/22</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#666666]">Rating</p>
                      <div className="flex items-center">
                        <span className="font-bold">4.0</span>
                        <span className="text-[#F1AB13] ml-1">⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="max-w-md text-right">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">2. Get Matched</h3>
                  <p className="text-lg text-[#666666]">
                    We match you with vetted <span className="font-bold">Freelance Teams</span> or{" "}
                    <span className="font-bold">Skilled individuals</span> that fits your requirements.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#F1AB13] rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-1 h-12 bg-[#F1AB13]"></div>
                </div>
              </div>
            </div>

            {/* Step 3: Collaborate */}
            <div className="flex items-center justify-between">
              <div className="relative w-[300px] h-[300px]">
                <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/ellipse-30.png"
                    alt="Background circle"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-xl shadow-lg p-6 border">
                  <h3 className="font-bold text-lg mb-2">Project Details</h3>
                  <p className="text-sm text-[#666666] mb-4">
                    Designing a Logo and website for your Fashion Apparel Brand
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <Badge className="bg-blue-100 text-blue-600 text-xs">UI/UX Designer</Badge>
                    <Badge className="bg-yellow-100 text-yellow-600 text-xs">Logo Designer</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-[#666666]">Timeline</p>
                      <p className="font-medium">20th July-30th Aug</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#666666]">Estimated Cost</p>
                      <p className="font-bold text-lg">₹ 30,000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#F1AB13] rounded-full flex items-center justify-center mb-4">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-1 h-12 bg-[#F1AB13]"></div>
                </div>

                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">3. Collaborate</h3>
                  <p className="text-lg text-[#666666]">
                    Work together seamlessly with built-in communication tools and project management features.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Pay Securely */}
            <div className="flex items-center justify-between flex-row-reverse">
              <div className="relative w-[300px] h-[300px]">
                <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/ellipse-30.png"
                    alt="Background circle"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-xl shadow-lg p-6 border">
                  <h3 className="font-bold text-lg mb-2">Project Details</h3>
                  <p className="text-sm text-[#666666] mb-4">
                    Designing a Logo and website for your Fashion Apparel Brand
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <Badge className="bg-blue-100 text-blue-600 text-xs">UI/UX Designer</Badge>
                    <Badge className="bg-yellow-100 text-yellow-600 text-xs">Logo Designer</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-[#666666]">Timeline</p>
                      <p className="font-medium">20th July-30th Aug</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#666666]">Estimated Cost</p>
                      <p className="font-bold text-lg">₹ 30,000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="max-w-md text-right">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">4. Pay Securely</h3>
                  <p className="text-lg text-[#666666]">
                    Release payments safely through our escrow system. Pay only when you're satisfied with the work.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#F1AB13] rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-[#F8F9FF] to-[#E8F0FF] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Coming Soon 🚀</h2>
              <p className="text-lg text-[#666666]">We're just getting started. Here's what's next on HYVE:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AI-Based Talent Matching */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFF4D6] rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-[#F1AB13]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">AI-Based Talent Matching</h3>
                  <p className="text-[#666666]">Smart algorithms to find the perfect freelancer-project fit</p>
                </CardContent>
              </Card>

              {/* Portfolio Builder Tools */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFF4D6] rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-[#F1AB13]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Portfolio Builder Tools</h3>
                  <p className="text-[#666666]">Showcase your work with professional portfolio templates</p>
                </CardContent>
              </Card>

              {/* Skill Resources & Certification */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#E8F5E8] rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Skill Resources & Certification</h3>
                  <p className="text-[#666666]">Upskill with curated resources and earn verified badges</p>
                </CardContent>
              </Card>

              {/* Premium Freelancer Subscriptions */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F3E8FF] rounded-lg flex items-center justify-center mb-4">
                    <Crown className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Premium Freelancer Subscriptions</h3>
                  <p className="text-[#666666]">Exclusive perks and priority access for pro members</p>
                </CardContent>
              </Card>

              {/* Team to Agency Conversions */}
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F1AB13] text-white text-xs">Soon</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFE8E8] rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Team to Agency Conversions</h3>
                  <p className="text-[#666666]">Scale your freelance team into a full-fledged agency</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-[#FDC10B] hover:bg-[#F1AB13] text-black px-8 py-3 rounded-lg font-medium">
                🔔 Get Notified When We Launch
              </Button>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">💬</Button>
        </div>
      </main>
    </div>
  )
}

