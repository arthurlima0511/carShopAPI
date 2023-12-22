import { mostViewed, moreAddedToCart } from "../models/sorterCollection.js";

export const sortController = {
  mostViewedSorter: async (req, res) => {
    try {
      const mostViewedSorted = await mostViewed.find().sort({ views: -1 });
      console.log(mostViewedSorted);
      return mostViewedSorted;
    } catch (error) {
      console.log(`Erro: ${error}`);
      res.status(500).send(`Erro: ${error}`);
    }
  },
};
