import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hawaiian-pattern absolute inset-0 opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight hero-text mb-6 animate-fadeInUp">
            Connecting Native Hawaiians with Meaningful Employment
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fadeInUp delay-1">
            Hawaii's premier platform dedicated to empowering the Native Hawaiian community through quality job
            opportunities across all islands.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeInUp delay-2">
            <Button size="lg" className="bg-[#005B94] hover:bg-[#00497A] text-lg py-7 px-8">
              Find Your Next Role
            </Button>
            <Button size="lg" variant="destructive" className="bg-[#FF8552] hover:bg-[#E5784A] text-lg py-7 px-8">
              Hire Native Hawaiian Talent
            </Button>
          </div>
          <p className="text-white mt-6 opacity-90 animate-fadeInUp delay-3">
            Featuring <span className="font-bold">FREE</span> career development, cultural preservation,
            entrepreneurship support & community resources
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8 gap-3 animate-fadeInUp delay-3">
            <span className="text-white border border-white/30 bg-white/10 rounded-full px-4 py-2 text-sm">
              ʻŌlelo Hawaiʻi Available
            </span>
            <span className="text-white border border-white/30 bg-white/10 rounded-full px-4 py-2 text-sm">
              All Islands Supported
            </span>
            <span className="text-white border border-white/30 bg-white/10 rounded-full px-4 py-2 text-sm">
              Youth Programs
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

