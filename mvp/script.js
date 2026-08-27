let montoGuardado;
let pagadorGuardado;
let montoPorPersonaGuardado;

let anaGuardada;
let betoGuardado;
let carlaGuardada;
let diegoGuardado;

const botonActividad = document.getElementById("actividad");


botonActividad.addEventListener("click", function(){

    alert("Seleccionaste Paseo a Samaipata");

    document.getElementById("registro").style.display = "block";
});

const botonRegistrar = document.getElementById("registrar");



botonRegistrar.addEventListener("click", function(){ //function1

   const monto = document.getElementById("monto").value; 
   const pagador = document.getElementById("pagador").value;

   const anaSeleccionada = document.getElementById("ana").checked;
   const betoSeleccionado = document.getElementById("beto").checked;
   const carlaSeleccionada = document.getElementById("carla").checked;
   const diegoSeleccionado = document.getElementById("diego").checked;


   let cantidadIntegrantes = 0;

    if (anaSeleccionada) cantidadIntegrantes++;
    if (betoSeleccionado) cantidadIntegrantes++;
    if (carlaSeleccionada) cantidadIntegrantes++;
    if (diegoSeleccionado) cantidadIntegrantes++;

    
    if (cantidadIntegrantes < 2) {
    alert("Selecciona al menos dos integrantes");
    return;
}
    

    const montoPorPersona = monto / cantidadIntegrantes;

    montoGuardado = monto;
    pagadorGuardado = pagador;
    montoPorPersonaGuardado = montoPorPersona;

    anaGuardada = anaSeleccionada;
    betoGuardado = betoSeleccionado;
    carlaGuardada = carlaSeleccionada;
    diegoGuardado = diegoSeleccionado;

    document.getElementById("resumen").textContent =
    "Monto: " + monto + " - Pagador: " + pagador + " - Monto por persona: " + montoPorPersona;

    document.getElementById("confirmacion").style.display = "block";
   
   //alert("Ana seleccionada: " + anaSeleccionada);
    //alert("Diego seleccionada: " + diegoSeleccionado);
    //alert("Integrantes seleccionados: " + cantidadIntegrantes);
   //alert("Monto: " + monto + " - Pagador: " + pagador);

    //alert("Monto por persona: " + montoPorPersona);
});

const botonConfirmar = document.getElementById("confirmar");


botonConfirmar.addEventListener("click", function(){ // quien debe? cuanto? y a quien?  //function 2

    

    let textoSaldos = "";

if (anaGuardada && pagadorGuardado !== "Ana") {
    textoSaldos += "Ana debe " + montoPorPersonaGuardado + " a " + pagadorGuardado + ". ";
}

if (betoGuardado && pagadorGuardado !== "Beto") {
    textoSaldos += "Beto debe " + montoPorPersonaGuardado + " a " + pagadorGuardado + ". ";
}

if (carlaGuardada && pagadorGuardado !== "Carla") {
    textoSaldos += "Carla debe " + montoPorPersonaGuardado + " a " + pagadorGuardado + ". ";
}

if (diegoGuardado && pagadorGuardado !== "Diego") {
    textoSaldos += "Diego debe " + montoPorPersonaGuardado + " a " + pagadorGuardado + ". ";
}


document.getElementById("saldos").textContent = textoSaldos; 
document.getElementById("resultado").style.display = "block";

});