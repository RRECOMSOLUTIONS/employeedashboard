import Medusa from "@medusajs/js-sdk"

export const backendUrl = __BACKEND_URL__ ?? "/"

export const sdk = new Medusa({
  baseUrl: backendUrl,
  auth: {
    type: "jwt",
    fetchCredentials:"include"
  },
})

// useful when you want to call the BE from the console and try things out quickly
if (typeof window !== "undefined") {
  ;(window as any).__sdk = sdk
}
