import Link from "next/link"
import { smoothScroll } from "@/utils/smoothScroll"

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#career-development", label: "Free Courses" },
    { href: "#community", label: "Community" },
    { href: "#contact", label: "Contact" },
  ]

  const userLinks = [
    { href: "#job-seekers", label: "Job Seekers" },
    { href: "#employers", label: "Employers" },
    { href: "#testimonials", label: "Success Stories" },
    { href: "#economic", label: "Resources" },
    { href: "#faq", label: "FAQ" },
  ]

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/accessibility", label: "Accessibility" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kūkulu Hawaii</h3>
            <p className="text-gray-400 mb-4">
              Connecting Native Hawaiians with meaningful employment opportunities while honoring cultural values and
              traditions.
            </p>
            <p className="text-gray-400">© {new Date().getFullYear()} Kūkulu Hawaii. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={smoothScroll}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Users</h4>
            <ul className="space-y-2">
              {userLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={smoothScroll}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            Kūkulu Hawaii is dedicated to strengthening Hawaii's economy by connecting Native Hawaiian job seekers with
            quality employment opportunities.
          </p>
        </div>
      </div>
    </footer>
  )
}

