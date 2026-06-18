import Joi from "joi";

// Joi validation schema for user registration
const userValidationSchema = Joi.object({
  username: Joi.string().trim().min(3).max(20).required().messages({
    "string.username": "Please enter a username",
    "string.empty": "username should not be empty.",
  }),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net", "org"] } })
    .required()
    .messages({ "string.email": "Please enter a valid email address" }),
  password: Joi.string().trim().min(8).max(20).required().messages({
    "string.min": "Password should be at least 6 characters long",
    "string.max": "Password should not exceed 50 characters",
    "string.empty": "password should not be empty.",
  }),
  profilePicture: Joi.string().uri().optional(),
});

const validateUser = (req, res, next) => {
  const { error } = userValidationSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({
      status: "error",
      error: errorMessage,
    });
  }

  next();
};

// Joi validation schema for order
const orderValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Stock name is required",
    "any.required": "Stock name is required",
  }),

  qty: Joi.number().integer().positive().required().messages({
    "number.base": "Quantity must be a number",
    "number.integer": "Quantity must be an integer",
    "number.positive": "Quantity must be greater than 0",
    "any.required": "Quantity is required",
  }),

  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be greater than 0",
    "any.required": "Price is required",
  }),

  mode: Joi.string()
    .trim()
    .uppercase()
    .valid("BUY", "SELL")
    .required()
    .messages({
      "any.only": "Mode must be BUY or SELL",
      "any.required": "Mode is required",
    }),
});

const validateOrder = (req, res, next) => {
  const { error } = orderValidationSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({
      status: "error",
      error: errorMessage,
    });
  }

  next();
};

export { validateUser, validateOrder };
