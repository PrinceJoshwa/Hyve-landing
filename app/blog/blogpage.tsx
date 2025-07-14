import Link from "next/link"
import Image from "next/image"
import { CalendarDays } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card" // Assuming Card and CardContent are available

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      image: "/teamgroup.jpg", // AI generated image placeholder
      category: "Team Building",
      date: "May 12, 2023",
      title: "How to Build a Freelance Team That Delivers Results",
      description:
        "Learn the key strategies for assembling a high-performing team of freelancers that can tackle complex projects.",
      authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
      authorName: "Sanjay Kumar",
    },
    {
      id: 2,
      image: "/hiring.jpg", // AI generated image placeholder
      category: "Hiring",
      date: "June 3, 2023",
      title: "Client Tips for Hiring on HYVE: What to Look For",
      description: "A comprehensive guide for businesses looking to hire freelance teams for their next big project.",
      authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
      authorName: "Meera Patel",
    },
    {
      id: 3,
      image: "/insight.jpg", // AI generated image placeholder
      category: "Industry Insights",
      date: "July 18, 2023",
      title: "Freelancing Trends in India 2025: What's Next",
      description: "Explore the evolving landscape of freelancing in India and prepare for the future of remote work.",
      authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
      authorName: "Aryan Singh",
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16">
          <div className="text-center sm:text-left mb-8 sm:mb-0">
            <span className="inline-block px-4 py-1 bg-[#FFF4D6] text-[#F1AB13] rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
              Latest from Our{" "}
              <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
          </div>
          <Link href="/blog/all-articles" className="text-[#F1AB13] font-semibold flex items-center group">
            View all articles
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
                <span className="absolute top-4 left-4 bg-[#F1AB13] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-[#2D2D2D] mb-3 leading-snug">{post.title}</h2>
                <p className="text-gray-600 text-base mb-4 line-clamp-3">{post.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      src={post.authorAvatar || "/placeholder.svg"}
                      alt={post.authorName}
                      width={32}
                      height={32}
                      className="rounded-full mr-3 border border-gray-200"
                    />
                    <span className="text-sm font-medium text-gray-700">{post.authorName}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-[#F1AB13] text-sm font-semibold hover:underline">
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
