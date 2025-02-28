import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-8">Have questions or want to learn more? Reach out to our team.</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <MapPin className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Office Location</h3>
                  <p className="text-gray-600">1234 Ala Moana Blvd, Honolulu, HI 96814</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Mail className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-600">info@kukuluhawaii.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                  <p className="text-gray-600">(808) 555-1234</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-blue-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button className="w-full bg-[#005B94] hover:bg-[#00497A]">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

