import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useSiteContext } from "../../context/site-context"

export const Footer = () => {
   const { siteInfo, navigation , socialMedia, contact } = useSiteContext()
   const router = useNavigate()

   const renderSocailIcon = (iconName) => {
    switch (iconName) {
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      default:
        return null
    }
   }

   const handleNavigation = (path) => {
     router(path)

     window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
   }

   return (
    <footer className="bg-green-800 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{siteInfo.name}</h3>
          <p className="mb-4">{siteInfo.slogan}</p>
          <div className="flex space-x-4">
           {socialMedia.map((social) => (
             <Link key={social.name} to={social.url} className="text-white hover:text-green-300">
               {renderSocailIcon(social.icon)}
               <span className="sr-only">{social.icon}</span>
             </Link>
           ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            {navigation.links.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white hover:text-green-300" onClick={() => handleNavigation(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{contact.info.address.street} - {contact.info.address.city}</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>{contact.info.phone.primary}</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>{contact.info.email.primary}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-700 mt-8 pt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Petshop Melhor Amigo. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
   ) 
}