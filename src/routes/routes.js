import { Router } from "express";
import { carController } from "../controllers/carController.js";
import { sorterController } from "../controllers/sorterController.js";
import { countingController } from "../controllers/countingController.js";

const routes = new Router();

routes.get("/cars", async (req, res) => {
  try {
    carController.getAllCars(req, res);
  } catch (error) {
    console.log(`Erro: ${error}`);
    res.status(500).send(`Erro: ${error}`);
  }
});

routes.get("/cars/:year", async (req, res) => {
  switch (req.params.year) {
    case "2020":
      carController.getOnly2020Cars(req, res);
      break;
    case "2021":
      carController.getOnly2021Cars(req, res);
      break;
    default:
      res.status(404).send("Ano não encontrado");
      break;
  }
});

routes.get("/cars/sorter/:type", async (req, res) => {
  switch (req.params.type) {
    case "moreViewed":
      sorterController.moreViewedSorter(req, res);
      break;
    case "moreAddedToCart":
      sorterController.moreAddedToCart(req, res);
      break;
    default:
      res.status(404).send("Tipo de ordenação não encontrado");
      break;
  }
});

routes.get("/car/:year/:make/:model", async (req, res) => {
  try {
    carController.findUnique(req, res);
    console.log(req.params);
  } catch (error) {
    console.log(`Erro: ${error}`);
    res.status(500).send(`Erro: ${error}`);
  }
});

export default routes;
