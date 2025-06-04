import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import Joi from "joi";

function RegisterForm() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    firstName: Joi.string().min(2).max(10),
    middleName: Joi.string().allow(""),
    lastName: Joi.string().min(2).required(),
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setUserDetails((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));

    if (fieldName === "firstName") {
      const firstNameSchema = Joi.object({
        firstName: Joi.string().min(2).max(10),
      });
      const { error } = firstNameSchema.validate({ firstName: fieldValue });
      if (error) {
        setErrors({ firstName: error.details[0].message });
      } else {
        setErrors((prev) => {
          delete prev.firstName;
          return prev;
        });
      }
    }
  };

  const handleSignup = () => {
    console.log(userDetails);
    const { error } = schema.validate(userDetails, { abortEarly: false });
    console.log(error);
  };

  return (
    <Container
      sx={{
        pt: 2,
      }}
    >
      <TextField
        label={"first name"}
        name="firstName"
        onChange={handleChange}
        error={Boolean(errors.firstName)}
        helperText={errors.firstName}
      />
      <TextField
        label={"middle name"}
        name="middleName"
        onChange={handleChange}
      />
      <TextField label={"last name"} name="lastName" onChange={handleChange} />

      <Button
        variant="contained"
        sx={{ display: "block" }}
        onClick={handleSignup}
      >
        Sign up
      </Button>
    </Container>
  );
}

export default RegisterForm;
