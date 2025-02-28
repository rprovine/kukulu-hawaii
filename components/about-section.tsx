import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 mb-6">
              Kūkulu Hawaii is dedicated to strengthening Hawaii's economy by connecting Native Hawaiian job seekers
              with quality employment opportunities while honoring and respecting Hawaiian cultural values.
            </p>

            <p className="text-lg text-gray-600 mb-4">
              <span className="font-semibold">Kūkulu</span> means "to build" or "to construct" in Hawaiian. We're
              building bridges between Native Hawaiian talent and employers who value the unique perspectives and
              cultural knowledge that Native Hawaiians bring to the workplace.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Unlike mainstream job platforms, we focus exclusively on Hawaii's employment landscape and the unique
              needs of the Native Hawaiian community, creating opportunities that foster economic self-sufficiency while
              honoring cultural heritage.
            </p>

            <div className="flex items-center mt-8">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Founder"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-800">Kai Mālama</p>
                <p className="text-gray-600">Founder, Kūkulu Hawaii</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-teal-100 rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-br-3xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Native Hawaiian professionals"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card className="bg-white shadow-md testimonial">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                "The entrepreneurship resources at Kūkulu Skills gave me the confidence to start my own business rooted
                in Hawaiian cultural values. The mentorship from established Hawaiian business owners was invaluable to
                my success."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Testimonial 2"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-gray-800">Kekoa Mahialani</p>
                  <p className="text-gray-600">Small Business Owner</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md testimonial">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                "As a young Native Hawaiian just starting my career, Kūkulu Skills connected me with mentors, housing
                resources, and cultural knowledge that helped me stay rooted while pursuing professional advancement."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Testimonial 3"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-gray-800">Malia Kanahele</p>
                  <p className="text-gray-600">Recent Graduate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border-t-4 border-blue-500">
            <p className="text-3xl font-bold text-gray-800 mb-2">87%</p>
            <p className="text-gray-600">Job placement retention after 6 months</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border-t-4 border-teal-500">
            <p className="text-3xl font-bold text-gray-800 mb-2">$12k</p>
            <p className="text-gray-600">Average salary increase for placements</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border-t-4 border-green-500">
            <p className="text-3xl font-bold text-gray-800 mb-2">35+</p>
            <p className="text-gray-600">New Native Hawaiian businesses launched</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border-t-4 border-purple-500">
            <p className="text-3xl font-bold text-gray-800 mb-2">250+</p>
            <p className="text-gray-600">Families connected with housing resources</p>
          </div>
        </div>
      </div>
    </section>
  )
}

