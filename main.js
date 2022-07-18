const mostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    document.getElementById("fecha").innerHTML = `${diaSemana}, ${dia} ${mes} / ${año}`
    // "classList" devuelve una lista con las clases CSS que se están usando
    // "toggle" funciona como un interruptor, agrega o quita el estilo según el caso
    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = "0" + hora;
    return hora;
}

setInterval(mostrarReloj, 1000);