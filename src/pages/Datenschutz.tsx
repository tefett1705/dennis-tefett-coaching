import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <SEOHead
        title="Datenschutzerklärung | Dennis Tefett Coaching"
        description="Datenschutzerklärung von Dennis Tefett – Executive Coaching. Informationen zur Verarbeitung personenbezogener Daten."
        canonical="/datenschutz"
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-lg font-serif font-semibold text-text-primary group-hover:text-gold transition-colors duration-300">
              Dennis Tefett
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-text-secondary hover:text-teal transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Zurück zur Hauptseite
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pt-28 pb-20">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Datenschutzerklärung</h1>

        <div className="prose-content space-y-6 text-text-secondary leading-relaxed">

          <h2>1. Verantwortlicher</h2>
          <p>
            Dennis Tefett<br />
            Marie-Curie-Weg 26a<br />
            45966 Gladbeck<br />
            E-Mail: info@dennis-tefett.de<br />
            Website: www.dennis-tefett.de
          </p>

          <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist mir ein besonderes Anliegen. Ich verarbeite Ihre Daten
            ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG, TMG). In dieser
            Datenschutzerklärung informiere ich Sie über die wichtigsten Aspekte der Datenverarbeitung auf meiner Website.
          </p>

          <h2>3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung</h2>

          <h3>a) Besuch der Website</h3>
          <p>
            Beim Aufrufen meiner Website werden durch den Browser automatisch Informationen an den Server gesendet.
            Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden
            dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Rechners (anonymisiert)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
          </ul>
          <p>
            Die genannten Daten werden zu folgenden Zwecken verarbeitet:
          </p>
          <ul>
            <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
            <li>Gewährleistung einer komfortablen Nutzung der Website</li>
            <li>Auswertung der Systemsicherheit und -stabilität</li>
          </ul>
          <p>
            Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Mein berechtigtes
            Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung.
          </p>

          <h3>b) Kontaktformular</h3>
          <p>
            Wenn Sie über das Kontaktformular auf meiner Website mit mir in Kontakt treten, werden die von Ihnen
            angegebenen Daten (Name, E-Mail-Adresse, Nachricht sowie Ihre Angaben zur aktuellen Situation und
            gewünschtem Coaching-Rahmen) zwecks Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei
            mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage
            Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
            Dazu reicht eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei mir, bis Sie mich zur Löschung
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
            entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h3>c) Newsletter</h3>
          <p>
            Wenn Sie den auf meiner Website angebotenen Newsletter beziehen möchten, benötige ich von Ihnen
            eine E-Mail-Adresse sowie optional Ihren Vornamen. Die Anmeldung zum Newsletter erfolgt im
            sog. Double-Opt-In-Verfahren: Nach Ihrer Anmeldung erhalten Sie eine E-Mail, in der Sie um
            Bestätigung Ihrer Anmeldung gebeten werden. So wird sichergestellt, dass keine Dritten sich
            mit Ihrer E-Mail-Adresse anmelden können.
          </p>
          <p>
            Rechtsgrundlage für die Verarbeitung der Daten nach Anmeldung zum Newsletter ist bei Vorliegen
            einer Einwilligung Art. 6 Abs. 1 lit. a DSGVO.
          </p>
          <p>
            Sie können den Newsletter jederzeit über den in jedem Newsletter enthaltenen Link abbestellen
            oder mir eine entsprechende E-Mail senden. Ihre Daten werden dann unverzüglich gelöscht.
          </p>

          <h2>4. Coaching-Vertragsverhältnis</h2>
          <p>
            Im Rahmen eines Coaching-Vertragsverhältnisses verarbeite ich personenbezogene Daten, die zur
            Durchführung der Coaching-Leistung erforderlich sind. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1
            lit. b DSGVO (Vertragserfüllung). Hierzu gehören:
          </p>
          <ul>
            <li>Kontaktdaten (Name, E-Mail, Telefonnummer)</li>
            <li>Berufliche Angaben, soweit für das Coaching relevant</li>
            <li>Coaching-Notizen und vereinbarte Ziele</li>
            <li>Abrechnungsdaten</li>
          </ul>
          <p>
            <strong>Besondere Vertraulichkeit:</strong> Alle im Coaching besprochenen Inhalte unterliegen
            meiner beruflichen Schweigepflicht. Coaching-Inhalte werden nicht an Dritte weitergegeben –
            auch nicht an Auftraggeber oder Arbeitgeber des Klienten, sofern nicht ausdrücklich anders vereinbart.
          </p>

          <h2>5. Cookies und lokaler Speicher</h2>
          <p>
            Diese Website verwendet <strong>keine Cookies</strong> zu Tracking- oder Werbezwecken. Es wird
            lediglich der lokale Speicher (localStorage) Ihres Browsers genutzt, um Ihre Textgrößen-Einstellung
            zu speichern. Dies dient ausschließlich der Komfortverbesserung und stellt keine personenbezogene
            Datenverarbeitung dar, da keine Identifikation Ihrer Person möglich ist.
          </p>

          <h2>6. Externe Dienste</h2>

          <h3>a) Google Fonts</h3>
          <p>
            Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sog. Web Fonts, die von
            Google LLC bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten
            Schriftarten (Playfair Display, Manrope) in Ihren Browser-Cache. Zu diesem Zweck muss der
            von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch
            erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse meine Website aufgerufen wurde.
          </p>
          <p>
            Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mein
            berechtigtes Interesse liegt in der einheitlichen und ansprechenden Darstellung meiner Website.
          </p>
          <p>
            Weitere Informationen finden Sie in der Datenschutzerklärung von Google:
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> policies.google.com/privacy</a>.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
          <ul>
            <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
            <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
            <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
            <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong>Recht auf Widerspruch gegen die Verarbeitung</strong> (Art. 21 DSGVO)</li>
          </ul>
          <p>
            Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
            Ihrer personenbezogenen Daten durch mich zu beschweren.
          </p>

          <h2>8. Datensicherheit</h2>
          <p>
            Ich verwende innerhalb des Website-Besuchs das verbreitete SSL/TLS-Verfahren in Verbindung
            mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob
            eine einzelne Seite meines Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an
            der geschlossenen Darstellung des Schloss-Symbols in der Adresszeile Ihres Browsers.
          </p>

          <h2>9. Aufbewahrungsfristen</h2>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherfrist genannt wird,
            verbleiben Ihre personenbezogenen Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt.
            Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung
            widerrufen, werden Ihre Daten gelöscht, sofern ich keine anderen rechtlich zulässigen Gründe
            für die Speicherung Ihrer personenbezogenen Daten habe (z.B. steuer- oder handelsrechtliche
            Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>

          <h2>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die
            Weiterentwicklung meiner Website und Angebote oder aufgrund geänderter gesetzlicher bzw.
            behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
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
            <Link to="/agb" className="hover:text-text-secondary transition-colors">AGB</Link>
            <Link to="/impressum" className="hover:text-text-secondary transition-colors">Impressum</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
