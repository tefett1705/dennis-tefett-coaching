const API_BASE = import.meta.env.VITE_API_URL || '/api'

export interface NewsletterData {
  gender: string
  firstName: string
  lastName: string
  email: string
  birthYear: string
  zip: string
  source: string
}

export interface ContactData {
  name: string
  email: string
  message: string
  situation?: string
  goal?: string
  selectedPackage?: string
  phone?: string
  company?: string
  subject?: string
  preferredContact?: string
}

export interface ApiResponse {
  success: boolean
  message?: string
}

export async function submitNewsletter(data: NewsletterData): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE}/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'Newsletter-Anmeldung fehlgeschlagen')
  }

  return response.json()
}

export async function submitContact(data: ContactData): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || 'Nachricht konnte nicht gesendet werden')
  }

  return response.json()
}
