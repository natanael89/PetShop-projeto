import { useState, useRef } from "react"

/**
 * Hook personalizado para gerenciar um iframe do Google Maps
 * @param {Object} options - Opções de configuração
 * @param {string} options.address - Endereço para exibir no mapa (opcional)
 * @param {string} options.embedUrl - URL de incorporação do Google Maps (opcional)
 * @param {string} options.mapType - Tipo de mapa: 'place', 'view', 'directions', 'streetview', 'search' (padrão: 'place')
 * @param {number} options.zoom - Nível de zoom (1-20, padrão: 15)
 * @param {Object} options.position - Coordenadas {lat, lng} (opcional)
 * @param {string} options.apiKey - Chave da API do Google Maps (opcional)
 * @returns {Object} - Estado e referências do mapa
 */
export function useGoogleMaps({ address, embedUrl, mapType = "place", zoom = 15, position, apiKey = "" } = {}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const iframeRef = useRef(null)

  // Construir a URL do mapa se não for fornecida diretamente
  const getMapUrl = () => {
    if (embedUrl) return embedUrl

    // URL base para incorporação do Google Maps
    let url = "https://www.google.com/maps/embed/v1/"

    // Adicionar o tipo de mapa e a chave da API
    url += `${mapType}?key=${apiKey}`

    // Adicionar parâmetros com base no tipo de mapa
    if (mapType === "place" && address) {
      url += `&q=${encodeURIComponent(address)}`
    } else if (mapType === "view") {
      if (position) {
        url += `&center=${position.lat},${position.lng}`
      } else if (address) {
        url += `&q=${encodeURIComponent(address)}`
      }
      url += `&zoom=${zoom}`
    } else if (mapType === "directions" && address) {
      // Para direções, o endereço deve ser o destino
      url += `&destination=${encodeURIComponent(address)}`
      // Origem padrão (pode ser substituída por um parâmetro)
      url += `&origin=current+location`
    }

    return url
  }

  // URL de fallback para quando não temos API key ou parâmetros suficientes
  const getFallbackUrl = () => {
    if (address) {
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976900292304!2d-46.65868382374689!3d-23.56131126132307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2s${encodeURIComponent(address)}!5e0!3m2!1spt-BR!2sbr!4v1712089654074!5m2!1spt-BR!2sbr`
    }
    // URL padrão para São Paulo (Av. Paulista)
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976900292304!2d-46.65868382374689!3d-23.56131126132307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1712089654074!5m2!1spt-BR!2sbr"
  }

  // Determinar a URL final do mapa
  const mapUrl = apiKey ? getMapUrl() : getFallbackUrl()

  // Manipuladores de eventos
  const handleLoad = () => {
    setIsLoaded(true)
    setError(null)
  }

  const handleError = () => {
    setIsLoaded(true)
    setError("Não foi possível carregar o mapa. Por favor, tente novamente mais tarde.")
  }

  // Recarregar o mapa
  const reloadMap = () => {
    setIsLoaded(false)
    setError(null)

    // Recarregar o iframe
    if (iframeRef.current) {
      const src = iframeRef.current.src
      iframeRef.current.src = ""
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = src
        }
      }, 100)
    }
  }

  return {
    mapUrl,
    isLoaded,
    error,
    iframeRef,
    handleLoad,
    handleError,
    reloadMap,
  }
}
