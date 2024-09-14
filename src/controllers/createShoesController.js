const prismaClient = require('../database/prismaClient.js')

const createShoe = async (req, res) => {
  const { model, brand, price, image_url, image_url_2, image_url_3, image_url_4, image_url_5 } = req.body;

  try {
    const shoe = await prismaClient.shoes.create({
      data: {
        model,
        brand,
        price,
        image_url,
        image_url_2,
        image_url_3,
        image_url_4,
        image_url_5
      }
    });

    return res.status(201).json(shoe);

  } catch (error) {
    console.log(error.message)
    res.status(500).json('message: Erro no servidor.');
  };
};

module.exports = createShoe;
