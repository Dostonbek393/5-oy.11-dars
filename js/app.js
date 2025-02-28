import { showLoader } from "./loader.js";

const url = "https://dummyjson.com/products";
const container = document.querySelector(".container");
const template = document.querySelector("#product-template");

function showData({ products }) {
  const row = document.createElement("div");
  row.classList.add("product");

  products.forEach((product) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".images").src = product.thumbnail;
    card.querySelector(".images").alt = product.title;
    card.querySelector(".title").textContent = product.title;
    card.querySelector(".prices").textContent = `Price: $${product.price}`;
    card.querySelector(".rating").textContent = `Rating: ⭐${product.rating}`;
    row.appendChild(card);
  });

  container.appendChild(row);
}

document.addEventListener("DOMContentLoaded", () => {
  showLoader(true);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData(data);
      showLoader(false);
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
      showLoader(false);
    });
});
