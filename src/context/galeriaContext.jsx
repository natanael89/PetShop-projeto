/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const GalleryContext = createContext(undefined)

export function GalleryProvider({ children }) {
    const [galleryImages, setGalleryImages] = useState([
        {
            id: "gallery-1",
            src: "https://img.freepik.com/fotos-premium/chihuahua-na-mesa-de-tosa-ao-lado-do-cabelo-morto-apos-a-muda-expressa-do-cachorro_392339-2156.jpg",
            alt: "Cachorro após tosa",
            caption: "Rex após sua tosa mensal",
            category: "tosa",
            featured: true,
        },
        {
            id: "gallery-2",
            src: "https://blog-static.petlove.com.br/wp-content/uploads/2021/08/gato-filhote-tomando-banho-petlove.jpg",
            alt: "Gato tomando banho",
            caption: "Luna durante seu banho relaxante",
            category: "banho",
            featured: true,
          },
          {
            id: "gallery-3",
            src: "https://blog-static.petlove.com.br/wp-content/uploads/2021/05/27173310/cachorro-brincando-Petlove.jpg",
            alt: "Cachorro brincando",
            caption: "Thor se divertindo em nosso espaço de recreação",
            category: "recreacao",
            featured: false,
          },
          {
            id: "gallery-4",
            src: "https://www.pedigree.com.br/sites/g/files/fnmzdf2401/files/2024-06/desenvolvimento-dos-filhotes-pedigree-02.jpg",
            alt: "Filhotes de cachorro",
            caption: "Novos amiguinhos visitando nossa loja",
            category: "filhotes",
            featured: true,
          },
          {
            id: "gallery-5",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClQeH88RndwIoAz8cctMrV3VzO4gIk1B8tA&s",
            alt: "Gato após banho",
            caption: "Mia após seu banho especial",
            category: "banho",
            featured: false,
          },
          {
            id: "gallery-6",
            src: "https://static5.depositphotos.com/1004199/512/i/450/depositphotos_5125392-stock-photo-yorkshire-terrier-with-red-bow.jpg",
            alt: "Cachorro com laço",
            caption: "Bella com seu novo visual",
            category: "tosa",
            featured: true,
          },
          {
            id: "gallery-7",
            src: "https://cdn.prod.website-files.com/602d151a812ce93ee387ebe5/61006adc77209a3b2711d24a_shutterstock_646123102_low.jpg",
            alt: "Cachorro e gato juntos",
            caption: "Max e Nina, melhores amigos",
            category: "amizade",
            featured: false,
          },
          {
            id: "gallery-8",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLcLBqyPpNTM8VH6IvOqV8qliQw-ikIs1hg&s",
            alt: "Cachorro com brinquedo",
            caption: "Bob com seu brinquedo favorito",
            category: "recreacao",
            featured: false,
          },
          {
            id: "gallery-9",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmGzEMc2iBOjNz6h9n8CL4uHkX9CC_aFjJw&s",
            alt: "Gato dormindo",
            caption: "Simba relaxando após um dia de brincadeiras",
            category: "descanso",
            featured: false,
          },
    ])

    const [gallerySettings, setGallerySettings] = useState({
        pageTitle: "Galeria de Fotos",
        pageDescription:
             "Conheça alguns dos adoráveis clientes que já passaram pelo nosso petshop. É um verdadeiro prazer atender a cada um deles e contribuir para o seu bem-estar e felicidade.",
        categories: [
            { id: "all", name: "Todos" },
            { id: "tosa", name: "Tosa" },
            { id: "banho", name: "Banho" },
            { id: "recreacao", name: "Recreação" },
            { id: "filhotes", name: "Filhotes" },
            { id: "amizade", name: "Amizade" },
            { id: "descanso", name: "Descanso" },
        ],
        itemsPerPage: 6,
        lightboxEnabled: true,
    })

    const addImage = (newImage) => {
        setGalleryImages((prev) => [...prev, { id: `gallery-${prev.length + 1}`, ...newImage }])
      }

      const removeImage = (imageId) => {
        setGalleryImages((prev) => prev.filter((img) => img.id !== imageId))
      }

    const getImagesByCategory = (category) => {
        if (category === "all") return galleryImages
        return galleryImages.filter((img) => img.category === category)
      }

      const getFeaturedImages = (limit = 4) => {
        return galleryImages.filter((img) => img.featured).slice(0, limit)
      }
    
      // Funções para atualizar configurações
      const updateSettings = (newSettings) => {
        setGallerySettings((prev) => ({ ...prev, ...newSettings }))
      }

    const value = {
        images: galleryImages,
        settings: gallerySettings,
        addImage,
        removeImage,
        getImagesByCategory,
        getFeaturedImages,
        updateSettings
    }

    return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
}

export function useGallery() {
    const context = useContext(GalleryContext)
    if (context === undefined) {
        throw new Error("useGallery must be used within a GalleryProvider")
    }
    return context
}