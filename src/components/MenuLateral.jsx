import { Link } from "react-router-dom"
const MenuLateral = () => {
  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: Admin</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link  className="aplicacion__menu-lateral-navegacion-item" to=''>Inicio</Link>
        <Link  className="aplicacion__menu-lateral-navegacion-item" to=''>Gestión de envíos</Link>
        <Link  className="aplicacion__menu-lateral-navegacion-item" to=''>Gestión de clientes</Link>
        <Link 
        to='/'
        type='button' className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</Link>
      </nav>
    </aside>
  )
}

export default MenuLateral