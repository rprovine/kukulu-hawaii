import Image from "next/image"

export default function FeaturedEmployers() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          Trusted by Hawaii's Leading Employers
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Join the growing community of organizations committed to supporting Native Hawaiian employment.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <Image
            src="/placeholder.svg?height=60&width=180"
            alt="Company 1"
            width={180}
            height={60}
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/placeholder.svg?height=60&width=180"
            alt="Company 2"
            width={180}
            height={60}
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/placeholder.svg?height=60&width=180"
            alt="Company 3"
            width={180}
            height={60}
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/placeholder.svg?height=60&width=180"
            alt="Company 4"
            width={180}
            height={60}
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  )
}

