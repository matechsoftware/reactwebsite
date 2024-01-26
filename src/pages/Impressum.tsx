import React from "react"

const ScrollToTop = React.lazy(async () => import("../components/ScrollToTop"))
const SocialLink = React.lazy(async () => import("../components/SocialLink"))
const Footer = React.lazy(async () => import("../sections/Footer"))
const Header = React.lazy(async () => import("../sections/Header"))

const Impressum: React.FC = () => (
  <div>
    <ScrollToTop />
    <Header shouldBeSticky={false} />
    <section className="s-home page-hero target-section" id="home">
      <div className="overlay" />
      <div className="shadow-overlay" />

      <div className="home-content">
        <div className="row home-content__main">
          <a className="scroll-link smoothscroll" href="/#impressum">
            <h1>Impressum</h1>
          </a>
        </div>
      </div>

      <ul className="home-social">
        <SocialLink
          href="https://www.linkedin.com/company/matech-software"
          iconClass="im im-linkedin"
          linkText="LinkedIn"
        />
        <SocialLink
          href="mailto:kontakt@matech-software.de"
          iconClass="im im-mail"
          linkText="E-Mail"
        />
      </ul>
    </section>
    <section className="s-works target-section" id="impressum">
      <div className="impressumUndDatenschutz row">
        <h2 className="rechtliches-top">
          Angaben gem&auml;&szlig; &sect; 5 TMG
        </h2>
        <p>
          MaTech Software GbR
          <br />
          Enzianweg 8<br />
          83052 Bruckm&uuml;hl
        </p>

        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Maximilian Gobbel
          <br />
          Manuel K&uuml;hnle
        </p>

        <h2>Kontakt</h2>
        <a
          href="mailto:kontakt@matech-software.de"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>kontakt@matech-software.de</span>
        </a>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <h3>Credits</h3>
        <span>
          Abgewandeltes Template von{" "}
          <a href="https://www.styleshout.com/">styleshout</a>
        </span>
      </div>
    </section>
    <Footer />
  </div>
)

export default Impressum
