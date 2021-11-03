//Mi proyecto únicamente va a contar con un sólo archivo de javascript, por lo que no es necesario importar ningun otro archivo.
//Toda mi aplicación será dentro de la etiqueta <app></app> con id "root" y class "root"

// ---> Seleccionando los elementos que voy a utilizar <---
const header: any = document.getElementById("header");
const root: any = document.getElementById("root");
const apiKey: string = "Aqui va tu api key";

// ---> Funcionalidad para agregar el titulo a la cabecera <---
const titulo_aplicacion: string = "Bienvenido a mi aplicación del clima";
const creando_elemento_titulo: HTMLHeadingElement =
  document.createElement("h1");
creando_elemento_titulo.className = "titulo_principal";
creando_elemento_titulo.innerText = titulo_aplicacion;
header.appendChild(creando_elemento_titulo);

// ---> Funcionalidad para agregar el formulario de busqueda de temperatura por ciudad <---

// ---> Creando los elementos del formulario

const creando_elemento_input: HTMLInputElement =
  document.createElement("input");

//En estos parrafos se cargaran los datos
const creando_parrafo_temperatura: HTMLParagraphElement =
  document.createElement("p");
const creando_parrafo_ciudad: HTMLParagraphElement =
  document.createElement("p");
const creando_parrafo_temperaturaMin: HTMLParagraphElement =
  document.createElement("p");
const creando_parrafo_temperaturaMax: HTMLParagraphElement =
  document.createElement("p");
const creando_parrafo_humedad: HTMLParagraphElement =
  document.createElement("p");

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
creando_elemento_input.addEventListener("change", (event) => {
  let ciudad: string = creando_elemento_input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
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
        "Temperatura: " + `${data.main.temp} ` + "°C";

      creando_parrafo_ciudad.innerHTML = "Ciudad: " + `${data.name}`;

      creando_parrafo_temperaturaMin.innerHTML =
        "Temperatura minima: " + `${data.main.temp_min} ` + "°C";

      creando_parrafo_temperaturaMax.innerHTML =
        "Temperatura maxima: " + `${data.main.temp_max} ` + "°C";

      creando_parrafo_humedad.innerHTML =
        "Humedad: " + `${data.main.humidity} ` + "%";
    })
    .catch((error) => {
        console.log(error);
    });
});
