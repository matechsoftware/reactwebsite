import React from 'react';
import htmlicon from '../images/technologies/html-icon.png';
import bootstrapicon from '../images/technologies/bootstrap-4-icon.png';
import csharpicon from '../images/technologies/c-sharp-programming-language-icon.png';
import cssicon from '../images/technologies/css-icon.png';
import javaicon from '../images/technologies/java-programming-language-icon.png';
import javascripticon from '../images/technologies/javascript-programming-language-icon.png';
import dotneticon from '../images/technologies/microsoft-dot-net-icon.png';
import pythonicon from '../images/technologies/python-programming-language-icon.png';
import sqlservericon from '../images/technologies/sql-server-icon.png';
import typescripticon from '../images/technologies/typescript-programming-language-icon.png';
import mysqlicon from '../images/technologies/mysql-icon.png';
import wordpressicon from '../images/technologies/wordpress-icon.png';

const Services: React.FC = () => {
  return (
    <div>
      <section id="services" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Leistungen</h3>
            <h1>In guten Händen.</h1>
            <p className="lead">
              Willkommen bei uns! Wir sind hier, um Ihnen zu helfen und Ihnen
              eine maßgeschneiderte Lösung zu bieten, die genau auf Ihre
              Bedürfnisse zugeschnitten ist. Wir verstehen, dass jedes Projekt
              einzigartig ist und wir sind voller Begeisterung, Ihnen zu zeigen,
              wie wir Ihnen helfen können.
            </p>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full left">
            <h2>Unsere Leistungen im Überblick:</h2>
            <div className=" services">
              <div className="service">
                <h3>Unternehmenswebsite</h3>
                <p>
                  Erstellung einer modernen und ansprechenden Website mit
                  Content Management System (z.B. WordPress) oder individueller
                  Programmierung. So stellen wir sicher, dass Ihre Website
                  perfekt zu Ihrem Unternehmen passt.
                </p>
              </div>

              <div className="service">
                <h3>Webhosting</h3>
                <p>
                  Wir übernehmen die sichere und zuverlässige Bereitstellung
                  Ihrer Website auf unseren Servern. Backups und regelmäßige
                  Wartung sorgen dafür, dass Ihre Website immer reibungslos
                  läuft.
                </p>
              </div>

              <div className="service">
                <h3>Suchmaschinenoptimierung (SEO)</h3>
                <p>
                  Wir sorgen dafür, dass Ihre Website in den Suchergebnissen von
                  Google und anderen Suchmaschinen besser gefunden wird. Damit
                  erhöhen wir die Sichtbarkeit Ihrer Website und steigern die
                  Anzahl der Besucher.
                </p>
              </div>
            </div>
          </div>

          <div className="col-six tab-full right technologies">
            <h2>
              Wissen.
              <br />
              Erfahrung.
              <br />
              Perfekt vereint.
            </h2>
            <div className="flex flex-wrap justify-center">
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="100"
                  alt="HTML 5 Logo"
                  src={htmlicon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="100"
                  alt="Bootstrap 4 Logo"
                  src={bootstrapicon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="200"
                  alt="C# Logo"
                  src={csharpicon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="300"
                  alt="Typescript Logo"
                  src={typescripticon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="400"
                  alt=".NET Logo"
                  src={dotneticon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="500"
                  alt="Python Logo"
                  src={pythonicon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  alt="javalogo"
                  src={javaicon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="700"
                  alt="JavaScript Logo"
                  src={javascripticon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="800"
                  alt="csslogo"
                  src={cssicon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="900"
                  alt="Wordpress Logo"
                  src={wordpressicon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  alt="MySQL Logo"
                  src={mysqlicon}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  alt="SQL Server Logo"
                  src={sqlservericon}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;