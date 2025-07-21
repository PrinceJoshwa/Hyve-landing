// import Link from "next/link"
// import Image from "next/image"
// import { CalendarDays } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card" // Assuming Card and CardContent are available

// export default function BlogPage() {
//   const blogPosts = [
//     {
//       id: 1,
//       image: "/teamgroup.jpg", // AI generated image placeholder
//       category: "Team Building",
//       date: "May 12, 2023",
//       title: "How to Build a Freelance Team That Delivers Results",
//       description:
//         "Learn the key strategies for assembling a high-performing team of freelancers that can tackle complex projects.",
//       authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
//       authorName: "Sanjay Kumar",
//     },
//     {
//       id: 2,
//       image: "/hiring.jpg", // AI generated image placeholder
//       category: "Hiring",
//       date: "June 3, 2023",
//       title: "Client Tips for Hiring on HYVE: What to Look For",
//       description: "A comprehensive guide for businesses looking to hire freelance teams for their next big project.",
//       authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
//       authorName: "Meera Patel",
//     },
//     {
//       id: 3,
//       image: "/insight.jpg", // AI generated image placeholder
//       category: "Industry Insights",
//       date: "July 18, 2023",
//       title: "Freelancing Trends in India 2025: What's Next",
//       description: "Explore the evolving landscape of freelancing in India and prepare for the future of remote work.",
//       authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
//       authorName: "Aryan Singh",
//     },
//   ]

//   return (
//     <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16">
//           <div className="text-center sm:text-left mb-8 sm:mb-0">
//             <span className="inline-block px-4 py-1 bg-[#FFF4D6] text-[#F1AB13] rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
//               Resources
//             </span>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
//               Latest from Our{" "}
//               <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
//                 Blog
//               </span>
//             </h1>
//           </div>
//           <Link href="/blog/all-articles" className="text-[#F1AB13] font-semibold flex items-center group">
//             View all articles
//             <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
//           </Link>
//         </div>

//         {/* Blog Post Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <Card
//               key={post.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative w-full h-48">
//                 <Image
//                   src={post.image || "/placeholder.svg"}
//                   alt={post.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-xl"
//                 />
//                 <span className="absolute top-4 left-4 bg-[#F1AB13] text-white text-xs font-semibold px-3 py-1 rounded-full">
//                   {post.category}
//                 </span>
//               </div>
//               <CardContent className="p-6">
//                 <div className="flex items-center text-gray-500 text-sm mb-3">
//                   <CalendarDays className="w-4 h-4 mr-2" />
//                   <span>{post.date}</span>
//                 </div>
//                 <h2 className="text-xl font-bold text-[#2D2D2D] mb-3 leading-snug">{post.title}</h2>
//                 <p className="text-gray-600 text-base mb-4 line-clamp-3">{post.description}</p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <Image
//                       src={post.authorAvatar || "/placeholder.svg"}
//                       alt={post.authorName}
//                       width={32}
//                       height={32}
//                       className="rounded-full mr-3 border border-gray-200"
//                     />
//                     <span className="text-sm font-medium text-gray-700">{post.authorName}</span>
//                   </div>
//                   <Link href={`/blog/${post.id}`} className="text-[#F1AB13] text-sm font-semibold hover:underline">
//                     Read More
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// import Link from "next/link";
// import Image from "next/image";
// import { CalendarDays } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card"; // Assuming Card and CardContent are available

// export default function BlogPage() {
//   const blogPosts = [
//     {
//       id: 1,
//       image: "/Blog_1-Banner.jpg", // AI generated image placeholder
//       category: "Team Building",
//       date: "March 28, 2025",
//       title: "The Freelance Boom",
//       description:
//         "The monotonous 9-to-5 is no longer the only option. Today, freelancing is no longer just a side-hustle but a full-fledged career.",
//       authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
//       authorName: "Sanjay Kumar",
//       link: "https://medium.com/@kaustubhjadhav1610/the-freelance-boom-0fc4b8c19904",
//     },
//     {
//       id: 2,
//       image: "/Blog_2-Banner.png", // AI generated image placeholder
//       category: "Hiring",
//       date: "April 9, 2025",
//       title: "The Freelance Spectrum Top Domains You Can Thrive In",
//       description:
//         "From coding to creativity, discover the 6 hottest freelance domains that let you ditch the 9-to-5 and work on your own.",
//       authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
//       authorName: "Meera Patel",
//       link: "https://medium.com/@kaustubhjadhav1610/the-freelance-spectrum-top-domains-you-can-thrive-in-df4571bf3885 ",
//     },
//     {
//       id: 3,
//       image: "/Blog_3-Banner.png", // AI generated image placeholder
//       category: "Industry Insights",
//       date: "April 20, 2025",
//       title: "Freelance vs Full-time What's Your Workstyle?",
//       description:
//         "Let's explore & find answers to your questions with a detailed comparison between Freelance vs Full-time employment..",
//       authorAvatar: "/placeholder.svg?height=32&width=32", // AI generated image placeholder
//       authorName: "Aryan Singh",
//       link: "https://medium.com/@kaustubhjadhav1610/freelance-vs-full-time-whats-your-workstyle-d07f43843303",
//     },
//   ];

//   return (
//     <div className=" w-full bg-[#f8fafc] relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
//       {/* Top Fade Grid Background */}

//       <div
//         className="absolute inset-0 z-0"
//         /* radial-gradient(circle at 50px 50px, #f9dda1 4px, transparent 2px),  Add circles on the intersections. */
//         style={{
//           backgroundImage: `
//       linear-gradient(to right, #f9dda1 1px, transparent 1px),
//       linear-gradient(to bottom, #f9dda1 1px, transparent 1px) 
//     `,
//           backgroundSize: "50px 50px",
//           backgroundPosition: "0 0",
//           backgroundRepeat: "repeat",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
//           maskImage:
//             "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8">
//           <div className="text-center sm:text-left mb-8 sm:mb-0">
//             <span className="inline-block px-4 py-1 text-[#F1AB13] rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
//               Resources
//             </span>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
//               Latest from Our{" "}
//               <span className="bg-gradient-to-r from-[#F1AB13] via-[#ffe65b] to-[#F1AB13] bg-clip-text text-transparent">
//                 Blog
//               </span>
//             </h1>
//           </div>
//           {/* <Link
//             href="/blog/all-articles"
//             className="text-[#F1AB13] font-semibold flex items-center group"
//           >
//             View all articles
//             <span className="ml-2 transition-transform group-hover:translate-x-1">
//               →
//             </span>
//           </Link> */}
//         </div>

//         {/* Blog Post Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
//           {blogPosts.map((post) => (
//             <Card
//               key={post.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden transform hover:-translate-y-2"
//             >
//               {/* Image Section moved up with reduced height */}
//               <div className="relative w-full h-36 sm:h-40 md:h-44">
//                 <Image
//                   src={post.image || "/placeholder.svg"}
//                   alt={post.title}
//                   layout="fill"
//                   objectFit="cover"
//                   objectPosition="top center"
//                   className="rounded-t-2xl"
//                 />
//                 <span className="absolute top-3 left-3 bg-[#F1AB13] text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
//                   {post.category}
//                 </span>
//               </div>

//               {/* Card Content */}
//               <CardContent className="p-4 sm:p-5">
//                 <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2">
//                   <CalendarDays className="w-4 h-4 mr-1.5" />
//                   <span>{post.date}</span>
//                 </div>

//                 <h2 className="text-lg sm:text-xl font-semibold text-[#2D2D2D] mb-2 leading-snug">
//                   {post.title}
//                 </h2>

//                 <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
//                   {post.description}
//                 </p>

//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     {/* Optional Author Section */}
//                     {/* <Image
//               src={post.authorAvatar || "/placeholder.svg"}
//               alt={post.authorName}
//               width={28}
//               height={28}
//               className="rounded-full border border-gray-300"
//             />
//             <span className="text-sm text-gray-700 font-medium">
//               {post.authorName}
//             </span> */}
//                   </div>

//                   <Link
//                     href={post.link}
//                     target="_blank"
//                     className="text-[#F1AB13] text-sm font-semibold hover:underline"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      image: "/Blog_1-Banner.jpg",
      category: "Team Building",
      date: "March 28, 2025",
      title: "The Freelance Boom",
      description:
        "The monotonous 9-to-5 is no longer the only option. Today, freelancing is no longer just a side-hustle but a full-fledged career.",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      authorName: "Sanjay Kumar",
      link: "https://medium.com/@kaustubhjadhav1610/the-freelance-boom-0fc4b8c19904",
    },
    {
      id: 2,
      image: "/Blog_2-Banner.png",
      category: "Hiring",
      date: "April 9, 2025",
      title: "The Freelance Spectrum Top Domains You Can Thrive In",
      description:
        "From coding to creativity, discover the 6 hottest freelance domains that let you ditch the 9-to-5 and work on your own.",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      authorName: "Meera Patel",
      link: "https://medium.com/@kaustubhjadhav1610/the-freelance-spectrum-top-domains-you-can-thrive-in-df4571bf3885 ",
    },
    {
      id: 3,
      image: "/Blog_3-Banner.png",
      category: "Industry Insights",
      date: "April 20, 2025",
      title: "Freelance vs Full-time What's Your Workstyle?",
      description:
        "Let's explore & find answers to your questions with a detailed comparison between Freelance vs Full-time employment..",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      authorName: "Aryan Singh",
      link: "https://medium.com/@kaustubhjadhav1610/freelance-vs-full-time-whats-your-workstyle-d07f43843303",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f9dda1 1px, transparent 1px),
            linear-gradient(to bottom, #f9dda1 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          backgroundPosition: "0 0",
          backgroundRepeat: "repeat",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8">
          <div className="text-center sm:text-left mb-8 sm:mb-0">
            <span className="inline-block px-4 py-1 text-[#F1AB13] rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
              Latest from Our{" "}
              <span className="bg-gradient-to-r from-[#F1AB13] via-[#ffe65b] to-[#F1AB13] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden transform hover:-translate-y-2 p-0"
            >
              {/* Image Section - no top padding */}
              <div className="relative w-full h-36 sm:h-40 md:h-44">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover object-top w-full h-full"
                />
                <span className="absolute top-3 left-3 bg-[#F1AB13] text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Card Content */}
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2">
                  <CalendarDays className="w-4 h-4 mr-1.5" />
                  <span>{post.date}</span>
                </div>

                <h2 className="text-lg sm:text-xl font-semibold text-[#2D2D2D] mb-2 leading-snug">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    {/* Author section removed for now */}
                  </div>

                  <Link
                    href={post.link}
                    target="_blank"
                    className="text-[#F1AB13] text-sm font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
