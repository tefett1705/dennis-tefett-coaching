import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function AGB() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-midnight">
      <SEOHead
        title="Allgemeine Geschäftsbedingungen | Dennis Tefett Coaching"
        description="Allgemeine Geschäftsbedingungen (AGB) für Coaching- und Beratungsleistungen von Dennis Tefett. Rechtssichere Vertragsgestaltung mit Zufriedenheitsgarantie."
        canonical="/agb"
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-glass-border">
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
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-text-secondary mb-8">für Coaching- und Beratungsleistungen von Dennis Tefett</p>

        <div className="prose-content space-y-6 text-text-secondary leading-relaxed">

          {/* ——— §1 Geltungsbereich ——— */}
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für sämtliche Verträge zwischen
            Dennis Tefett, Marie-Curie-Weg 26a, 45966 Gladbeck (nachfolgend „Coach") und dem jeweiligen
            Auftraggeber (nachfolgend „Klient") über Coaching- und Beratungsleistungen, gleich welcher
            Kommunikationsform (persönlich, telefonisch, per Videokonferenz oder schriftlich).
          </p>
          <p>
            (2) Abweichende, entgegenstehende oder ergänzende AGB des Klienten werden nur dann
            Vertragsbestandteil, wenn und soweit der Coach ihrer Geltung ausdrücklich in Textform
            (§ 126b BGB) zugestimmt hat. Dieses Zustimmungserfordernis gilt in jedem Fall, auch
            wenn der Coach in Kenntnis abweichender AGB des Klienten die Leistung vorbehaltlos erbringt.
          </p>
          <p>
            (3) Diese AGB gelten auch für alle zukünftigen Geschäftsbeziehungen zwischen den Parteien,
            auch wenn sie nicht nochmals gesondert vereinbart werden, soweit der Klient bei Vertragsschluss
            auf die fortbestehende Geltung hingewiesen wird.
          </p>
          <p>
            (4) Soweit der Klient Verbraucher im Sinne des § 13 BGB ist, gelten die verbraucherschützenden
            Bestimmungen dieser AGB (insbesondere §§ 5, 6, 11, 12) vorrangig. Soweit der Klient
            Unternehmer im Sinne des § 14 BGB ist, gelten die Sonderbestimmungen für Unternehmer (§ 18).
          </p>

          {/* ——— §2 Vertragsgegenstand und Abgrenzung ——— */}
          <h2>§ 2 Vertragsgegenstand und Abgrenzung</h2>
          <p>
            (1) Gegenstand des Vertrages ist die individuelle Beratung und Begleitung (Coaching) des Klienten.
            Das Coaching dient der Reflexion und Unterstützung individueller beruflicher und persönlicher
            Entwicklungsprozesse. Es handelt sich um eine <strong>individuelle Beratungsleistung</strong>
            {' '}(Dienstvertrag gemäß §§ 611 ff. BGB), nicht um Unterricht, Ausbildung oder einen Fernlehrgang
            im Sinne des Fernunterrichtsschutzgesetzes (FernUSG).
          </p>
          <p>
            (2) Der Coach vermittelt keine festgelegten Lehrinhalte und führt keine Lernerfolgskontrolle durch.
            Es wird kein bestimmter Lernerfolg geschuldet. Die Coaching-Leistung besteht in der Durchführung
            individueller Beratungsgespräche. Jede Sitzung ist eine eigenständige, individuell auf den
            Klienten zugeschnittene Beratungsleistung.
          </p>
          <p>
            (3) Der Coach setzt Fragetechniken, Reflexionsmethoden und wissenschaftlich fundierte Impulse
            ein, um den Klienten in seiner eigenen Lösungsfindung zu unterstützen. Das Coaching stellt
            {' '}<strong>keine Therapie, keine Heilbehandlung und keinen Fernunterricht</strong> dar.
          </p>
          <p>
            (4) Soweit im Rahmen des Coachings unterstützende Materialien (z.B. Arbeitsblätter,
            Zusammenfassungen, Impulstexte) bereitgestellt werden, dienen diese ausschließlich als
            ergänzende Impulse. Sie sind nicht Vertragsbestandteil und begründen keinen Anspruch auf
            Lernmaterialien oder einen strukturierten Lehrgang. Die Nutzung solcher Materialien ist
            freiwillig und erfolgt eigenverantwortlich durch den Klienten.
          </p>
          <p>
            (5) Die Verantwortung für die Umsetzung der im Coaching erarbeiteten Erkenntnisse und
            Maßnahmen liegt ausschließlich beim Klienten.
          </p>

          {/* ——— §3 Vertragsschluss ——— */}
          <h2>§ 3 Vertragsschluss</h2>
          <p>
            (1) Die Darstellung des Coaching-Angebots auf der Website des Coaches stellt kein
            rechtsverbindliches Angebot, sondern eine unverbindliche Aufforderung zur Abgabe eines
            Angebots (invitatio ad offerendum) dar.
          </p>
          <p>
            (2) Der Vertrag kommt zustande durch:
          </p>
          <ul>
            <li>beiderseitige Unterzeichnung eines individuellen Coaching-Vertrags, oder</li>
            <li>ausdrückliche Auftragsbestätigung des Coaches in Textform (§ 126b BGB), insbesondere per E-Mail, oder</li>
            <li>tatsächliche Aufnahme der Coaching-Leistung durch den Coach nach vorheriger Auftragserteilung durch den Klienten.</li>
          </ul>
          <p>
            (3) Ein kostenloses Erstgespräch dient ausschließlich der gegenseitigen Information und
            Bedarfsanalyse. Es begründet kein Vertragsverhältnis und keine Verpflichtung zur Buchung
            einer Coaching-Leistung. Im Erstgespräch erörterte Inhalte unterliegen bereits der
            Vertraulichkeit gemäß § 8 dieser AGB.
          </p>
          <p>
            (4) Der Klient bestätigt mit Vertragsschluss, dass er diese AGB zur Kenntnis genommen und
            akzeptiert hat. Die AGB werden dem Klienten spätestens mit der Auftragsbestätigung in
            Textform übermittelt.
          </p>
          <p>
            (5) Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen des Vertrags
            bedürfen der Textform (§ 126b BGB).
          </p>

          {/* ——— §4 Leistungsumfang ——— */}
          <h2>§ 4 Leistungsumfang</h2>
          <p>
            (1) Art, Umfang, Dauer und Häufigkeit des Coachings werden individuell zwischen Coach
            und Klient vereinbart. Die vereinbarten Leistungen ergeben sich abschließend aus dem
            jeweiligen Coaching-Vertrag bzw. der Auftragsbestätigung.
          </p>
          <p>
            (2) Der Coach erbringt seine Leistungen nach bestem Wissen und Gewissen unter Einsatz
            wissenschaftlich fundierter Methoden aus den Bereichen Neurowissenschaft,
            Verhaltenspsychologie und Systemik.
          </p>
          <p>
            (3) Die Coaching-Sitzungen finden in der Regel persönlich am vereinbarten Ort oder per
            Videokonferenz statt. Die genaue Durchführungsform wird individuell vereinbart. Der
            Coach behält sich vor, im Einzelfall die Durchführungsform in Abstimmung mit dem
            Klienten zu ändern, sofern dies die Qualität der Leistung nicht beeinträchtigt.
          </p>
          <p>
            (4) Zu Beginn jeder Coaching-Sitzung vereinbaren Coach und Klient gemeinsam individuelle
            Meilensteine und Fortschrittskriterien für die jeweilige Sitzung (nachfolgend
            „Sitzungsziele"). Diese Sitzungsziele bilden die Grundlage für die Bewertung des
            Fortschritts im Rahmen der Zufriedenheitsgarantie (§ 7).
          </p>

          {/* ——— §5 Vergütung und Fälligkeit ——— */}
          <h2>§ 5 Vergütung und Fälligkeit</h2>
          <p>
            (1) Die Vergütung richtet sich nach dem jeweils vereinbarten Coaching-Paket oder wird
            individuell festgelegt. Alle genannten Preise verstehen sich als Nettopreise zuzüglich
            der jeweils gültigen gesetzlichen Umsatzsteuer (derzeit 19 %), sofern nicht ausdrücklich
            als Bruttopreise ausgewiesen.
          </p>
          <p>
            (2) <strong>Fälligkeit und Vorkasse:</strong> Die Vergütung ist grundsätzlich im Voraus
            zu entrichten. Bei Einzelsitzungen ist die Vergütung spätestens drei (3) Werktage vor
            dem vereinbarten Sitzungstermin auf dem Konto des Coaches einzugehen. Bei
            Paketbuchungen ist die Gesamtvergütung spätestens vor Beginn der ersten Sitzung
            fällig, sofern nicht ausdrücklich eine Ratenzahlung gemäß Absatz 3 vereinbart wurde.
          </p>
          <p>
            (3) <strong>Ratenzahlung:</strong> Bei Paketbuchungen kann auf ausdrücklichen Wunsch des
            Klienten eine Ratenzahlung vereinbart werden. Die Raten sind jeweils im Voraus zu den
            im Coaching-Vertrag festgelegten Terminen zu zahlen. Die Vereinbarung einer Ratenzahlung
            bedarf der Textform. Bei Ratenzahlung ist jede Rate spätestens vor Beginn der
            Leistungsperiode fällig, auf die sie sich bezieht.
          </p>
          <p>
            (4) <strong>Zahlungsmittel:</strong> Die Zahlung erfolgt durch Überweisung auf das in der
            Rechnung angegebene Geschäftskonto des Coaches. Barzahlungen sind nur nach vorheriger
            Vereinbarung möglich.
          </p>
          <p>
            (5) Der Coach ist berechtigt, die vereinbarte Leistung zurückzuhalten, bis der fällige
            Betrag vollständig eingegangen ist. Bei Paketbuchungen mit Ratenzahlung ist der Coach
            berechtigt, weitere Sitzungen bis zum Eingang der fälligen Rate auszusetzen.
          </p>

          {/* ——— §6 Zahlungsverzug ——— */}
          <h2>§ 6 Zahlungsverzug</h2>
          <div className="highlight-box">
            <p>
              (1) Der Klient gerät ohne weitere Mahnung in Verzug, wenn die Zahlung nicht innerhalb
              der in § 5 genannten Fristen eingeht (§ 286 Abs. 2 Nr. 1 BGB). Eine gesonderte
              Mahnung ist nicht erforderlich, wenn ein nach dem Kalender bestimmter Zahlungstermin
              vereinbart wurde.
            </p>
            <p>
              (2) <strong>Verzugszinsen:</strong> Im Falle des Zahlungsverzugs ist der Coach berechtigt,
              Verzugszinsen zu verlangen:
            </p>
            <ul>
              <li>
                <strong>Bei Verbrauchern (§ 13 BGB):</strong> Zinsen in Höhe von <strong>5 Prozentpunkten
                über dem jeweiligen Basiszinssatz</strong> der Europäischen Zentralbank p.a.
                (§ 288 Abs. 1 BGB).
              </li>
              <li>
                <strong>Bei Unternehmern (§ 14 BGB):</strong> Zinsen in Höhe von <strong>9 Prozentpunkten
                über dem jeweiligen Basiszinssatz</strong> der Europäischen Zentralbank p.a.
                (§ 288 Abs. 2 BGB).
              </li>
            </ul>
            <p>
              (3) Darüber hinaus ist der Coach berechtigt, eine <strong>Mahnpauschale</strong> in Höhe
              von 40,00 EUR für jede verspätete Zahlung zu verlangen (§ 288 Abs. 5 BGB). Die
              Pauschale wird auf einen geschuldeten Schadensersatz angerechnet, soweit der Schaden
              in Kosten der Rechtsverfolgung begründet ist.
            </p>
            <p>
              (4) Die Geltendmachung eines weitergehenden Verzugsschadens bleibt vorbehalten.
            </p>
            <p>
              (5) Bei Verzug mit mehr als einer Rate oder bei Verzug von mehr als 14 Kalendertagen
              wird die gesamte Restvergütung sofort zur Zahlung fällig
              (Gesamtfälligkeitsklausel). In diesem Fall ist der Coach berechtigt, weitere
              Coaching-Sitzungen bis zum vollständigen Ausgleich aller offenen Forderungen
              einschließlich Zinsen und Mahnpauschale auszusetzen oder den Vertrag
              außerordentlich zu kündigen.
            </p>
          </div>

          {/* ——— §7 Zufriedenheitsgarantie (100 % Geld-zurück) ——— */}
          <h2>§ 7 Zufriedenheitsgarantie (100 % Geld-zurück-Garantie)</h2>
          <div className="highlight-box border-teal/30 bg-teal/[0.04]">
            <p>
              (1) Der Coach gewährt dem Klienten eine <strong>100 % Geld-zurück-Garantie</strong> für
              jede einzelne Coaching-Sitzung nach Maßgabe der folgenden Bestimmungen.
            </p>
            <p>
              (2) <strong>Wirkungszeitraum:</strong> Die Inhalte einer Coaching-Sitzung benötigen
              Zeit, um ihre Wirkung zu entfalten. Die Fortschrittsbewertung erfolgt daher
              nicht am Ende der jeweiligen Sitzung, sondern <strong>zu Beginn der
              darauffolgenden Sitzung</strong>. Zwischen zwei Sitzungen können mehrere Wochen
              liegen; dieser Zeitraum ist ausdrücklich gewollt, um die Umsetzung und
              Wirksamkeit der besprochenen Inhalte im Alltag zu ermöglichen.
            </p>
            <p>
              (3) <strong>Fortschrittsbewertung:</strong> Zu Beginn jeder Folgesitzung führt der
              Coach ein strukturiertes Reflexionsgespräch durch, in dem der Klient nach seiner
              subjektiven Einschätzung zum Fortschritt seit der letzten Sitzung befragt wird.
              Gegenstand der Bewertung sind die in der vorangegangenen Sitzung gemeinsam
              definierten Sitzungsziele (§ 4 Abs. 4).
            </p>
            <p>
              (4) <strong>Geltendmachung:</strong> Stellt der Klient im Rahmen dieses
              Reflexionsgesprächs fest, dass die vorangegangene Sitzung keinerlei Fortschritt
              erbracht hat und die vereinbarten Sitzungsziele bis zur Folgesitzung nicht
              ansatzweise erreicht wurden, hat der Klient das Recht, dies dem Coach
              <strong> zu Beginn der Folgesitzung</strong> mündlich oder in Textform mitzuteilen.
              Die Garantie bezieht sich stets auf die <strong>jeweils letzte
              Sitzung</strong>.
            </p>
            <p>
              (5) <strong>Wahlrecht des Klienten:</strong> Bei berechtigter Geltendmachung gemäß
              Absatz 4 hat der Klient das Wahlrecht zwischen:
            </p>
            <ul>
              <li>
                <strong>Option A – Kostenfreie Wiederholung:</strong> Die betreffende Sitzung
                wird kostenfrei wiederholt. Der Ersatztermin wird einvernehmlich vereinbart und
                findet innerhalb von 14 Tagen statt.
              </li>
              <li>
                <strong>Option B – Vollständige Rückerstattung:</strong> Die Vergütung für die
                betreffende Sitzung wird vollständig erstattet. Die Rückerstattung erfolgt
                innerhalb von 14 Werktagen auf das vom Klienten angegebene Konto.
              </li>
            </ul>
            <p>
              (6) <strong>Ausschlussfrist:</strong> Der Anspruch aus der Zufriedenheitsgarantie
              für eine Sitzung erlischt unwiderruflich, wenn der Klient zu Beginn der
              unmittelbar darauffolgenden Sitzung keinen Mangel an Fortschritt geltend macht.
              Wird in der Folgesitzung kein Einwand erhoben, gilt die vorangegangene Sitzung
              als ordnungsgemäß erbracht und abgenommen.
            </p>
            <p>
              (7) <strong>Dokumentation:</strong> Der Coach dokumentiert die Fortschrittsbewertung
              zu Beginn jeder Folgesitzung. Die Dokumentation wird von beiden Parteien bestätigt
              (mündlich im Gespräch oder per Textform). Diese Dokumentation dient als Nachweis
              der ordnungsgemäßen Leistungserbringung.
            </p>
            <p>
              (8) <strong>Missbrauchsklausel:</strong> Die Zufriedenheitsgarantie dient dem Schutz
              des Klienten und ist nach Treu und Glauben (§ 242 BGB) auszuüben. Bei
              offensichtlich missbräuchlicher Inanspruchnahme – insbesondere bei Geltendmachung
              bei mehr als 50 % der Sitzungen eines Pakets oder bei erkennbar sachfremden
              Motiven – behält sich der Coach das Recht vor, die Geschäftsbeziehung
              ordentlich mit einer Frist von zwei Wochen zu kündigen. Bereits berechtigte
              Erstattungen bleiben davon unberührt.
            </p>
            <p>
              (9) Die Zufriedenheitsgarantie besteht unabhängig von und neben dem gesetzlichen
              Widerrufsrecht (§ 12) und etwaigen gesetzlichen Gewährleistungsansprüchen.
            </p>
          </div>

          {/* ——— §8 Vertraulichkeit und Schweigepflicht ——— */}
          <h2>§ 8 Vertraulichkeit und Schweigepflicht</h2>
          <p>
            (1) Der Coach verpflichtet sich zur umfassenden Vertraulichkeit über alle im Rahmen des
            Coachings – einschließlich des Erstgesprächs – besprochenen Inhalte. Diese Schweigepflicht
            besteht zeitlich unbegrenzt und über das Ende des Vertragsverhältnisses hinaus.
          </p>
          <p>
            (2) Eine Offenlegung von Coaching-Inhalten gegenüber Dritten – einschließlich Arbeitgebern,
            Auftraggebern, Geschäftspartnern oder Familienangehörigen des Klienten – erfolgt nur mit
            ausdrücklicher schriftlicher Einwilligung des Klienten.
          </p>
          <p>
            (3) Der Klient verpflichtet sich seinerseits, die im Rahmen des Coachings erhaltenen
            methodischen Unterlagen, Frameworks und proprietären Materialien des Coaches vertraulich
            zu behandeln und nicht an Dritte weiterzugeben.
          </p>
          <p>
            (4) Ausgenommen von der Vertraulichkeitspflicht sind ausschließlich Situationen, in denen
            gesetzliche Offenlegungspflichten bestehen oder eine akute Eigen- oder Fremdgefährdung vorliegt.
          </p>

          {/* ——— §9 Terminvereinbarung und Absage ——— */}
          <h2>§ 9 Terminvereinbarung und Absage</h2>
          <p>
            (1) Coaching-Termine werden einvernehmlich zwischen Coach und Klient vereinbart.
            Der Coach bestätigt jeden Termin in Textform.
          </p>
          <p>
            (2) <strong>Absagefrist:</strong> Terminabsagen oder -verschiebungen müssen mindestens
            {' '}<strong>48 Stunden</strong> vor dem vereinbarten Termin in Textform beim Coach
            eingehen. Die Frist berechnet sich nach dem geplanten Sitzungsbeginn.
          </p>
          <p>
            (3) <strong>Kurzfristige Absage / Nichterscheinen:</strong> Bei Absagen innerhalb von
            48 Stunden vor dem Termin oder bei unentschuldigtem Nichterscheinen wird die volle
            Vergütung für die ausgefallene Sitzung berechnet bzw. nicht erstattet. Der Coach bietet
            dem Klienten in diesem Fall nach Möglichkeit einen Ersatztermin an; ein Anspruch hierauf
            besteht nicht.
          </p>
          <p>
            (4) <strong>Absage durch den Coach:</strong> Der Coach behält sich vor, Termine aus
            wichtigem Grund (insbesondere Krankheit, höhere Gewalt) abzusagen. In diesem Fall
            wird zeitnah ein Ersatztermin angeboten. Ein Anspruch auf Schadensersatz oder
            Aufwandsentschädigung besteht in diesem Fall nicht. Bereits bezahlte Beträge für
            die ausgefallene Sitzung werden auf den Ersatztermin angerechnet.
          </p>

          {/* ——— §10 Mitwirkungspflichten des Klienten ——— */}
          <h2>§ 10 Mitwirkungspflichten des Klienten</h2>
          <p>
            (1) Der Klient erklärt sich bereit, aktiv, offen und eigenverantwortlich am
            Coaching-Prozess mitzuwirken. Die Wirksamkeit des Coachings hängt maßgeblich
            von der Mitwirkungsbereitschaft des Klienten ab.
          </p>
          <p>
            (2) Der Klient informiert den Coach wahrheitsgemäß und vollständig über alle
            relevanten Umstände, die den Coaching-Prozess beeinflussen können, insbesondere
            über bestehende gesundheitliche Einschränkungen und laufende therapeutische
            Behandlungen.
          </p>
          <p>
            (3) Sofern der Klient sich in therapeutischer, psychiatrischer oder ärztlicher
            Behandlung befindet, teilt er dies dem Coach vor Beginn des Coachings mit. Das
            Coaching ersetzt keine therapeutische oder ärztliche Behandlung. Bei Anzeichen
            einer behandlungsbedürftigen psychischen Erkrankung wird der Coach den Klienten
            an entsprechende Fachpersonen verweisen.
          </p>
          <p>
            (4) Der Klient stellt sicher, dass er zu den vereinbarten Terminen pünktlich und
            vorbereitet erscheint sowie die für Videokonferenzen erforderliche technische
            Ausstattung bereitstellt.
          </p>

          {/* ——— §11 Haftung ——— */}
          <h2>§ 11 Haftung</h2>
          <p>
            (1) Der Coach haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des
            Körpers oder der Gesundheit sowie für Schäden, die auf einer vorsätzlichen oder
            grob fahrlässigen Pflichtverletzung des Coaches oder seiner Erfüllungsgehilfen beruhen.
          </p>
          <p>
            (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten
            (Kardinalpflichten) haftet der Coach nur für den vertragstypischen, bei
            Vertragsschluss vorhersehbaren Schaden. Wesentliche Vertragspflichten sind
            solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt
            erst ermöglicht und auf deren Einhaltung der Klient regelmäßig vertrauen darf.
          </p>
          <p>
            (3) Im Übrigen ist eine Haftung des Coaches für leichte Fahrlässigkeit ausgeschlossen.
          </p>
          <p>
            (4) Der Coach haftet nicht für den Erfolg des Coachings, für die Umsetzung der
            im Coaching erarbeiteten Maßnahmen durch den Klienten oder für mittelbare
            geschäftliche Entscheidungen, die der Klient auf Grundlage des Coachings trifft.
            Unbeschadet hiervon bleibt die Zufriedenheitsgarantie gemäß § 7.
          </p>
          <p>
            (5) Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten von
            Erfüllungsgehilfen des Coaches.
          </p>
          <p>
            (6) Die Haftung nach dem Produkthaftungsgesetz und aus der Übernahme einer
            Garantie bleibt unberührt.
          </p>

          {/* ——— §12 Widerrufsrecht für Verbraucher ——— */}
          <h2>§ 12 Widerrufsrecht für Verbraucher</h2>
          <div className="highlight-box">
            <h3>Widerrufsbelehrung</h3>
            <p>
              <strong>Widerrufsrecht:</strong> Wenn Sie Verbraucher im Sinne des § 13 BGB sind,
              haben Sie das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
              Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
              Vertragsschlusses.
            </p>
            <p>
              Um Ihr Widerrufsrecht auszuüben, müssen Sie mich (Dennis Tefett,
              Marie-Curie-Weg 26a, 45966 Gladbeck, E-Mail: info@dennis-tefett.de) mittels
              einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine
              E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
            </p>
            <p>
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über
              die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>
            <p>
              <strong>Folgen des Widerrufs:</strong> Wenn Sie diesen Vertrag widerrufen,
              habe ich Ihnen alle Zahlungen, die ich von Ihnen erhalten habe, einschließlich
              der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben,
              dass Sie eine andere Art der Lieferung als die von mir angebotene, günstigste
              Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn
              Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf
              dieses Vertrags bei mir eingegangen ist. Für diese Rückzahlung verwende ich
              dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt
              haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in
              keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
            </p>
            <p>
              Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen
              soll, so haben Sie mir einen angemessenen Betrag zu zahlen, der dem Anteil der
              bis zu dem Zeitpunkt, zu dem Sie mich von der Ausübung des Widerrufsrechts
              hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen
              im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen
              entspricht.
            </p>
          </div>

          {/* ——— §13 Vertragsdauer und Kündigung ——— */}
          <h2>§ 13 Vertragsdauer und Kündigung</h2>
          <p>
            (1) Die Vertragsdauer richtet sich nach dem vereinbarten Coaching-Paket oder
            wird individuell festgelegt.
          </p>
          <p>
            (2) Bei Coaching-Paketen mit einer Laufzeit von mehr als einem Monat kann der
            Klient den Vertrag mit einer Frist von vier Wochen zum Ende des laufenden Monats
            ordentlich kündigen. Die Kündigung bedarf der Textform.
          </p>
          <p>
            (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für
            beide Parteien unberührt. Ein wichtiger Grund liegt für den Coach insbesondere
            vor, wenn:
          </p>
          <ul>
            <li>der Klient trotz Mahnung mit mehr als einer Zahlung in Verzug ist (§ 6 Abs. 5),</li>
            <li>der Klient wiederholt gegen seine Mitwirkungspflichten (§ 10) verstößt,</li>
            <li>das Vertrauensverhältnis zwischen Coach und Klient nachhaltig gestört ist,</li>
            <li>die Zufriedenheitsgarantie offensichtlich missbräuchlich in Anspruch genommen wird (§ 7 Abs. 7).</li>
          </ul>
          <p>
            (4) Im Falle einer vorzeitigen Kündigung durch den Klienten werden bereits
            erbrachte Leistungen anteilig abgerechnet. Noch nicht genutzte Sitzungen aus
            Paketbuchungen werden abzüglich einer Verwaltungsgebühr von 10 % des anteiligen
            Restbetrags erstattet. Die Erstattung erfolgt innerhalb von 14 Werktagen nach
            Zugang der Kündigung.
          </p>
          <p>
            (5) Im Falle einer außerordentlichen Kündigung durch den Coach wegen Zahlungsverzugs
            des Klienten besteht kein Erstattungsanspruch für bereits erbrachte Leistungen.
            Der Anspruch des Coaches auf die vereinbarte Vergütung bleibt bestehen.
          </p>

          {/* ——— §14 Wissens-Akademie und Mitgliederbereich (Informationsangebot) ——— */}
          <h2>§ 14 Wissens-Akademie und Mitgliederbereich (Informationsangebot)</h2>
          <p>
            (1) Die Wissens-Akademie (erreichbar unter /akademie) ist ein frei zugängliches
            Informationsangebot zur eigenständigen Nutzung. Sie stellt keinen Fernlehrgang,
            keine Ausbildung und keinen Fernunterricht im Sinne des
            Fernunterrichtsschutzgesetzes (FernUSG) dar. Die bereitgestellten Inhalte
            (Wissensmodule und Impulse) dienen ausschließlich der Information und Inspiration.
          </p>
          <p>
            (2) Es findet keine Überwachung des Lernerfolgs statt. Der Coach überprüft nicht,
            ob, wann oder wie der Nutzer die Inhalte der Wissens-Akademie nutzt. Es werden
            keine Zertifikate, Zeugnisse, Teilnahmebestätigungen oder sonstigen
            Leistungsnachweise ausgestellt. Die Nutzung der Inhalte erfolgt
            eigenverantwortlich und in beliebiger Reihenfolge.
          </p>
          <p>
            (3) Die Wissens-Akademie ist ein eigenständiges Geschäftsfeld und nicht an den
            Abschluss eines Coaching-Vertrags gekoppelt. Der Zugang erfordert keine
            Registrierung und keine Bezahlung. Die Inhalte sind ohne Anmeldung frei
            zugänglich.
          </p>
          <p>
            (4) Die in der Wissens-Akademie bereitgestellten Inhalte dienen der allgemeinen
            Information und Selbstreflexion. Sie ersetzen weder ein individuelles Coaching
            noch eine Therapie, Heilbehandlung oder professionelle Beratung. Der Coach
            übernimmt keine Gewähr für die Eignung der Inhalte für die individuelle
            Situation des Nutzers.
          </p>
          <p>
            (5) Sofern zusätzlich ein geschützter Mitgliederbereich angeboten wird, gelten
            die vorstehenden Absätze entsprechend. Auch der Mitgliederbereich stellt keinen
            Fernlehrgang im Sinne des FernUSG dar. Die Nutzung erfolgt eigenverantwortlich
            und ohne Lernerfolgskontrolle.
          </p>

          {/* ——— §15 Newsletter ——— */}
          <h2>§ 15 Newsletter</h2>
          <p>
            (1) Der Newsletter ist ein kostenloses Informationsangebot. Er dient der
            Inspiration und dem Austausch von Impulsen zur persönlichen Entwicklung. Der
            Newsletter stellt keinen Fernunterricht dar und begründet kein
            Vertragsverhältnis.
          </p>
          <p>
            (2) Die Anmeldung zum Newsletter erfolgt im sog. Double-Opt-In-Verfahren. Der
            Klient kann den Newsletter jederzeit abbestellen.
          </p>

          {/* ——— §16 Urheberrecht und Nutzungsrechte ——— */}
          <h2>§ 16 Urheberrecht und Nutzungsrechte</h2>
          <p>
            (1) Alle im Rahmen des Coachings oder über den Mitgliederbereich bereitgestellten
            Materialien, Unterlagen, Methoden, Frameworks und Inhalte sind urheberrechtlich
            geschützt und verbleiben im geistigen Eigentum des Coaches.
          </p>
          <p>
            (2) Dem Klienten wird ein einfaches, nicht übertragbares, nicht unterlizenzierbares
            Nutzungsrecht für den persönlichen Gebrauch im Rahmen des Coaching-Verhältnisses
            eingeräumt. Eine Vervielfältigung, Verbreitung, öffentliche Zugänglichmachung oder
            kommerzielle Verwertung ohne ausdrückliche schriftliche Zustimmung des Coaches ist
            unzulässig.
          </p>
          <p>
            (3) Bei Verstoß gegen die Nutzungsbeschränkungen ist der Coach berechtigt, den
            Zugang zum Mitgliederbereich unverzüglich zu sperren und Schadensersatz zu
            verlangen.
          </p>

          {/* ——— §17 Datenschutz ——— */}
          <h2>§ 17 Datenschutz</h2>
          <p>
            Die Verarbeitung personenbezogener Daten im Rahmen des Coaching-Vertragsverhältnisses
            erfolgt gemäß der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz
            (BDSG). Näheres entnehmen Sie bitte der{' '}
            <Link to="/datenschutz" className="text-teal hover:text-gold transition-colors underline underline-offset-2">
              Datenschutzerklärung
            </Link>.
          </p>

          {/* ——— §18 Sonderbestimmungen für Unternehmer ——— */}
          <h2>§ 18 Sonderbestimmungen für Unternehmer</h2>
          <p>
            (1) Soweit der Klient Unternehmer im Sinne des § 14 BGB ist, gelten ergänzend
            die folgenden Bestimmungen:
          </p>
          <p>
            (2) Ein Widerrufsrecht gemäß § 12 besteht nicht.
          </p>
          <p>
            (3) Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter
            Ausschluss des UN-Kaufrechts (CISG).
          </p>
          <p>
            (4) Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis ist,
            soweit gesetzlich zulässig, Essen.
          </p>
          <p>
            (5) Erfüllungsort für alle Leistungen ist der Sitz des Coaches (Gladbeck).
          </p>
          <p>
            (6) Aufrechnungsrechte stehen dem Klienten nur zu, wenn seine Gegenansprüche
            rechtskräftig festgestellt, unbestritten oder vom Coach anerkannt sind.
          </p>
          <p>
            (7) Für Unternehmer gilt abweichend von § 6 Abs. 2: Bei Zahlungsverzug schuldet
            der unternehmerische Klient Verzugszinsen in Höhe von <strong>9 Prozentpunkten über
            dem Basiszinssatz</strong> (§ 288 Abs. 2 BGB) zuzüglich der Mahnpauschale gemäß
            § 288 Abs. 5 BGB.
          </p>

          {/* ——— §19 Schlussbestimmungen ——— */}
          <h2>§ 19 Schlussbestimmungen</h2>
          <p>
            (1) Für Verbraucher gilt das Recht der Bundesrepublik Deutschland unter
            Beibehaltung der verbraucherschützenden Bestimmungen des Aufenthaltsstaats
            des Verbrauchers. Für Unternehmer gilt § 18 Abs. 3.
          </p>
          <p>
            (2) Für Verbraucher bestimmt sich der Gerichtsstand nach den gesetzlichen
            Vorschriften. Für Unternehmer gilt § 18 Abs. 4.
          </p>
          <p>
            (3) Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam
            sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen
            nicht. An die Stelle der unwirksamen Bestimmung tritt eine wirksame
            Bestimmung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am
            nächsten kommt (salvatorische Klausel). Gleiches gilt für eventuelle
            Regelungslücken.
          </p>
          <p>
            (4) Änderungen und Ergänzungen dieser AGB bedürfen der Textform (§ 126b BGB).
            Dies gilt auch für die Änderung dieser Textformklausel.
          </p>
          <p>
            (5) Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
              className="text-teal hover:text-gold transition-colors underline underline-offset-2">
              ec.europa.eu/consumers/odr
            </a>.
            Der Coach ist nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <div className="highlight-box mt-8">
            <p className="text-sm">
              <strong>Stand:</strong> Februar 2026. Diese AGB wurden unter Berücksichtigung der
              aktuellen Rechtsprechung zum Fernunterrichtsschutzgesetz (FernUSG), der
              Verbraucherrechterichtlinie und der DSGVO erstellt. Sie ersetzen keine
              individuelle Rechtsberatung. Der Coach empfiehlt dem Klienten, sich bei
              Unklarheiten eigenständig rechtlich beraten zu lassen.
            </p>
          </div>

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
            <Link to="/impressum" className="hover:text-text-secondary transition-colors">Impressum</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
