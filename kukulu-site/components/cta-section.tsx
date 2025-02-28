import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hawaiian-pattern absolute inset-0 opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Kūkulu Hawaii 'Ohana</h2>
          <p className="text-xl mb-8">
            Whether you're a Native Hawaiian seeking employment, an employer committed to supporting Hawaii's indigenous
            community, or looking to preserve cultural knowledge, Kūkulu Hawaii is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="destructive"
              size="lg"
              className="w-full sm:w-auto bg-[#FF8552] hover:bg-[#E5784A] text-lg py-4 px-8"
            >
              For Job Seekers
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-lg py-4 px-8"
            >
              For Employers
            </Button>
          </div>
          <p className="mt-8 text-white opacity-80">
            Join us in building a future where Native Hawaiians thrive economically while preserving cultural identity.
          </p>
        </div>
      </div>
    </section>
  )
}

