import { useState } from "react"
import { useGallery } from "../context/galeriaContext.jsx"
import { Dialog, DialogContent } from "../components/ui/Dialog";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/Tabs";
import { X } from "lucide-react";

export const Galeria = () => {
    const { images, settings, getImagesByCategory } = useGallery()
    const [selectedImage, setSelectedImage] = useState(null)
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredImages = activeCategory === "all" ? images : images.filter((image) => image.category === activeCategory)

    const openImageModal = (image) => {
        setSelectedImage(image)
    }

    const closeImageModal = () => {
        setSelectedImage(null)
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-600">{settings.pageTitle}</h1>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">{settings.pageDescription}</p>

            <Tabs defaultValue="all" className="mb-8 flex justify-center" onValueChange={setActiveCategory}>
                <TabsList className="flex flex-wrap justify-center bg-gray-100 p-2 rounded-lg shadow-md">
                    {settings.categories.map((category) => (
                        <TabsTrigger key={category.id} value={category.id} onClick={() => getImagesByCategory(category.id)}>
                            {category.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
            onClick={() => openImageModal(image)}
          >
            <div className="relative h-64 w-full">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 w-full h-full"
              />
            </div>
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full text-white bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.caption}</p>
                {image.category && (
                  <span className="text-sm bg-green-600 px-2 py-1 rounded-full inline-block mt-2">
                    {settings.categories.find((cat) => cat.id === image.category)?.name || image.category}
                  </span>
                )}
              </div>
            </div>
            {image.featured && (
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                Destaque
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Nenhuma imagem encontrada nesta categoria.</p>
        </div>
      )}

      {/* Modal de visualização de imagem */}
      {settings.lightboxEnabled && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={(open) => {
            if (!open) closeImageModal()
          }}
        >
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
            {selectedImage && (
              <div className="relative h-[80vh] w-full">
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
                  <p className="font-medium text-lg">{selectedImage.caption}</p>
                  {selectedImage.category && (
                    <p className="text-sm mt-1">
                      Categoria:{" "}
                      {settings.categories.find((cat) => cat.id === selectedImage.category)?.name ||
                        selectedImage.category}
                    </p>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
        </div>
    )
}