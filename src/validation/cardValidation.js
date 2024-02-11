import Joi from "joi";

const titleSchema= Joi.object({
  title : Joi.string().min(2).max(256).required().messages({
    'string.base': `Title should be a string`,
    'string.min': `Title should have a minimum length of 2`,
    'string.max': `Title should have a maximum length of 256`,
    'any.required': `Title is required`,
  })
})
const validateTitleSchema = (title) => titleSchema.validate(title);

const subtitleSchema = Joi.object({
  subtitle : Joi.string().min(2).max(256).required().messages({
    'string.base': `Subtitle should be a string`,
    'string.min': `Subtitle should have a minimum length of 2`,
    'string.max': `Subtitle should have a maximum length of 256`,
    'any.required': `Subtitle is required`,
  })
})
const validateSubtitleSchema = (subtitle)=> subtitleSchema.validate(subtitle);

const descriptionSchema = Joi.object({
  description: Joi.string().min(2).max(1024).required().messages({
    'string.base': `Description should be a string`,
    'string.min': `Description should have a minimum length of 2`,
    'string.max': `Description should have a maximum length of 1024`,
    'any.required': `Description is required`,
  })
});
const validateDescriptionSchema = (description)=> descriptionSchema.validate(description);

const phoneSchema = Joi.object({
  phone: Joi.string().min(9).max(11).required().messages({
    'string.base': `Phone should be a string`,
    'string.min': `Phone should have a minimum length of 9`,
    'string.max': `Phone should have a maximum length of 11`,
    'any.required': `Phone is required`,
  })
})
const validatePhoneSchema = (phone) => phoneSchema.validate(phone);

const emailSchema = Joi.object({
  email : Joi.string().min(5).email({ tlds: { allow: false } }).required().messages({
    'string.base': `Email should be a string`,
    'string.min': `Email should have a minimum length of 5`,
    'string.email': `Email should be a valid email address`,
    'any.required': `Email is required`,
  })
})
const validateEmailSchema = (email) => emailSchema.validate(email);

const webSchema = Joi.object({
  web: Joi.string().min(14).allow("").messages({
    'string.base': `Web should be a string`,
    'string.min': `Web should have a minimum length of 14`,
  })
});
const validateWebSchema = (web) => webSchema.validate(web);

const urlSchema = Joi.object({
  url : Joi.string().min(14).required().messages({
    'string.base': `URL should be a string`,
    'string.min': `URL should have a minimum length of 14`,
    'any.required': `URL is required`,
  })
})
const validateUrlSchema = (url) => urlSchema.validate(url);

const altSchema = Joi.object({
  alt : Joi.string().min(2).max(256).required().messages({
    'string.base': `Alt should be a string`,
    'string.min': `Alt should have a minimum length of 2`,
    'string.max': `Alt should have a maximum length of 256`,
    'any.required': `Alt is required`,
  })
})
const validateAltSchema = (alt) => altSchema.validate(alt);

const stateSchema = Joi.object({
  state: Joi.string().allow("").messages({
    'string.base': `State should be a string`,
  })
});
const validateStateSchema = (state) => stateSchema.validate(state);

const countrySchema = Joi.object({
  country: Joi.string().required().messages({
    'string.base': `Country should be a string`,
    'any.required': `Country is required`,
  })
});
const validateCountrySchema = (country) => countrySchema.validate(country);

const citySchema = Joi.object({
  city: Joi.string().required().messages({
    'string.base': `City should be a string`,
    'any.required': `City is required`,
  })
});
const validateCitySchema = (city) => citySchema.validate(city);

const streetSchema = Joi.object({
  street: Joi.string().required().messages({
    'string.base': `Street should be a string`,
    'any.required': `Street is required`,
  })
});
const validateStreetSchema = (street) => streetSchema.validate(street);

const houseNumberSchema = Joi.object({
  houseNumber: Joi.number().required().messages({
    'number.base': `House number should be a number`,
    'any.required': `House number is required`,
  })
});
const validateHouseNumberSchema = (houseNumber) =>
  houseNumberSchema.validate(houseNumber);

const zipSchema = Joi.object({
  zip: Joi.number().allow("").messages({
    'number.base': `Zip should be a number`,
  })
});
const validateZipSchema = (zip) => zipSchema.validate(zip);

const validateSchema = {
  title: validateTitleSchema,
  subtitle: validateSubtitleSchema,
  description: validateDescriptionSchema,
  phone: validatePhoneSchema,
  email: validateEmailSchema,
  web: validateWebSchema,
  url: validateUrlSchema,
  alt: validateAltSchema,
  state: validateStateSchema,
  country: validateCountrySchema,
  city: validateCitySchema,
  street: validateStreetSchema,
  houseNumber: validateHouseNumberSchema,
  zip: validateZipSchema,
};

export default validateSchema;