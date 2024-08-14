const prismaClient = require('../database/prismaClient.js')

const readShoes = async (req, res) => {
  const skip = Number(req?.query?.skip) || 0;
  const take = Number(req?.query?.take) || 15;

  const [users, total] = await prismaClient.$transaction([
    prismaClient.shoes.findMany({ skip, take }),
    prismaClient.shoes.count()
  ])

  const totalPages = Math.ceil(total / take);

  return res.status(200).json({ total, totalPages, users });

  // const shoe = await prismaClient.shoes.findMany({});
  // return res.json(shoe);
};

const readShoe = async (req, res) => {
  const { id } = req.params;

  try {
    const idNumber = Number(id);

    const shoe = await prismaClient.shoes.findUnique({
      where: {
        id: idNumber
      }
    });

    if (!shoe) {
      return res.status(404).json({ message: 'Item não encontrado.' });
    };

    return res.status(200).json(shoe);

  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor.' })
  };
};

module.exports = {
  readShoes,
  readShoe
};
