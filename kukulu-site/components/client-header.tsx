"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ClientHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#career-development", label: "Free Courses" },
    { href: "#community", label: "Community" },
    { href: "#economic", label: "Economic Empowerment" },
    { href: "#employers", label: "For Employers" },
    { href: "#job-seekers", label: "For Job Seekers" },
    { href: "#contact", label: "Contact" },
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="#"
          onClick={smoothScroll}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
            K
          </div>
          <span className="text-2xl font-bold text-gray-800">
            Kūkulu <span className="text-teal-600">Hawaii</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-md hover:bg-gray-100 transition-colors duration-150 ease-in-out"
              onClick={smoothScroll}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            className="hidden lg:inline-flex bg-[#FF8552] hover:bg-[#E5784A] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            Post a Job
          </Button>
          <Button className="hidden lg:inline-flex bg-[#005B94] hover:bg-[#00497A] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
            Find Jobs
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                    onClick={smoothScroll}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2 px-4">
                  <Button className="w-full bg-[#FF8552] hover:bg-[#E5784A] text-white font-semibold py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
                    Post a Job
                  </Button>
                  <Button className="w-full bg-[#005B94] hover:bg-[#00497A]">
                    Find Jobs
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
