const express = require('express');
const app = express();
const port = 3000;

const products = [
  {
    id:1,
    name: "Cafe chico: $3",
    price: 3,
    cookies: 0,
    description: "Sin galleta de regalo",
    image: "images/cafeChico.png"
  },
  {
    id:2,
    name: "Cafe mediano: $4",
    price: 4,
    cookies: 3,
    description: "Con 3 galletas de regalo",
    image: "images/cafeMediano.png"
  },
  {
    id:3,
    name: "Cafe grande: $5",
    price: 5,
    cookies: 6,
    description: "Con 6 galletas de regalo",
    image: "images/cafeGrande.png"
  },
  {
    id:4,
    name: "Cafe jumbo: $7",
    price: 7,
    cookies: 10,
    description: "Con 1 paquete de regalo",
    image: "images/cafeJumbo.png"
  },
]

app.get('/api/products', (req, res) => {
  res.send(products);
})

app.use("/", express.static("public"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})