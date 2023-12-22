import { Car2020, Car2021 } from "../models/carCollection.js";

export const carController = {
  getAllCars: async (req, res) => {
    try {
      const cars2020 = await Car2020.find();
      const cars2021 = await Car2021.find();
      const allCars = [...cars2020, ...cars2021];
      res.json(allCars);
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },

  getOnly2020Cars: async (req, res) => {
    try {
      const cars2020 = await Car2020.find();
      res.json(cars2020);
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },

  getOnly2021Cars: async (req, res) => {
    try {
      const cars2021 = await Car2021.find();
      res.json(cars2021);
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },

  findUnique: async (req, res) => {
    try {
      const { year, make, model } = req.params;
      switch (year) {
        case "2020":
          await Car2020.findOneAndUpdate(
            { make, model },
            { $inc: { views: 1 } }
          );
          res.json(await Car2020.findOne({ make, model }));
          break;

        case "2021":
          await Car2021.findOneAndUpdate(
            { make, model },
            { $inc: { views: 1 } }
          );
          res.json(await Car2021.findOne({ make, model }));
          break;

        default:
          res.status(404).send("Ano não encontrado");
          break;
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },
};
