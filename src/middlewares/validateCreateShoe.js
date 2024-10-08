const { z } = require('zod');

const validateCreateShoe = (req, res, next) => {
  const shoeSchema = z.object({
    model: z.string().min(1, { message: 'O modelo é obrigatório.' }),
    brand: z.string().min(1, { message: 'A marca é obrigatória.' }),
    price: z.number().positive({ message: 'Preço inválido.' }),
    image_url: z.string().url({ message: 'A URL da imagem deve ser válida.' }),
    image_url_2: z.string().url({ message: 'A URL 2 da imagem deve ser válida.' }),
    image_url_3: z.string().url({ message: 'A URL 3 da imagem deve ser válida.' }),
    image_url_4: z.string().url({ message: 'A URL 4 da imagem deve ser válida.' }),
    image_url_5: z.string().url({ message: 'A URL 5 da imagem deve ser válida.' }),
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
