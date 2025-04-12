import { useGoogleMaps } from "../../hooks/use-google-maps"
import { RefreshCcw } from "lucide-react"
import Button  from "../ui/Button"

/**
 * Componente para exibir um mapa do Google Maps
 * @param {Object} props - Propriedades do componente
 * @param {string} props.address - Endereço para exibir no mapa
 * @param {string} props.embedUrl - URL de incorporação do Google Maps (opcional)
 * @param {string} props.mapType - Tipo de mapa (padrão: 'place')
 * @param {number} props.zoom - Nível de zoom (padrão: 15)
 * @param {Object} props.position - Coordenadas {lat, lng} (opcional)
 * @param {string} props.apiKey - Chave da API do Google Maps (opcional)
 * @param {string} props.className - Classes CSS adicionais
 * @param {string} props.aspectRatio - Proporção do mapa ('video', 'square', 'auto', ou valor personalizado como '4/3')
 * @param {number} props.height - Altura fixa em pixels (substitui aspectRatio)
 * @param {boolean} props.showLoadingState - Mostrar estado de carregamento
 * @param {boolean} props.showErrorState - Mostrar estado de erro
 * @param {boolean} props.showReloadButton - Mostrar botão de recarregar em caso de erro
 * @returns {JSX.Element} - Componente de mapa
 */
export default function GoogleMap({
  address,
  embedUrl,
  mapType = "place",
  zoom = 15,
  position,
  apiKey = "",
  className = "",
  aspectRatio = "video",
  height,
  showLoadingState = true,
  showErrorState = true,
  showReloadButton = true,
}) {
  const { mapUrl, isLoaded, error, iframeRef, handleLoad, handleError, reloadMap } = useGoogleMaps({
    address,
    embedUrl,
    mapType,
    zoom,
    position,
    apiKey,
  })

  // Determinar a classe de proporção
  let aspectClass = ""
  if (aspectRatio === "video") {
    aspectClass = "aspect-video"
  } else if (aspectRatio === "square") {
    aspectClass = "aspect-square"
  } else if (aspectRatio === "auto") {
    aspectClass = ""
  } else if (aspectRatio) {
    // Proporção personalizada (ex: "4/3")
    aspectClass = `aspect-[${aspectRatio}]`
  }

  // Estilo para altura fixa (substitui aspectRatio)
  const heightStyle = height ? { height: `${height}px` } : {}

  return (
    <div className={`relative w-full ${className}`}>
      {/* Estado de carregamento */}
      {showLoadingState && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-gray-600">Carregando mapa...</p>
          </div>
        </div>
      )}

      {/* Estado de erro */}
      {showErrorState && error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
          <div className="flex flex-col items-center text-center p-4">
            <p className="text-red-500 mb-4">{error}</p>
            {showReloadButton && (
              <Button variant="outline" size="sm" onClick={reloadMap} className="flex items-center">
                <RefreshCcw className="h-4 w-4 mr-2" />
                Tentar novamente
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Container do mapa */}
      <div className={`w-full overflow-hidden rounded-lg ${aspectClass}`} style={heightStyle}>
        <iframe
          ref={iframeRef}
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          onLoad={handleLoad}
          onError={handleError}
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  )
}
