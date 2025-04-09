import { Link, useNavigate } from "react-router-dom"
import { alertaRedireccion } from "../../helpers/generarToken"
const MenuLateral = () => {
  const redireccion = useNavigate();

  const cerrarSesion = () => {
    alertaRedireccion(redireccion, "Cerrando sesión","Estamos cerrando sesión" , "success", "/");
    localStorage.removeItem('token');
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: Admin</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link  className="aplicacion__menu-lateral-navegacion-item" to=''>Inicio</Link>
        <Link  className="aplicacion__menu-lateral-navegacion-item" to=''>Gestión de envíos</Link>
        <Link  className="aplicacion__menu-lateral-navegacion-item" to=''>Gestión de clientes</Link>
        <button 
        onClick={
          () => cerrarSesion()
        }
        to='/'
        type='button' className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral