import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center section-title mx-auto">
          Community Impact
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Hear from Native Hawaiians whose lives have been transformed through our holistic approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md testimonial">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                "Kūkulu Hawaii helped me find a job that not only values my professional skills but also appreciates my
                cultural knowledge. The financial literacy program helped me start building generational wealth for my
                'ohana."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Testimonial 1"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-gray-800">Leilani Kealoha</p>
                  <p className="text-gray-600">Healthcare Professional</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md testimonial">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                "The entrepreneurship resources at Kūkulu Hawaii gave me the confidence to start my own business rooted
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
                "As a young Native Hawaiian just starting my career, Kūkulu Hawaii connected me with mentors, housing
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
      </div>
    </section>
  )
}

