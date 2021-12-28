var faker = require('faker');

var database = {lista_smestaja: []};

for (var i = 1 ; i <= 50 ; i++) {
  database.lista_smestaja.push({
    id: i,
    title: faker.commerce.productName(),
    link: faker.internet.url(),
    price: faker.commerce.price(),
    votes: Math.floor((Math.random() * 50) + 10)
  });
}

console.log(JSON.stringify(database));
