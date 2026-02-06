function About() {
  return (
    <section id="about" className="about">
      <h2>Sobre mí</h2>
      <div className="about-layout">
        <div id="aboutme">
          <p>
            Soy desarrolladora <strong>full-stack</strong> y me encanta crear aplicaciones web 
            que hagan la vida más fácil a los negocios. Construyo soluciones claras, mantenibles y fáciles de escalar.
          </p>

          <p>
            En mi día a día también desarrollo aplicaciones empresariales, 
            lo que me ha dado una buena base para entender la lógica de negocio y cómo optimizar procesos.
          </p>

          <p>
            Busco proyectos donde aportar soluciones prácticas, bien
            estructuradas y pensadas para aportar valor real desde el primer
            momento.
          </p>
          <div className="languages-card">
            <h3>Idiomas</h3>

            <div className="language-group">
              <div className="language-header">
                <span>Catalán / Castellano</span>
                <span>Nativo</span>
              </div>
              <div className="language-bar">
                <div className="language-level level-100"></div>
              </div>
            </div>

            <div className="language-group">
              <div className="language-header">
                <span>Inglés</span>
                <span>Profesional</span>
              </div>
              <div className="language-bar">
                <div className="language-level level-70"></div>
              </div>
            </div>
          </div>

        </div>
        <div id="tecnologias">
          <section id="technologies" className="technologies">
            <div className="tech-grid">
              <div className="grup_tecno">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div className="grup_tecno">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PHP</li>
                  <li>Powerbuilder</li>
                </ul>
              </div>

              <div className="grup_tecno">
                <h3>Database</h3>
                <ul>
                  <li>Oracle</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>

              <div className="grup_tecno">
                <h3>Tools</h3>
                <ul>
                  <li>Git</li>
                  <li>Postman</li>
                  <li>WordPress</li>
                  <li>Odoo</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
