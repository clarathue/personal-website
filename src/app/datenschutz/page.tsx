import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Title } from '@/components/ui/title';

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title as="h1" variant="page" animate={true}>
            Datenschutzerklärung
          </Title>
          
          <div className="prose prose-lg max-w-none">            
          <p className="mb-6"> </p>
            <Title as="h2" animate={true}>
              Datenerfassung auf dieser Website
            </Title>
          
            <Title as="h5" variant="subsection" animate={true}>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </Title>
            <p className="mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Wie werden Ihre Daten erfasst?
            </Title>
            <p className="mb-6">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Kontaktformular eingeben.
            </p>
            <p className="mb-6">
              Andere Daten werden automatisch beim Besuch der Website erfasst, vor allem technische Daten (z. B. IP-Adresse, Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Sie entstehen beim Hosting-Anbieter (siehe „Hosting“), beim Laden von Schriftarten von Google (siehe „Google Fonts“), beim Absenden des Kontaktformulars bei EmailJS (siehe „EmailJS“), wenn Sie den Spamschutz laden, bei Google (siehe „Google reCAPTCHA“) und, nachdem Sie „Termin vereinbaren“ geklickt haben, bei Calendly (siehe „Calendly“).
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Wofür werden Ihre Daten verwendet?
            </Title>
            <p className="mb-6">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Die Angaben aus dem Kontaktformular verwende ich, um Ihre Anfrage zu bearbeiten. Diese Website setzt selbst keine Cookies und nutzt keine Analyse- oder Tracking-Dienste. Ob Calendly (nach dem Öffnen des Terminfensters) oder Google reCAPTCHA (nach dem Laden des Spamschutzes) Cookies oder ähnliche Speicherungen auf Ihrem Gerät vornehmen, bestimmen die Anbieter (siehe „Calendly“ und „Google reCAPTCHA“).
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </Title>
            <p className="mb-6">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Alle Rechte im Einzelnen finden Sie unter „Ihre Rechte“.
            </p>

            <Title as="h2" variant="section" animate={true}>
              Hosting
            </Title>
            <p className="mb-6">
              Die Inhalte meiner Website werden bei GitHub Pages gehostet. Anbieter ist die GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA. In seiner Datenschutzerklärung nennt GitHub je nach Fall auch die GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam, Niederlande, als Verantwortliche.
            </p>
            <p className="mb-6">
              Beim Aufruf der Website verarbeitet GitHub technisch bedingt Ihre IP-Adresse und weitere Verbindungsdaten (z. B. Zeitpunkt des Abrufs, Browser, aufgerufene Seite). Da der Anbieter seinen Sitz in den USA hat, kann dabei eine Übermittlung in ein Land außerhalb der EU stattfinden.
            </p>

            <Title as="h2" variant="section" animate={true}>
              Allgemeine Hinweise und Pflichtinformationen
            </Title>
            
            <Title as="h5" variant="subsection" animate={true}>
              Datenschutz
            </Title>
            <p className="mb-6">
              Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Hinweis zur verantwortlichen Stelle
            </Title>
            <p className="mb-6">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-6">
              Clara Thümecke<br />
              Thümecke Business Intelligence Solutions<br />
              Kazmairstraße 59<br />
              80339 München<br />
              E-Mail: clara@thuemecke.net
            </p>

            <Title as="h2" variant="section" animate={true}>
              Datenerfassung auf dieser Website
            </Title>
            
            <Title as="h5" variant="subsection" animate={true}>
              Kontaktformular
            </Title>
            <p className="mb-6">
              Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Der Versand läuft über den Dienst EmailJS (siehe unten) und endet in meinem E-Mail-Postfach. Vor dem Absenden müssen Sie den Spamschutz Google reCAPTCHA laden und bestätigen (siehe „Google reCAPTCHA“).
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              EmailJS
            </Title>
            <p className="mb-6">
              Ich nutze EmailJS für die Verarbeitung von Kontaktformularen. Anbieter ist die EmailJS Pte. Ltd. mit Rechtssitz in Singapur. Laut der Datenschutzerklärung von EmailJS liegen alle Server in den USA (AWS); als Unterauftragsverarbeiter nennt EmailJS Cloudflare, AWS, Redis, Zendesk und Sentry. Ihre Angaben aus dem Formular (Name, E-Mail-Adresse, Nachricht) und Ihre IP-Adresse werden dabei an EmailJS übermittelt und dort verarbeitet, um die Nachricht an mein Postfach zuzustellen. Die Übermittlung stützt sich nach Angabe von EmailJS auf die EU-Standardvertragsklauseln; die Auftragsverarbeitungsvereinbarung gilt über die Nutzungsbedingungen von EmailJS und ist hier einsehbar:{' '}
              <a href="https://www.emailjs.com/legal/data-protection-agreement/" className="text-tech-blue hover:text-tech-darkBlue">
                https://www.emailjs.com/legal/data-protection-agreement/
              </a>
            </p>
            <p className="mb-6">
              Die Datenschutzerklärung von EmailJS finden Sie unter:{' '}
              <a href="https://www.emailjs.com/legal/privacy-policy/" className="text-tech-blue hover:text-tech-darkBlue">
                https://www.emailjs.com/legal/privacy-policy/
              </a>
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Google Fonts
            </Title>
            <p className="mb-6">
              Diese Website lädt die Schriftart „Inter“ beim Aufruf von den Servern von Google (fonts.googleapis.com und fonts.gstatic.com). Die Schrift ist bewusst nicht auf meinem eigenen Server abgelegt, sondern wird von Google geladen. Dabei überträgt Ihr Browser Ihre IP-Adresse und technische Verbindungsdaten an Google. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Muttergesellschaft ist die Google LLC in den USA, sodass eine Übermittlung in ein Land außerhalb der EU nicht ausgeschlossen werden kann.
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Google reCAPTCHA
            </Title>
            <p className="mb-6">
              Das Kontaktformular ist mit Google reCAPTCHA (Version 2, Checkbox) gegen automatisierten Missbrauch und Spam geschützt. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Muttergesellschaft ist die Google LLC in den USA, sodass eine Übermittlung in ein Land außerhalb der EU nicht ausgeschlossen werden kann.
            </p>
            <p className="mb-6">
              Das Google-Skript wird nicht beim Aufruf der Seite geladen, sondern erst, wenn Sie im Formular auf „Spamschutz laden“ klicken. Erst dann übermittelt Ihr Browser Daten an Google, insbesondere Ihre IP-Adresse und technische Angaben zu Browser und Gerät sowie weitere Daten, die Google für die Prüfung auswertet. Nach der Bestätigung erhält der Browser von Google ein Prüfergebnis (Token). Dieses Token wird beim Absenden zusammen mit Ihren Formulardaten an EmailJS übermittelt; EmailJS lässt es bei Google prüfen, bevor die Nachricht zugestellt wird.
            </p>
            <p className="mb-6">
              Die Verarbeitung beruht auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG), die Sie mit dem Klick auf „Spamschutz laden“ erteilen. Sie gilt nur für den aktuellen Besuch der Seite und wird nicht gespeichert. Ohne Einwilligung kann das Formular nicht abgesendet werden; Sie können mir stattdessen direkt an clara@thuemecke.net schreiben. Sie können die Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie den Browser-Tab schließen oder die Seite neu laden (dann wird nichts mehr an Google übertragen) oder mir eine E-Mail schreiben. Näheres steht in der Datenschutzerklärung von Google:{' '}
              <a href="https://policies.google.com/privacy" className="text-tech-blue hover:text-tech-darkBlue">
                https://policies.google.com/privacy
              </a>
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Calendly
            </Title>
            <p className="mb-6">
              Auf der Seite „Kontakt“ können Sie über „Termin vereinbaren“ ein Fenster mit dem Buchungsdienst Calendly öffnen. Erst mit diesem Klick lädt Ihr Browser Inhalte von calendly.com; dabei erhält Calendly u. a. Ihre IP-Adresse. Was Sie dort zur Buchung eingeben (z. B. Name, E-Mail-Adresse), verarbeitet Calendly, und es wird mir mitgeteilt. Anbieter ist Calendly, LLC in den USA; in der Datenschutzerklärung von Calendly steht als Anschrift 115 E Main St., Ste A1B, Buford, GA 30518, USA. Für die Buchung selbst handelt Calendly nach eigener Angabe als Auftragsverarbeiter für mich, für den Besuch der Calendly-Seite als Verantwortlicher. Auf der Seite „HR“ führt ein Link zu Calendly; erst nach Ihrem Klick verlassen Sie meine Website und gelangen zu Calendly. Näheres steht in der Datenschutzerklärung von Calendly:{' '}
              <a href="https://calendly.com/privacy" className="text-tech-blue hover:text-tech-darkBlue">
                https://calendly.com/privacy
              </a>
            </p>

            <Title as="h2" variant="section" animate={true}>
              Rechtsgrundlagen, Speicherdauer und Drittlandübermittlung
            </Title>
            <p className="mb-6">
              Rechtsgrundlagen: Das Hosting bei GitHub und das Laden der Schrift von Google beruhen auf Art. 6 Abs. 1 lit. f DSGVO (mein berechtigtes Interesse an einer sicheren, schnellen und einheitlich gestalteten Bereitstellung der Website). Das Kontaktformular samt EmailJS beruht auf Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen zielt, sonst auf Art. 6 Abs. 1 lit. f DSGVO (mein berechtigtes Interesse, Anfragen zu bearbeiten). Das Laden des Spamschutzes beruht auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG; siehe „Google reCAPTCHA“). Die Terminbuchung über Calendly beruht auf Art. 6 Abs. 1 lit. b DSGVO, soweit sie auf Ihre Anfrage erfolgt, sonst auf Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="mb-6">
              Speicherdauer: Ihre Kontaktanfrage speichere ich so lange, wie es zur Bearbeitung nötig ist, und lösche sie danach. Entsteht daraus eine Geschäftsbeziehung, gelten für die dazugehörige Korrespondenz (Handels- und Geschäftsbriefe) Aufbewahrungsfristen von sechs Jahren (§ 257 HGB, § 147 AO); bis dahin bleibt sie gesperrt für andere Zwecke. Die Einwilligung in den Spamschutz gilt nur für den aktuellen Seitenbesuch. Wie lange GitHub, Google, EmailJS und Calendly Daten speichern, richtet sich nach deren Datenschutzerklärungen.
            </p>
            <p className="mb-6">
              Übermittlung in Drittländer: GitHub, Google (auch für reCAPTCHA) und Calendly geben in ihren Datenschutzerklärungen an, dem EU-U.S. Data Privacy Framework (DPF) anzugehören (bei Google: Google LLC), und sich daneben, wo erforderlich, auf die EU-Standardvertragsklauseln zu stützen; für Calendly nennt dessen Erklärung beides. Ob ein Anbieter aktuell zertifiziert ist, können Sie auf https://www.dataprivacyframework.gov/list prüfen. Bei EmailJS stützt sich die Übermittlung nach dessen Angaben auf die EU-Standardvertragsklauseln (siehe „EmailJS“).
            </p>

            <Title as="h2" variant="section" animate={true}>
              Ihre Rechte
            </Title>
            <p className="mb-6">
              Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Eine erteilte Einwilligung (Spamschutz) können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für meinen Sitz in München ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach (Postanschrift: Postfach 1349, 91504 Ansbach), zuständig. Bei Fragen zum Datenschutz wenden Sie sich an clara@thuemecke.net.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz; 