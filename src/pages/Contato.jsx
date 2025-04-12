import { useState } from "react"
import  Button  from "../components/ui/Button"
import Input  from "../components/ui/Input"
import Textarea from "../components/ui/Textarea"
import  Checkbox  from "../components/ui/Checkbox"
import Label  from "../components/ui/Label"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useToast } from "../hooks/use-toast.jsx"
import { useSiteContext } from "../context/site-context"
import GoogleMap from "../components/common/Google-map"

export const Contato = () => {
  const { contact } = useSiteContext()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    newsletter: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, newsletter: checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data:", formData)

    // Simulando envio do formulário
    toast({
      title: contact.form.successMessage.title,
      description: contact.form.successMessage.description,
    })

    // Resetar formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      newsletter: false,
    })
  }

  // Endereço do petshop para o mapa
  const petshopAddress = `${contact.info.address.street}, ${contact.info.address.city}`

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-600">{contact.pageTitle}</h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">{contact.pageDescription}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-green-600">{contact.form.title}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome">{contact.form.fields.name}</Label>
              <Input
                id="nome"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{contact.form.fields.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">{contact.form.fields.phone}</Label>
              <Input
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">{contact.form.fields.message}</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Como podemos ajudar?"
                value={formData.mensagem}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" checked={formData.newsletter} onCheckedChange={handleCheckboxChange} />
              <Label htmlFor="newsletter" className="text-sm">
                {contact.form.newsletter}
              </Label>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              {contact.form.buttonText}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-green-600">{contact.info.title}</h2>
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{contact.info.address.title}</h3>
                    <p className="text-gray-600">
                      {contact.info.address.street} - {contact.info.address.city}
                    </p>
                    <p className="text-gray-600">{contact.info.address.zipCode}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{contact.info.phone.title}</h3>
                    <p className="text-gray-600">{contact.info.phone.primary}</p>
                    <p className="text-gray-600">{contact.info.phone.secondary}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{contact.info.email.title}</h3>
                    <p className="text-gray-600">{contact.info.email.primary}</p>
                    <p className="text-gray-600">{contact.info.email.secondary}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{contact.info.hours.title}</h3>
                    <p className="text-gray-600">{contact.info.hours.weekdays}</p>
                    <p className="text-gray-600">{contact.info.hours.saturday}</p>
                    <p className="text-gray-600">{contact.info.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{contact.location.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <GoogleMap
                address={petshopAddress}
                aspectRatio="video"
                className="rounded-b-lg"
                showLoadingState={true}
                showErrorState={true}
                showReloadButton={true}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
