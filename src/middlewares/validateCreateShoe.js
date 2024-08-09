const { z } = require('zod');

const validateCreateShoe = (req, res, next) => {
  const shoeSchema = z.object({
    model: z.string().min(1, { message: 'O modelo é obrigatório.' }),
    brand: z.string().min(1, { message: 'A marca é obrigatória.' }),
    price: z.number().positive({ message: 'Preço inválido.' }),
    image_url: z.string().url({ message: 'A URL da imagem deve ser válida.' })
  })

  try {
    shoeSchema.parse(req.body);

    next();

  } catch (error) {
    return res.status(400).json({
      errors: error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }
}

module.exports = validateCreateShoe;