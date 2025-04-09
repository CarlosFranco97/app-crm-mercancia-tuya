/* El enrutador es un arreglo de objetos */
/* El objeto se construye con el componente y la ruta */
import RutaProtegida from "../components/RutaProtegida";
import Home from "../pages/Home";
import Login from "../pages/Login";
export let enrutador = [
  {
    path: '/home',
    element: <RutaProtegida proteger={<Home />} />
  },
  {
    path: '/',
    element: <Login />
  }
]
