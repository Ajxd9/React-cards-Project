import Joi from "joi";
import { validateEmail, validatePassword } from "./loginValidation";

const firstSchema = Joi.object({
  first: Joi.string().min(2).max(256).required().messages({
    "string.empty": "First name is required",
    "string.min": "First name must be at least 2 characters",
    "string.max": "First name must be less than 256 characters",
  }),
});
const middleSchema = Joi.object({
  middle: Joi.string().min(2).max(256).allow("").messages({
    "string.empty": "Middle name is optional",
    "string.min": "Middle name must be at least 2 characters",
    "string.max": "Middle name must be less than 256 characters",
  }),
});
const lastSchema = Joi.object({
  last: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Last name is required",
    "string.min": "Last name must be at least 2 characters",
    "string.max": "Last name must be less than 256 characters",
  }),
});

const phoneSchema = Joi.object({
  phone: Joi.string().min(9).max(11).required().messages({
    "string.empty": "Phone number is required",
    "string.min": "Phone number must be at least 9 digits",
    "string.max": "Phone number must be no more than 11 digits",
  }),
});
const urlSchema = Joi.object({
  url: Joi.string().min(14).allow("").messages({
    "string.empty": "URL is optional",
    "string.min": "URL must be at least 14 characters",
  }),
});
const altSchema = Joi.object({
  alt: Joi.string().min(2).max(256).allow("").messages({
    "string.empty": "Alternate name is optional",
    "string.min": "Alternate name must be at least 2 characters",
    "string.max": "Alternate name must be less than 256 characters",
  }),
});
const stateSchema = Joi.object({
  state: Joi.string().min(2).max(256).allow("").messages({
    "string.empty": "State is optional",
    "string.min": "State must be at least 2 characters",
    "string.max": "State must be less than 256 characters",
  }),
});
const countrySchema = Joi.object({
  country: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Country is required",
    "string.min": "Country must be at least 2 characters",
    "string.max": "Country must be less than 256 characters",
  }),
});
const citySchema = Joi.object({
  city: Joi.string().min(2).max(256).required().messages({
    "string.empty": "City is required",
    "string.min": "City must be at least 2 characters",
    "string.max": "City must be less than 256 characters",
  }),
});
const streetSchema = Joi.object({
  street: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Street is required",
    "string.min": "Street must be at least 2 characters",
    "string.max": "Street must be less than 256 characters",
  }),
});
const houseNumberSchema = Joi.object({
  houseNumber: Joi.string().min(2).max(256).required().messages({
    "string.empty": "House number is required",
    "string.min": "House number must be at least 2 characters",
    "string.max": "House number must be less than 256 characters",
  }),
});
const zipSchema = Joi.object({
  zip: Joi.string().min(2).max(256).required().messages({
    "string.empty": "ZIP is required",
    "string.min": "ZIP must be at least 2 characters",
    "string.max": "ZIP must be less than 256 characters",
  }),
});

const validateFirstSchema = (first) => {
  return firstSchema.validate(first);
};
const validateMiddleSchema = (middle) => {
  return middleSchema.validate(middle);
};
const validateLastSchema = (last) => {
  return lastSchema.validate(last);
};
const validatePhoneSchema = (phone) => {
  return phoneSchema.validate(phone);
};
const validateUrlSchema = (url) => {
  return urlSchema.validate(url);
};
const validateAltSchema = (alt) => {
  return altSchema.validate(alt);
};
const validateStateSchema = (state) => {
  return stateSchema.validate(state);
};
const validateCountrySchema = (country) => {
  return countrySchema.validate(country);
};
const validateCitySchema = (city) => {
  return citySchema.validate(city);
};
const validateStreetSchema = (street) => {
  return streetSchema.validate(street);
};
const validateHouseNumberSchema = (houseNumber) => {
  return houseNumberSchema.validate(houseNumber);
};
const validateZipSchema = (zip) => {
  return zipSchema.validate(zip);
};

const validateSchema = {
  first: validateFirstSchema,
  middle: validateMiddleSchema,
  last: validateLastSchema,
  email: validateEmail,
  password: validatePassword,
  phone: validatePhoneSchema,
  url: validateUrlSchema,
  alt: validateAltSchema,
  state: validateStateSchema,
  country: validateCountrySchema,
  city: validateCitySchema,
  street: validateStreetSchema,
  houseNumber: validateHouseNumberSchema,
  zip: validateZipSchema,
};

export {
  validateEmail,
  validateFirstSchema,
  validatePassword,
  validateMiddleSchema,
  validateLastSchema,
  validatePhoneSchema,
  validateUrlSchema,
  validateAltSchema,
  validateStateSchema,
  validateCountrySchema,
  validateCitySchema,
  validateStreetSchema,
  validateHouseNumberSchema,
  validateZipSchema,
  validateSchema,
};
