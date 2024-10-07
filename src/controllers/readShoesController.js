const prismaClient = require('../database/prismaClient.js')

const readShoes = async (req, res) => {
  const skip = Number(req?.query?.skip) || 0;
  const take = Number(req?.query?.take) || 15;

  const [shoes, total] = await prismaClient.$transaction([
    prismaClient.shoes.findMany({ skip, take }),
    prismaClient.shoes.count()
  ])

  const totalPages = Math.ceil(total / take);

  return res.status(200).json({ total, totalPages, shoes });

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

const readSearchShoes = async (req, res) => {
  const { searchQuery } = req.params;

  const terms = searchQuery.split(' ');
  const conditions = [];

  for (let i = 0; i <= terms.length; i += 1) {
    const brandTerms = terms.slice(0, i).join(' ');
    const modelTerms = terms.slice(i).join(' ');

    conditions.push({
      AND: [
        { brand: { contains: brandTerms, mode: 'insensitive' } },
        { model: { contains: modelTerms, mode: 'insensitive' } }
      ]
    });

    conditions.push({
      AND: [
        { brand: { contains: modelTerms, mode: 'insensitive' } },
        { model: { contains: brandTerms, mode: 'insensitive' } }
      ]
    });
  }

  try {
    const results = await prismaClient.shoes.findMany({
      where: {
        OR: conditions
      }
    });

    return res.status(200).json(results);

  } catch (error) {
    console.log(error.message);
    return res.status(500).json('message: Erro no servidor.');
  };
};

module.exports = {
  readShoes,
  readShoe,
  readSearchShoes
};
