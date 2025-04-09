import Swal from 'sweetalert2';

export const generarToken = () => {
    return "token_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
} 


export const alertaRedireccion = (fn, titulo, mensaje, icono, ruta) => {
    let timerInterval;
Swal.fire({
  title: titulo,
  html: mensaje,
  timer: 2000,
  timerProgressBar: true,
  icon: icono,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
    fn(ruta)
  }
})
}

export const alertaGenerica = (titulo, mensaje, icon) => {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icon
      });
}



