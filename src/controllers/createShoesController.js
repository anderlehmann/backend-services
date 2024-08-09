const prismaClient = require('../database/prismaClient.js')

const createShoe = async (req, res) => {
  const { model, brand, price, image_url } = req.body;

  try {
    const shoe = await prismaClient.shoes.create({
      data: {
        model,
        brand,
        price,
        image_url
      }
    });

    return res.status(201).json(shoe);

  } catch (error) {
    res.status(500).json('message: Erro no servidor.');
  };
};

module.exports = createShoe;
