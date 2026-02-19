import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <span className="text-6xl font-serif font-bold text-teal">404</span>
        <h1 className="text-2xl font-serif font-semibold mt-4 mb-3">
          Seite nicht gefunden
        </h1>
        <p className="text-text-secondary mb-8">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Zur Startseite
        </Link>
      </div>
    </div>
  )
}
