import { Car2020, Car2021 } from "../models/carCollection.js";

export const sorterController = {
  moreViewedSorter: async (req, res) => {
    try {
      const cars2020 = await Car2020.find().sort({ views: -1 });
      const cars2021 = await Car2021.find().sort({ views: -1 });
      const allViewedCars = [...cars2020, ...cars2021];
      res.json(allViewedCars);
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },

  moreAddedToCart: async (req, res) => {
    try {
      const cars2020 = await Car2020.find().sort({ addedToCart: -1 });
      const cars2021 = await Car2021.find().sort({ addedToCart: -1 });
      const allAddedToCart = [...cars2020, ...cars2021];
      res.json(allAddedToCart);
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },
};
