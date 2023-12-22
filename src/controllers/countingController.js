import { Car2020, Car2021 } from "../models/carCollection.js";

export const countingController = {
  incrementView: async (req, res) => {
    try {
      const { year, make, model } = req.params;
      switch (year) {
        case "2020":
          Car2020.findOneAndUpdate({ make, model }, { $inc: { views: 1 } });
          break;
        case "2021":
          Car2021.findOneAndUpdate({ make, model }, { $inc: { views: 1 } });
          break;
        default:
          res.status(404).send("Ano não encontrado");
          break;
      }
      res.sendStatus(200);
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },
  incrementCart: async (req, res) => {
    try {
      console.log(req.params);
      const { year, make, model } = req.params;
      switch (year) {
        case "2020":
          await Car2020.findOneAndUpdate(
            { make, model },
            { $inc: { addedToCart: 1 } },
            { new: true }
          );
          break;
        case "2021":
          await Car2021.findOneAndUpdate(
            { make, model },
            { $inc: { addedToCart: 1 } },
            { new: true }
          );
          break;
        default:
          res.status(404).send("Ano não encontrado");
          return;
      }
      res.sendStatus(200);
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },
};
