

import { createContext, useContext, useState } from "react"

// Criando o contexto
const SiteContext = createContext(undefined)

// Provider Component
export function SiteProvider({ children }) {
  // Dados do site
  const [siteData] = useState({
    // Informações gerais do site
    siteInfo: {
      name: "Pet shop",
      slogan: "Cuidando do seu melhor amigo como se fosse nosso",
      logo: "/placeholder.svg?height=40&width=40",
      year: new Date().getFullYear(),
    },

    // Textos da página inicial
    home: {
      hero: {
        title: 'Pet shop "Melhor Amigo"',
        subtitle: "Cuidando do seu melhor amigo como se fosse nosso",
        buttonText: "Conheça nossos produtos",
        image: "data:image/jpeg;base64,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",
        slides: [
            {
                title: 'Petshop "Melhor Amigo"',
                subtitle: "Cuidando do seu melhor amigo como se fosse nosso",
                buttonText: "Conheça nossos produtos",
                buttonLink: "/produtos",
                image: "https://cdn.prod.website-files.com/602d151a812ce93ee387ebe5/61006adc77209a3b2711d24a_shutterstock_646123102_low.jpg",
              },
              {
                title: "Banho e Tosa Profissional",
                subtitle: "Serviços de qualidade para o bem-estar do seu pet",
                buttonText: "Agendar agora",
                buttonLink: "/contato",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHNomUXxLigbrO-aK7DWWFooRKTNVeAV5bQ&s",
              },
              {
                title: "Produtos Premium",
                subtitle: "Rações e acessórios de alta qualidade",
                buttonText: "Ver produtos",
                buttonLink: "/produtos",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0Gd_4w6vk-DJnYqX_Fal5Z6zDbomO1ut5g&s",
              },
              {
                title: "Promoção Especial",
                subtitle: "20% de desconto em todos os serviços",
                buttonText: "Aproveitar",
                buttonLink: "/contato",
                image: "https://img.ahazou.com/tr:n-ahzdcb-post/ahz-posts/2df615e4-6aba-4f49-8a1f-0c1534ba3432/midia/post-77a3673c-62b9-4bc4-bcb9-4913c682ad4d.jpeg",
              },
        ],
      },
      welcome: {
        title: 'Bem-vindo ao Pet shop "Melhor Amigo"!',
        paragraphs: [
          'No Petshop "Melhor Amigo", nós entendemos que seu animal de estimação é mais do que apenas um bichinho, é um membro especial da sua família. Com isso em mente, estamos comprometidos em fornecer cuidados excepcionais e serviços de alta qualidade para garantir que seu melhor amigo tenha uma vida feliz e saudável.',
          "Com uma equipe dedicada e apaixonada por animais, nossos profissionais treinados estão prontos para oferecer os melhores cuidados para o seu pet. Desde serviços de tosa profissional, onde deixaremos seu animalzinho com um visual impecável, até a limpeza e higienização completa, proporcionamos um ambiente seguro e tranquilo para que seu amigo se sinta confortável durante todo o processo.",
        ],
      },
      services: {
        title: "Nossos Serviços",
        items: [
          {
            icon: "scissors",
            title: "Tosa Especializada",
            description:
              "Nossos tosadores experientes e qualificados utilizam técnicas avançadas para garantir que seu pet tenha um visual impecável.",
          },
          {
            icon: "shower",
            title: "Banho Relaxante",
            description:
              "Utilizamos produtos de qualidade, seguros e adequados para cada tipo de pelagem, garantindo uma limpeza profunda e refrescante.",
          },
          {
            icon: "dogBowl",
            title: "Ração Premium",
            description:
              "Oferecemos uma seleção de rações premium para cães e gatos, formuladas com ingredientes de alta qualidade.",
          },
        ],
        buttonText: "Ver todos os produtos e serviços",
      },
      cta: {
        title: "Seu pet merece o melhor!",
        description:
          'Estamos ansiosos para conhecê-lo e ao seu melhor amigo! Visite-nos no Petshop "Melhor Amigo" e descubra a diferença que fazemos na vida dos animais de estimação.',
        buttonText: "Entre em contato",
      },
    },

    // Produtos
    products: {
      pageTitle: "Nossos Produtos e Serviços",
      pageDescription:
        "Oferecemos uma variedade de produtos e serviços de alta qualidade para garantir o bem-estar e a felicidade do seu pet.",
      categories: [
        {
          id: "tosa",
          name: "Tosa e Banho",
          items: [
            {
              id: "tosa-especializada",
              title: "Tosa Especializada",
              price: "A partir de R$ 50,00",
              description:
                "Serviços profissionais de tosa para cães de todas as raças. Nossos tosadores experientes e qualificados utilizam técnicas avançadas para garantir que seu pet tenha um visual impecável.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: "banho-relaxante",
              title: "Banho Relaxante",
              price: "A partir de R$ 40,00",
              description:
                "Banhos relaxantes para cães e gatos. Utilizamos produtos de qualidade, seguros e adequados para cada tipo de pelagem, garantindo uma limpeza profunda e refrescante.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: "pacote-completo",
              title: "Pacote Completo",
              price: "A partir de R$ 80,00",
              description:
                "Banho + tosa + higienização completa. Inclui limpeza de ouvidos, corte de unhas e perfume especial para pets.",
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
        {
          id: "racao",
          name: "Ração",
          items: [
            {
              id: "racao-caes",
              title: "Ração Premium para Cães",
              price: "R$ 120,00",
              description:
                "Ração premium para cães adultos. Formulada com ingredientes de alta qualidade, garantindo uma nutrição balanceada e adequada para o seu pet.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: "racao-gatos",
              title: "Ração Premium para Gatos",
              price: "R$ 110,00",
              description:
                "Ração premium para gatos adultos. Formulada com ingredientes de alta qualidade, garantindo uma nutrição balanceada e adequada para o seu pet.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: "racao-filhotes",
              title: "Ração Especial Filhotes",
              price: "R$ 130,00",
              description:
                "Ração especial para filhotes. Contém nutrientes essenciais para o desenvolvimento saudável do seu pet nos primeiros meses de vida.",
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
        {
          id: "acessorios",
          name: "Acessórios",
          items: [
            {
              id: "brinquedos",
              title: "Brinquedos Interativos",
              price: "A partir de R$ 25,00",
              description:
                "Brinquedos interativos que estimulam a mente e o corpo do seu pet, promovendo o exercício físico e mental.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: "higiene",
              title: "Produtos de Higiene",
              price: "A partir de R$ 15,00",
              description:
                "Shampoos e condicionadores específicos para diferentes tipos de pelagem, escovas e pentes para manter os pelos desembaraçados e saudáveis.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: "acessorios-essenciais",
              title: "Acessórios Essenciais",
              price: "A partir de R$ 20,00",
              description: "Coleiras, guias, comedouros e outros acessórios essenciais para o dia a dia do seu pet.",
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
      ],
      additionalInfo: {
        title: "Informações Adicionais",
        paragraphs: [
          "Todos os nossos produtos são cuidadosamente selecionados para garantir a qualidade e segurança para o seu pet. Nossos serviços são realizados por profissionais treinados e apaixonados por animais.",
          "Para mais informações sobre nossos produtos e serviços, entre em contato conosco ou visite nossa loja.",
        ],
        buttonText: "Agendar um serviço",
      },
    },

    // Galeria
    gallery: {
      pageTitle: "Galeria de Fotos",
      pageDescription:
        "Conheça alguns dos adoráveis clientes que já passaram pelo nosso petshop. É um verdadeiro prazer atender a cada um deles e contribuir para o seu bem-estar e felicidade.",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Cachorro após tosa",
          caption: "Rex após sua tosa mensal",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Gato tomando banho",
          caption: "Luna durante seu banho relaxante",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Cachorro brincando",
          caption: "Thor se divertindo em nosso espaço de recreação",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Filhotes de cachorro",
          caption: "Novos amiguinhos visitando nossa loja",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Gato após banho",
          caption: "Mia após seu banho especial",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Cachorro com laço",
          caption: "Bella com seu novo visual",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Cachorro e gato juntos",
          caption: "Max e Nina, melhores amigos",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Cachorro com brinquedo",
          caption: "Bob com seu brinquedo favorito",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Gato dormindo",
          caption: "Simba relaxando após um dia de brincadeiras",
        },
      ],
    },

    // Contato
    contact: {
      pageTitle: "Entre em Contato",
      pageDescription:
        "Estamos ansiosos para ouvir de você! Preencha o formulário abaixo para entrar em contato conosco ou utilize as informações de contato disponíveis.",
      form: {
        title: "Envie-nos uma mensagem",
        fields: {
          name: "Nome completo",
          email: "E-mail",
          phone: "Telefone",
          message: "Mensagem",
        },
        newsletter: "Desejo receber novidades e promoções por e-mail",
        buttonText: "Enviar mensagem",
        successMessage: {
          title: "Mensagem enviada!",
          description: "Agradecemos seu contato. Responderemos em breve.",
        },
      },
      info: {
        title: "Informações de contato",
        address: {
          title: "Endereço",
          street: "Rua dos Pets, 123",
          city: "São Paulo, SP",
          zipCode: "CEP: 01234-567",
        },
        phone: {
          title: "Telefone",
          primary: "(11) 9999-9999",
          secondary: "(11) 8888-8888",
        },
        email: {
          title: "E-mail",
          primary: "contato@melhoramigo.com.br",
          secondary: "atendimento@melhoramigo.com.br",
        },
        hours: {
          title: "Horário de funcionamento",
          weekdays: "Segunda a Sexta: 8h às 19h",
          saturday: "Sábados: 8h às 16h",
          sunday: "Domingos e Feriados: Fechado",
        },
      },
      location: {
        title: "Localização",
        mapPlaceholder: "Mapa de localização",
      },
    },

    // Navegação
    navigation: {
      links: [
        { name: "Início", path: "/" },
        { name: "Produtos", path: "/produtos" },
        { name: "Galeria", path: "/galeria" },
        { name: "Contato", path: "/contato" },
      ],
    },

    // Redes sociais
    socialMedia: [
      { name: "Facebook", icon: "facebook", url: "#" },
      { name: "Instagram", icon: "instagram", url: "#" },
      { name: "Twitter", icon: "twitter", url: "#" },
    ],
  })

  // Funções para acessar dados específicos
  const getProductsByCategory = (categoryId) => {
    const category = siteData.products.categories.find((cat) => cat.id === categoryId)
    return category ? category.items : []
  }

  const getProductById = (productId) => {
    let foundProduct = null
    siteData.products.categories.forEach((category) => {
      const product = category.items.find((item) => item.id === productId)
      if (product) foundProduct = product
    })
    return foundProduct
  }

  return (
    <SiteContext.Provider
      value={{
        ...siteData,
        getProductsByCategory,
        getProductById,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

// Hook personalizado para usar o contexto
// eslint-disable-next-line react-refresh/only-export-components
export function useSiteContext() {
  const context = useContext(SiteContext)
  if (context === undefined) {
    throw new Error("useSiteContext deve ser usado dentro de um SiteProvider")
  }
  return context
}

