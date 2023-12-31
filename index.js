const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const btn = document.getElementById("boton");
const input = document.getElementById("input");
const conteiner = document.getElementById("container-cards");
const small = document.getElementById("small");

const pizza = JSON.parse(localStorage.getItem("pizza")) || null;

const saveLocalStorage = (pizza) => {
  localStorage.setItem("pizza", JSON.stringify(pizza));
};

const mostrarCard = (pizza) => {
  return `
  
  <div class="cards">
            <img class="img-cards" src="${pizza.imagen}" alt="${
    pizza.nombre
  }" />
            <h3>${pizza.nombre}</h3>
            <p class="ingredientes">${pizza.ingredientes.join(", ")}</p>
            <p class="precio">$${pizza.precio}</p>
  
  </div>
  `;
};

const handleClick = () => {
  const value = input.value;
  const pizza = pizzas.find((e) => Number(e.id) === Number(value));
  if (!pizza) {
    small.textContent = "No existe la Pizza";
    localStorage.removeItem("pizza");
    conteiner.innerHTML = "";
  }
  conteiner.innerHTML = mostrarCard(pizza);
  saveLocalStorage(pizza);
  small.textContent = "";
};

const mostrarPizza = () => {
  if (!pizza) return;
  conteiner.innerHTML = mostrarCard(pizza);
};

const init = () => {
  document.addEventListener("DOMContentLoader", mostrarPizza);
  btn.addEventListener("click", handleClick);
};

init();
