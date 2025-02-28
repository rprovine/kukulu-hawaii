import { Card, CardContent } from "@/components/ui/card"

export default function KeyStats() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          <Card className="bg-blue-50 border-none">
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-blue-600">15k+</p>
              <p className="text-gray-700 mt-2">Native Hawaiians Seeking Employment</p>
            </CardContent>
          </Card>

          <Card className="bg-teal-50 border-none">
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-teal-600">500+</p>
              <p className="text-gray-700 mt-2">Hawaii Employers Looking for Talent</p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-none">
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-green-600">All 8</p>
              <p className="text-gray-700 mt-2">Hawaiian Islands Supported</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-none">
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-purple-600">2</p>
              <p className="text-gray-700 mt-2">Languages (English & ʻŌlelo Hawaiʻi)</p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-none">
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-yellow-600">100%</p>
              <p className="text-gray-700 mt-2">Focus on Hawaiian Community</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

