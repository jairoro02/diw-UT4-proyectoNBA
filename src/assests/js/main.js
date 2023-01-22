const btnCambio = document.querySelector("#cambio");

btnCambio.addEventListener('click', () =>{
    document.body.classList.toggle('oscuro');
    btnCambio.classList.toggle('active')
})

