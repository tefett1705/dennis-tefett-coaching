import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface pb-20 md:pb-0">
      <SEOHead
        title="Impressum | Dennis Tefett Coaching"
        description="Impressum – Angaben gemäß § 5 TMG. Dennis Tefett, Executive Coaching, Gladbeck."
        canonical="/impressum"
      />

      <main className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pt-28 pb-20">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Impressum</h1>

        <div className="prose-content space-y-6 text-text-secondary leading-relaxed">

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Dennis Tefett<br />
            Executive Coaching &amp; Beratung<br />
            Marie-Curie-Weg 26a<br />
            45966 Gladbeck
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: info@dennis-tefett.de<br />
            Website: www.dennis-tefett.de
          </p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Coach / Berater<br />
            Die Bezeichnung „Coach" ist in Deutschland nicht gesetzlich geschützt.
          </p>

          <h2>Umsatzsteuer-Identifikationsnummer</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            [wird nach Vergabe ergänzt]
          </p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Dennis Tefett<br />
            Marie-Curie-Weg 26a<br />
            45966 Gladbeck
          </p>

          <h2>Haftungsausschluss (Disclaimer)</h2>

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
            oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
            Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
            auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen
            Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>

          <h2>Online-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> ec.europa.eu/consumers/odr</a>.
          </p>
          <p>
            Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

        </div>
      </main>

      <footer className="border-t border-glass-border py-8">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary/40">
            &copy; {new Date().getFullYear()} Dennis Tefett. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary/40">
            <Link to="/" className="hover:text-text-secondary transition-colors">Startseite</Link>
            <Link to="/datenschutz" className="hover:text-text-secondary transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-text-secondary transition-colors">AGB</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
