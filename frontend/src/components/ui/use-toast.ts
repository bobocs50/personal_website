import * as React from "react"

const useToast = () => {
  return {
    toast: ({ ...props }: any) => {
      console.log("Toast:", props)
    },
  }
}

export { useToast }
