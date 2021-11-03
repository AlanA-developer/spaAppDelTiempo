"use strict";
//Mi proyecto únicamente va a contar con un sólo archivo de javascript, por lo que no es necesario importar ningun otro archivo.
//Toda mi aplicación será dentro de la etiqueta <app></app> con id "root" y class "root"
// ---> Seleccionando los elementos que voy a utilizar <---
var header = document.getElementById("header");
var root = document.getElementById("root");
var apiKey = "Aqui va tu api key";
// ---> Funcionalidad para agregar el titulo a la cabecera <---
var titulo_aplicacion = "Bienvenido a mi aplicación del clima";
var creando_elemento_titulo = document.createElement("h1");
creando_elemento_titulo.className = "titulo_principal";
creando_elemento_titulo.innerText = titulo_aplicacion;
header.appendChild(creando_elemento_titulo);
// ---> Funcionalidad para agregar el formulario de busqueda de temperatura por ciudad <---
// ---> Creando los elementos del formulario
var creando_elemento_input = document.createElement("input");
//En estos parrafos se cargaran los datos
var creando_parrafo_temperatura = document.createElement("p");
var creando_parrafo_ciudad = document.createElement("p");
var creando_parrafo_temperaturaMin = document.createElement("p");
var creando_parrafo_temperaturaMax = document.createElement("p");
var creando_parrafo_humedad = document.createElement("p");
// ---> Agregando las clases y atributos al formulario
creando_elemento_input.className = "input_formulario";
creando_elemento_input.setAttribute("placeholder", "Ingresa tu ciudad");
// ---> Agregando los elementos del formulario al root
root.appendChild(creando_elemento_input);
root.appendChild(creando_parrafo_ciudad);
root.appendChild(creando_parrafo_temperatura);
root.appendChild(creando_parrafo_temperaturaMin);
root.appendChild(creando_parrafo_temperaturaMax);
root.appendChild(creando_parrafo_humedad);
// ---> Consumiendo el servicio de clima <---
creando_elemento_input.addEventListener("change", function (event) {
    var ciudad = creando_elemento_input.value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&lang=es&units=metric&appid=" + apiKey;
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        // ---> Funcionalidad para pintar en pantalla los datos de la API <---
        //Agregando clases a los parrafos
        creando_parrafo_temperatura.className = "parrafo_datos";
        creando_parrafo_temperaturaMin.className = "parrafo_datos";
        creando_parrafo_temperaturaMax.className = "parrafo_datos";
        creando_parrafo_ciudad.className = "parrafo_datos";
        creando_parrafo_humedad.className = "parrafo_datos";
        //Agregando valor de texto a los parrafos
        creando_parrafo_temperatura.innerHTML =
            "Temperatura: " + (data.main.temp + " ") + "°C";
        creando_parrafo_ciudad.innerHTML = "Ciudad: " + ("" + data.name);
        creando_parrafo_temperaturaMin.innerHTML =
            "Temperatura minima: " + (data.main.temp_min + " ") + "°C";
        creando_parrafo_temperaturaMax.innerHTML =
            "Temperatura maxima: " + (data.main.temp_max + " ") + "°C";
        creando_parrafo_humedad.innerHTML =
            "Humedad: " + (data.main.humidity + " ") + "%";
    })
        .catch(function (error) {
        console.log(error);
    });
});
