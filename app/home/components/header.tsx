// "use client"

// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { useState, useCallback } from "react"
// import { Menu, X } from "lucide-react"
// import Image from 'next/image'
// import clsx from "clsx"

// export default function Header() {
//   const pathname = usePathname()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const isActive = useCallback(
//     (path: string) => {
//       if (path === "/home" && (pathname === "/" || pathname === "/home")) {
//         return true
//       }
//       return pathname === path
//     },
//     [pathname]
//   )

//   const toggleMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen(prev => !prev)
//   }, [])

//   const closeMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen(false)
//   }, [])

//   const navItems = [
//     { href: "/about", label: "About" },
//     { href: "#", label: "For freelancers" },
//     { href: "#", label: "For companies" },
//     { href: "#", label: "Blog" },
//   ]

//   return (
//     <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-white shadow-sm">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <div className="w-8 h-8 bg-gradient-to-br from-[#F1AB13] to-[#E8A317] rounded-md flex items-center justify-center">
//           <Image
//             src="/HYVE.png"
//             alt="Logo"
//             width={20}
//             height={20}
//             className="object-contain"
//           />
//         </div>
//         <span className="text-xl sm:text-2xl font-bold text-black">HYVE</span>
//       </div>

//       {/* Desktop Nav */}
//       <nav className="hidden lg:flex items-center space-x-8">
//         {navItems.map((item) => (
//           <Link
//             key={`${item.href}-${item.label}`}
//             href={item.href}
//             className={clsx(
//               "text-sm font-medium transition-colors",
//               isActive(item.href) ? "text-[#F1AB13]" : "text-[#666666] hover:text-[#F1AB13]"
//             )}
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>

//       {/* Buttons */}
//       <div className="flex items-center space-x-2 sm:space-x-3">
//         <Button variant="ghost" className="hidden sm:flex text-[#666666] text-sm font-medium">
//           Login
//         </Button>
//         <Button className="bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm sm:text-base px-6 py-2 rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition">
//           Sign up
//         </Button>
//         {/* Mobile Menu Toggle */}
//         <Button variant="ghost" className="lg:hidden p-2" onClick={toggleMobileMenu}>
//           {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//         </Button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start px-4 py-4 space-y-4 lg:hidden">
//           {navItems.map((item) => (
//             <Link
//               key={`${item.href}-${item.label}`}
//               href={item.href}
//               onClick={closeMobileMenu}
//               className={clsx(
//                 "block text-sm font-medium",
//                 isActive(item.href) ? "text-[#F1AB13]" : "text-[#666666] hover:text-[#F1AB13]"
//               )}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <Button variant="ghost" className="text-[#666666] text-sm font-medium" onClick={closeMobileMenu}>
//             Login
//           </Button>
//           <Button className="bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm px-6 py-2 w-full rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition">
//             Sign up
//           </Button>
//         </div>
//       )}
//     </header>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import clsx from "clsx"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = useCallback(
    (path: string) => {
      // For home, check if pathname is '/' or '/home'
      if (path === "/home" && (pathname === "/" || pathname === "/home")) {
        return true
      }
      // For other paths, check exact match
      return pathname === path
    },
    [pathname],
  )

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/#for-freelancers", label: "For freelancers" }, // Link to section ID
    { href: "/#for-companies", label: "For companies" }, // Link to section ID
    { href: "#", label: "Blog" },
  ]

  return (
    <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-[#F1AB13] to-[#E8A317] rounded-md flex items-center justify-center">
          <Image src="/HYVE.png" alt="Logo" width={20} height={20} className="object-contain" />
        </div>
        <span className="text-xl sm:text-2xl font-bold text-black">HYVE</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className={clsx(
              "text-sm font-medium transition-colors",
              isActive(item.href) ? "text-[#F1AB13]" : "text-[#666666] hover:text-[#F1AB13]",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
          <Button variant="ghost" className="hidden sm:flex text-[#666666] text-sm font-medium" asChild>
            <span>Login</span>
          </Button>
        </Link>
        <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
          <Button
            className="bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm sm:text-base px-6 py-2 rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition"
            asChild
          >
            <span>Sign up</span>
          </Button>
        </Link>
        {/* Mobile Menu Toggle */}
        <Button variant="ghost" className="lg:hidden p-2" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start px-4 py-4 space-y-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              onClick={closeMobileMenu}
              className={clsx(
                "block text-sm font-medium",
                isActive(item.href) ? "text-[#F1AB13]" : "text-[#666666] hover:text-[#F1AB13]",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
            <Button variant="ghost" className="text-[#666666] text-sm font-medium" onClick={closeMobileMenu} asChild>
              <span>Login</span>
            </Button>
          </Link>
          <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
            <Button
              className="bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm px-6 py-2 w-full rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition"
              asChild
            >
              <span>Sign up</span>
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
