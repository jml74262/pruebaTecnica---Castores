let products = [];
let totalGalletas = 0;
let totalprice = 0;

function add(product, price, galletas) {
  console.log(product, price, galletas);
  products.push(product);
  totalprice = totalprice + price;
  totalGalletas = totalGalletas + galletas;
  document.getElementById(
    "checkout"
  ).innerHTML = `Pagar: = $${totalprice}`;
}

function pay() {
  window.alert(
    `Total: $${totalprice}, se le darán estas galletas: ${totalGalletas} galletas \n` +
      products.join(", \n")
  );
  totalGalletas = 0;
  totalprice = 0;
  products = [];
  document.getElementById(
    "checkout"
  ).innerHTML = `Total a pagar: = ${totalprice}`;
}

//---------------------//
function displayProducts(productList) {
  let productsHTML = "";
  productList.forEach((element) => {
    productsHTML +=
    `<div class="contenedor-productos">
      <h3> ${element.name}</h3>
      <img src="${element.image}">
      <h3>${element.description}</h3>
      <button class="btnProduct" onclick="add('${element.name}', ${element.price}, ${element.cookies})">Agregar</button>
    </div>`
    document.getElementById("page-content").innerHTML = productsHTML;
  });
}

window.onload = async () => {
  const productList = await (await fetch("/api/products")).json();
  console.log(productList);
  displayProducts(productList);
};
