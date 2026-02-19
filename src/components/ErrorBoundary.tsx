import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="min-h-screen bg-surface flex items-center justify-center px-8">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-serif font-semibold mb-4">
              Etwas ist schiefgelaufen
            </h1>
            <p className="text-text-secondary mb-6">
              Die Seite konnte nicht geladen werden. Bitte versuchen Sie es erneut.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 cursor-pointer"
            >
              Seite neu laden
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
