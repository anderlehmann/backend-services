const prismaClient = require('../database/prismaClient.js')

const updateShoe = async (req, res) => {
  const { id } = req.params;
  const { model, brand, price, image_url, image_url_2, image_url_3, image_url_4, image_url_5 } = req.body;

  const idNumber = Number(id);

  try {
    const updatedShoe = await prismaClient.shoes.update({
      where: {
        id: idNumber
      },
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

    return res.status(200).json(updatedShoe);

  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar item.' });
  };
};

module.exports = updateShoe;
