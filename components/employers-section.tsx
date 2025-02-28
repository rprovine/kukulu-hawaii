import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function EmployersSection() {
  return (
    <section id="employers" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Diverse workplace in Hawaii"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">For Hawaii Employers</h2>
            <p className="text-xl mb-8">
              Connect with qualified Native Hawaiian talent who bring cultural knowledge, community connections, and
              professional skills to your organization.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Access Untapped Talent</h3>
                  <p>
                    Connect with qualified Native Hawaiian professionals who bring unique cultural perspective, language
                    skills, and community connections to your organization.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Build Diverse Teams</h3>
                  <p>
                    Strengthen your organization with employees who reflect Hawaii's rich cultural heritage and
                    community connections.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cultural Resource Hub</h3>
                  <p>
                    Gain access to resources that help create culturally responsive workplaces that honor Hawaiian
                    values.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="destructive" className="mt-8 bg-[#FF8552] hover:bg-[#E5784A]">
              Join as an Employer
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

