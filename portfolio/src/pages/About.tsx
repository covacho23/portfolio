function About() {
  return (
    <section id="about" className="about">
      <div id="aboutme">
        <h2>Sobre mí</h2>

        <p>
          Soy desarrolladora <strong>full-stack</strong> con experiencia en la
          creación de aplicaciones web modernas y orientadas a negocio. Trabajo
          principalmente con <strong>React, TypeScript y Vite</strong>,
          construyendo soluciones claras, mantenibles y fáciles de escalar.
        </p>

        <p>
          Actualmente compagino este stack moderno con mi trabajo en entornos
          empresariales reales, desarrollando aplicaciones con{" "}
          <strong>PowerBuilder</strong>, lo que me ha dado una base sólida en
          lógica de negocio y procesos internos.
        </p>

        <p>
          Busco proyectos freelance donde aportar soluciones prácticas, bien
          estructuradas y pensadas para aportar valor real desde el primer
          momento.
        </p>
      </div>
      <div id="tecnologias">
        <section id="technologies" className="technologies">
          <h2>Tecnologías</h2>

          <div className="tech-grid">
            <div>
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Vue</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Java</li>
              </ul>
            </div>

            <div>
              <h3>Database</h3>
              <ul>
                <li>Oracle</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>SQLite</li>
                <li>Microsoft SQL Server</li>
                <li>Microsoft Access</li>
              </ul>
            </div>

            <div>
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
    </section>
  );
}

export default About;
