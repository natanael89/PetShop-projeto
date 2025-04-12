import { useState, useCallback } from "react"

// Componente Toast
const Toast = ({ message, type = "success", onClose }) => {
  const bgColor =
    type === "success"
      ? "bg-green-600"
      : type === "error"
        ? "bg-red-600"
        : type === "warning"
          ? "bg-yellow-600"
          : "bg-blue-600"

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md ${bgColor} text-white max-w-md`}>
      <div className="flex justify-between items-start">
        <div>
          {message.title && <h3 className="font-bold mb-1">{message.title}</h3>}
          {message.description && <p>{message.description}</p>}
        </div>
        <button onClick={onClose} className="ml-4 text-white hover:text-gray-200" aria-label="Fechar">
          ×
        </button>
      </div>
    </div>
  )
}

// Hook personalizado
// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const [toasts, setToasts] = useState([])

  // Função para adicionar um toast
  const toast = useCallback((message) => {
    const id = Date.now()

    // Adicionar o novo toast
    setToasts((prevToasts) => [...prevToasts, { id, message }])

    // Remover automaticamente após 5 segundos
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, 5000)

    return id
  }, [])

  // Função para remover um toast específico
  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  // Componente para renderizar os toasts
  const ToastContainer = () => (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.message.variant}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  )

  return { toast, removeToast, ToastContainer }
}

// Componente de contexto para uso global (opcional)
export function ToastProvider({ children }) {
  const { ToastContainer } = useToast()

  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}
