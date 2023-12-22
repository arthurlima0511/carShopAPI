import { Car2020, Car2021 } from "../models/carCollection.js";

export const carController = {
  getAllCars: async (req, res) => {
    try {
      const cars2020 = await Car2020.find();
      const cars2021 = await Car2021.find();
      res.json({ cars2020, cars2021 });
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },

  getOnly2020Cars: async (req, res) => {
    try {
      const cars2020 = await Car2020.find();
      res.json({ cars2020 });
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },

  getOnly2021Cars: async (req, res) => {
    try {
      const cars2021 = await Car2021.find();
      res.json({ cars2021 });
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },
};
