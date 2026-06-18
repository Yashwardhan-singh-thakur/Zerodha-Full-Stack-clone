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

export { validateUser };
