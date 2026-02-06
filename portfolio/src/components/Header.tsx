import { useState } from "react"

function Cabecera() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="header">
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <ul className={`menu ${open ? "open" : ""}`}>
        <li><a href="#hero" onClick={() => setOpen(false)}>Inicio</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>Sobre mí</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Proyectos</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Cabecera
