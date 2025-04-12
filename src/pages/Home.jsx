import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import { Scissors, ShowerHeadIcon as Shower, DogIcon as DogBowl } from "lucide-react"
import { useSiteContext } from "../context/site-context"



export function Home() {
    return <HomeContent/>
}

export const HomeContent = () => {
    const { home } = useSiteContext()

    const renderServiceIcon = (iconName) => {
        switch (iconName) {
            case "scrissors":
                return <Scissors className="h-8 w-8 text-green-600" />
            case "shower":
                return <Shower className="h-8 w-8 text-green-600"/>
            case "dogBowl":
                return <DogBowl className="h-8 w-8 text-green-600"/>
            default:
                return null
        }
    }
    return (
        <div className="flex flex-col min-h-screen">
        
        {/* Welcome Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-600">{home.welcome.title}</h2>
            <div className="max-w-3xl mx-auto">
              {home.welcome.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-600">{home.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {home.services.items.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 justify-center items-center flex flex-col">
              <Link to="/produtos">
                <Button className="bg-green-600 hover:bg-green-700">{home.services.buttonText}</Button>
              </Link>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center justify-center items-center flex flex-col">
            <h2 className="text-3xl font-bold mb-4">{home.cta.title}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{home.cta.description}</p>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                {home.cta.buttonText}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    )
}