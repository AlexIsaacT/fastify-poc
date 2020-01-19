// Import our Controllers
const carController = require("../controllers/carController");

const routes = [
  {
    method: "GET",
    url: "/api/cars",
    handler: carController.getCars
  },
  {
    method: "GET",
    url: "/api/cars/:id",
    handler: carController.getSingleCar
  },
  {
    method: "POST",
    url: "/api/cars",
    handler: carController.addCar,
    schema: {
      title: String,
      brand: String,
      price: String,
      age: Number,
      services: {
        type: Map,
        of: String
      }
    }
  },
  {
    method: "PUT",
    url: "/api/cars/:id",
    handler: carController.updateCar
  },
  {
    method: "DELETE",
    url: "/api/cars/:id",
    handler: carController.deleteCar
  }
];

module.exports = routes;
