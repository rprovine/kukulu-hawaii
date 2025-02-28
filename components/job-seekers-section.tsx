import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function JobSeekersSection() {
  return (
    <section id="job-seekers" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 section-title">
              For Native Hawaiian Job Seekers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover employment opportunities with employers who value your cultural background and are committed to
              supporting the Native Hawaiian community.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-5 h-5 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Culturally Responsive Opportunities</h3>
                  <p className="text-gray-600">
                    Find employers who understand and respect Native Hawaiian values and traditions in the workplace.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-5 h-5 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Skills Development Resources</h3>
                  <p className="text-gray-600">
                    Access training resources specifically designed to help Native Hawaiians succeed in today's job
                    market.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-5 h-5 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Join a community of Native Hawaiian professionals sharing resources, advice, and opportunities.
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-8 bg-[#005B94] hover:bg-[#00497A]">Create Your Profile</Button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 rounded-tr-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-100 rounded-bl-3xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Native Hawaiian professional"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

