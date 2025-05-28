import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";

function RegisterForm() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
  });

  const handleChange = (e) => {
    setUserDetails((prev) => ({
      ...prev,
      firstName: e.target.value,
    }));
  };

  const handleSignup = () => {
    console.log(userDetails);
  };

  return (
    <Container
      sx={{
        pt: 2,
      }}
    >
      <TextField label={"first name"} onChange={handleChange} />
      <TextField label={"middle name"} />
      <TextField label={"last name"} />

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
