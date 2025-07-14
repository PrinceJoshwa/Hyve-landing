// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useCallback } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import clsx from "clsx";

// export default function Header() {
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const isActive = useCallback(
//     (path: string) => {
//       // For home, check if pathname is '/' or '/home'
//       if (path === "/home" && (pathname === "/" || pathname === "/home")) {
//         return true;
//       }
//       // For other paths, check exact match
//       return pathname === path;
//     },
//     [pathname]
//   );

//   const toggleMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen((prev) => !prev);
//   }, []);

//   const closeMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen(false);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     if (pathname !== "/" && pathname !== "/home") {
//       window.location.href = `/#${sectionId}`;
//       return;
//     }
//     // Always update the hash, which will trigger the effect in Hero
//     window.location.hash = `#${sectionId}`;
//   };

//   const navItems: Array<{
//     href: string;
//     label: string;
//     onClick?: () => void;
//   }> = [
//     { href: "/about", label: "About" },
//     {
//       href: "/#for-freelancers",
//       label: "For freelancers",
//       onClick: () => scrollToSection("for-freelancers"),
//     },
//     {
//       href: "/#for-companies",
//       label: "For companies",
//       onClick: () => scrollToSection("for-companies"),
//     },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <header className="sticky top-0 h-15 relative z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-white shadow-sm">
//       {/* Logo */}
//       <Link href="/" className="flex items-center space-x-2">
//         <div className="rounded-md flex items-center justify-center">
//           <Image
//             src="/HYVE.png"
//             alt="Logo"
//             width={30}
//             height={30}
//             className="object-contain w-12 h-12"
//           />
//         </div>
//         <span className="text-xl sm:text-2xl font-bold text-black">HYVE</span>
//       </Link>

//       {/* Desktop Nav */}
//       <nav className="hidden lg:flex items-center space-x-8">
//         {navItems.map((item) =>
//           item.onClick ? (
//             <button
//               key={`${item.href}-${item.label}`}
//               onClick={item.onClick}
//               className={clsx(
//                 "text-sm font-medium transition-colors cursor-pointer",
//                 isActive(item.href)
//                   ? "text-[#F1AB13]"
//                   : "text-[#666666] hover:text-[#F1AB13]"
//               )}
//             >
//               {item.label}
//             </button>
//           ) : (
//             <Link
//               key={`${item.href}-${item.label}`}
//               href={item.href}
//               className={clsx(
//                 "text-sm font-medium transition-colors cursor-pointer",
//                 isActive(item.href)
//                   ? "text-[#F1AB13]"
//                   : "text-[#666666] hover:text-[#F1AB13]"
//               )}
//             >
//               {item.label}
//             </Link>
//           )
//         )}
//       </nav>

//       {/* Buttons */}
//       <div className="flex items-center space-x-2 sm:space-x-3">
//         <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
//           <Button
//             variant="ghost"
//             className="hidden sm:flex text-[#666666] text-sm font-medium"
//             asChild
//           >
//             <span>Login</span>
//           </Button>
//         </Link>
//         <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
//           <Button
//             className="bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm sm:text-base px-6 py-2 rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition"
//             asChild
//           >
//             <span>Sign up</span>
//           </Button>
//         </Link>
//         {/* Mobile Menu Toggle */}
//         <Button
//           variant="ghost"
//           className="lg:hidden p-2"
//           onClick={toggleMobileMenu}
//         >
//           {isMobileMenuOpen ? (
//             <X className="w-5 h-5" />
//           ) : (
//             <Menu className="w-5 h-5" />
//           )}
//         </Button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start px-4 py-4 space-y-4 lg:hidden">
//           {navItems.map((item) =>
//             item.onClick ? (
//               <button
//                 key={`${item.href}-${item.label}`}
//                 onClick={() => {
//                   item.onClick?.();
//                   closeMobileMenu();
//                 }}
//                 className={clsx(
//                   "block text-sm font-medium",
//                   isActive(item.href)
//                     ? "text-[#F1AB13]"
//                     : "text-[#666666] hover:text-[#F1AB13]"
//                 )}
//               >
//                 {item.label}
//               </button>
//             ) : (
//               <Link
//                 key={`${item.href}-${item.label}`}
//                 href={item.href}
//                 onClick={closeMobileMenu}
//                 className={clsx(
//                   "block text-sm font-medium",
//                   isActive(item.href)
//                     ? "text-[#F1AB13]"
//                     : "text-[#666666] hover:text-[#F1AB13]"
//                 )}
//               >
//                 {item.label}
//               </Link>
//             )
//           )}
//           <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
//             <Button
//               variant="ghost"
//               className="text-[#666666] text-sm font-medium"
//               onClick={closeMobileMenu}
//               asChild
//             >
//               <span>Login</span>
//             </Button>
//           </Link>
//           <Link href="https://staging.hyvefreelance.com/auth/login" passHref>
//             <Button
//               className="bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-black font-semibold text-sm px-6 py-2 w-full rounded-lg border border-yellow-400 shadow-md hover:brightness-105 transition"
//               asChild
//             >
//               <span>Sign up</span>
//             </Button>
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useCallback, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import clsx from "clsx"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState("") // State to track current hash

  // Effect to update currentHash when window.location.hash changes
  useEffect(() => {
    // Initialize currentHash on mount
    setCurrentHash(window.location.hash)

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, []) // Empty dependency array means this runs once on mount

  const isActive = useCallback(
    (path: string) => {
      if (path.startsWith("/#")) {
        // Handle hash links (e.g., "/#for-freelancers")
        const baseHref = path.split("#")[0] || "/" // Get the path part (e.g., "/" from "/#for-freelancers")
        const hashPart = path.split("#")[1] // Get the hash part (e.g., "for-freelancers")

        const currentPathMatchesBase =
          pathname === baseHref || (baseHref === "/" && (pathname === "/" || pathname === "/home"))
        const currentHashMatches = currentHash === `#${hashPart}` // Use currentHash state

        return currentPathMatchesBase && currentHashMatches
      } else {
        // Handle regular links (e.g., "/about", "/blog")
        if (path === "/home" && (pathname === "/" || pathname === "/home")) {
          return true
        }
        return pathname === path
      }
    },
    [pathname, currentHash], // Add currentHash to dependencies so isActive re-evaluates on hash changes
  )

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/" && pathname !== "/home") {
      window.location.href = `/#${sectionId}`
      return
    }
    // Always update the hash, which will trigger the effect in Hero
    window.location.hash = `#${sectionId}`
  }

  const navItems: Array<{
    href: string
    label: string
    onClick?: () => void
  }> = [
    { href: "/about", label: "About" },
    {
      href: "/#for-freelancers",
      label: "For freelancers",
      onClick: () => scrollToSection("for-freelancers"),
    },
    {
      href: "/#for-companies",
      label: "For companies",
      onClick: () => scrollToSection("for-companies"),
    },
    { href: "/blog", label: "Blog" }, // Moved Blog before Contact
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 h-15 relative z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="rounded-md flex items-center justify-center">
          <Image src="/HYVE.png" alt="Logo" width={30} height={30} className="object-contain w-12 h-12" />
        </div>
        <span className="text-xl sm:text-2xl font-bold text-black">HYVE</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center space-x-6">
        {navItems.map((item) =>
          item.onClick ? (
            <button
              key={`${item.href}-${item.label}`}
              onClick={item.onClick}
              className={clsx(
                "text-sm font-medium transition-colors cursor-pointer",
                isActive(item.href)
                  ? "bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-white px-4 py-2 rounded-lg shadow-sm"
                  : "text-[#666666] hover:text-[#F1AB13] px-4 py-2",
              )}
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={clsx(
                "text-sm font-medium transition-colors cursor-pointer",
                isActive(item.href)
                  ? "bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-white px-4 py-2 rounded-lg shadow-sm"
                  : "text-[#666666] hover:text-[#F1AB13] px-4 py-2",
              )}
            >
              {item.label}
            </Link>
          ),
        )}
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
          {navItems.map((item) =>
            item.onClick ? (
              <button
                key={`${item.href}-${item.label}`}
                onClick={() => {
                  item.onClick?.()
                  closeMobileMenu()
                }}
                className={clsx(
                  "block text-sm font-medium",
                  isActive(item.href)
                    ? "bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-white px-4 py-2 rounded-lg w-full text-left"
                    : "text-[#666666] hover:text-[#F1AB13] px-4 py-2 w-full text-left",
                )}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                onClick={closeMobileMenu}
                className={clsx(
                  "block text-sm font-medium",
                  isActive(item.href)
                    ? "bg-gradient-to-r from-[#F9A825] to-[#FFD600] text-white px-4 py-2 rounded-lg w-full text-left"
                    : "text-[#666666] hover:text-[#F1AB13] px-4 py-2 w-full text-left",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
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
