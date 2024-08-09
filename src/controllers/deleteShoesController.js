const prismaClient = require('../database/prismaClient.js')

const deleteShoe = async (req, res) => {
  const { id } = req.params;
  const idNumber = Number(id);

  try {
    await prismaClient.shoes.delete({
      where: {
        id: idNumber
      }
    })

    return res.status(204).end();

  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'Algo deu errado.' })
  }
}

module.exports = deleteShoe;
