import { Grid, FormControlLabel, Checkbox, TextField } from "@mui/material";

import Joi from "joi";
import useForm from "../../hooks/useForm";
import Form from "../../components/Form";
const initialSignupForm = {
  first: "",
  middle: "",
  last: "",
  phone: "",
  email: "",
  password: "",
  url: "",
  alt: "",
  state: "",
  country: "",
  city: "",
  street: "",
  houseNumber: 0,
  zip: 0,
  isBusiness: false,
};

const signupSchema = {
  first: Joi.string().min(2).max(256).required(),
  middle: Joi.string().min(2).max(256).allow(""),
  last: Joi.string().min(2).max(256).required(),

  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'user "phone" must be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'user "mail" must be a valid mail' })
    .required(),
  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
        'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
    })
    .required(),
  url: Joi.string()
    .ruleset.regex(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    )
    .rule({ message: "user image must be a valid url" })
    .allow(""),

  alt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number(),
  isBusiness: Joi.boolean().required(),
};
function RegisterForm() {
  const { formDetails, errors, handleChange, handleSubmit } = useForm(
    initialSignupForm,
    signupSchema
  );

  return (
    <Form
      onSubmit={handleSubmit}
      onReset={() => {}}
      title={"sign up form"}
      styles={{ maxWidth: "800px" }}
    >
      <TextField
        name="first"
        label="first name"
        error={errors.first}
        onChange={handleChange}
        value={formDetails.first}
        sm={6}
      />
      <TextField
        name="middle"
        label="middle name"
        error={errors.middle}
        onChange={handleChange}
        value={formDetails.middle}
        sm={6}
        required={false}
      />
      <TextField
        name="last"
        label="last name"
        error={errors.last}
        onChange={handleChange}
        value={formDetails.last}
        sm={6}
      />
      <TextField
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onChange={handleChange}
        value={formDetails.phone}
        sm={6}
      />
      <TextField
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onChange={handleChange}
        value={formDetails.email}
        sm={6}
      />
      <TextField
        name="password"
        label="password"
        type="password"
        error={errors.password}
        onChange={handleChange}
        value={formDetails.password}
        sm={6}
      />
      <TextField
        name="url"
        label="image url"
        error={errors.url}
        onChange={handleChange}
        value={formDetails.url}
        sm={6}
        required={false}
      />
      <TextField
        name="alt"
        label="image alt"
        error={errors.alt}
        onChange={handleChange}
        value={formDetails.alt}
        sm={6}
        required={false}
      />
      <TextField
        name="state"
        label="state"
        error={errors.state}
        onChange={handleChange}
        value={formDetails.state}
        sm={6}
        required={false}
      />
      <TextField
        label="country"
        name="country"
        error={errors.country}
        onChange={handleChange}
        value={formDetails.country}
        sm={6}
      />
      <TextField
        name="city"
        label="city"
        error={errors.city}
        onChange={handleChange}
        value={formDetails.city}
        sm={6}
      />
      <TextField
        name="street"
        label="street"
        error={errors.street}
        onChange={handleChange}
        value={formDetails.street}
        sm={6}
      />
      <TextField
        name="houseNumber"
        label="house Number"
        type="number"
        error={errors.houseNumber}
        onChange={handleChange}
        value={formDetails.houseNumber}
        sm={6}
      />
      <TextField
        name="zip"
        label="zip"
        error={errors.zip}
        onChange={handleChange}
        value={formDetails.zip}
        sm={6}
        required={false}
      />
      {/* <Grid item>
        <FormControlLabel
          onChange={handleChangeCheckBox}
          name="isBusiness"
          control={<Checkbox value={formDetails.isBusiness} color="primary" />}
          label="Signup as business"
        />
      </Grid> */}
    </Form>
  );
}

export default RegisterForm;
