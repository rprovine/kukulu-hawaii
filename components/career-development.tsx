import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Video, Laptop, MessageSquare } from "lucide-react"

export default function CareerDevelopment() {
  return (
    <section id="career-development" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center section-title mx-auto">
          Free Career Development
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Empower your career journey with our free workshops, courses, and events designed specifically for Native
          Hawaiian job seekers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Workshops & Events</h3>

              <div className="space-y-6">
                <div className="flex border-b border-gray-200 pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">
                      MAR
                      <br />
                      15
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Interview With Confidence</h4>
                    <p className="text-gray-600 mb-2">
                      Master interview techniques with cultural authenticity. Virtual workshop with live Q&A.
                    </p>
                    <span className="text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded-full">Virtual</span>
                    <span className="text-sm text-gray-500 ml-2">5:30PM - 7:00PM HST</span>
                  </div>
                </div>

                <div className="flex border-b border-gray-200 pb-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-teal-600 font-bold">
                      MAR
                      <br />
                      22
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Resume Building Workshop</h4>
                    <p className="text-gray-600 mb-2">
                      Create a powerful resume that highlights your skills and cultural strengths.
                    </p>
                    <span className="text-sm bg-green-100 text-green-600 py-1 px-2 rounded-full">In-Person</span>
                    <span className="text-sm text-gray-500 ml-2">10:00AM - 12:00PM HST</span>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-yellow-600 font-bold">
                      APR
                      <br />
                      05
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Salary Negotiation Strategies</h4>
                    <p className="text-gray-600 mb-2">
                      Learn effective techniques to negotiate fair compensation with confidence.
                    </p>
                    <span className="text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded-full">Virtual</span>
                    <span className="text-sm text-gray-500 ml-2">6:00PM - 7:30PM HST</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-8">
                View All Events
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">On-Demand Career Resources</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Video className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Cultural Communication in the Workplace</h4>
                    <p className="text-gray-600">
                      Learn how to navigate workplace dynamics while honoring your cultural values and identity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Resume Templates & Guides</h4>
                    <p className="text-gray-600">
                      Download customizable resume templates designed to highlight both professional and cultural
                      strengths.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Laptop className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Digital Skills for Modern Careers</h4>
                    <p className="text-gray-600">
                      Self-paced courses on essential technical skills needed in today's workplace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Mock Interview Practice</h4>
                    <p className="text-gray-600">
                      Practice with our AI-powered interview simulator or schedule a session with a career coach.
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-8">
                Access Resources
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-8">
            All career development resources are <span className="font-bold">completely free</span> to Native Hawaiian
            job seekers.
          </p>
          <Button className="w-full sm:w-auto bg-[#005B94] hover:bg-[#00497A]">Register for Upcoming Events</Button>
        </div>
      </div>
    </section>
  )
}

