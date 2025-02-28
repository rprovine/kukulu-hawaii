import { Card, CardContent } from "@/components/ui/card"
import { Store, Search, Handshake } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center section-title mx-auto">
          How Kūkulu Skills Works
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Our platform brings together Native Hawaiian job seekers and Hawaii employers through a culturally responsive
          approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="feature-icon w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Create Your Profile</h3>
              <p className="text-gray-600">
                Build a comprehensive profile that highlights your skills, experience, and cultural connections. For job
                seekers, this becomes your digital resume.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="feature-icon w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Discover Opportunities</h3>
              <p className="text-gray-600">
                Browse job listings from employers committed to supporting the Native Hawaiian community or find
                qualified candidates who bring cultural knowledge.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="feature-icon w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Connect & Grow</h3>
              <p className="text-gray-600">
                Apply for positions, schedule interviews, and build relationships with employers who value your unique
                perspective and cultural background.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

