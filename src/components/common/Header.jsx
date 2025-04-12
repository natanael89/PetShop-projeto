import { Link } from "react-router-dom"
import logo from "../../assets/melhoramigo.ico"
import Button from "../ui/Button"
import { Menu, X } from "lucide-react"
import { useSiteContext } from "../../context/site-context"
import { useState } from "react"

export const Header = () => {
   const {siteInfo, navigation} = useSiteContext()
   const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
             <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                 <Link to="/" className="flex items-center">
                  <img src={logo} alt="logo petshop" className="h-10 w-10 mr-2"/>
                  <span className="text-2xl font-bold text-green-700">{siteInfo.name}</span>
                 </Link>
                 <nav className="hidden md:flex space-x-8">
                   {navigation.links.map((link) => (
                     <Link key={link.path} to={link.path} className="text-gray-700 hover:text-green-600 font-medium">
                        {link.name}
                     </Link>
                   ))}
                 </nav>

                 <div className="md:hidden">
                   <Button
                    varient="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                   >
                     {isMenuOpen ? <X/> : <Menu/>}
                   </Button>
                 </div>
              </div>
           </div>

           {isMenuOpen && (
             <div className="md:hidden bg-white border-t border-gray-200">
               <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                  {navigation.links.map((link) => (
                     <Link
                      key={link.path}
                      to={link.path}
                      className="text-gray-700 hover:text-green-600 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                     >
                      {link.name}
                     </Link>
                  ))}
               </div>
             </div>
           )}
        </header>
    )
}