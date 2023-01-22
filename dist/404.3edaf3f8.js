const btnCambio = document.querySelector("#cambio");
btnCambio.addEventListener("click", ()=>{
    document.body.classList.toggle("oscuro");
    btnCambio.classList.toggle("active");
});
var imagen = document.getElementById("imagen");
var x = 0;
var y = 0;
var xSpeed = 3;
var ySpeed = 3;
function mover() {
    x += xSpeed;
    y += ySpeed;
    if (x + imagen.clientWidth > window.innerWidth || x < 0) xSpeed = -xSpeed;
    if (y + imagen.clientHeight > window.innerHeight || y < 0) ySpeed = -ySpeed;
    imagen.style.left = x + "px";
    imagen.style.top = y + "px";
    requestAnimationFrame(mover);
}

//# sourceMappingURL=404.3edaf3f8.js.map
