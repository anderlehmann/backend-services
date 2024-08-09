const prismaClient = require('../database/prismaClient.js')

const validateExistingId = async (req, res, next) => {
  const { id } = req.params;
  const idNumber = Number(id);

  try {
    const validatedId = await prismaClient.shoes.findUnique({
      where: {
        id: idNumber
      }
    })

    if (!validatedId) throw new Error;

    next();

  } catch (error) {
    return res.status(404).json({ message: 'Id não encontrado.' });
  }
}

module.exports = validateExistingId;
