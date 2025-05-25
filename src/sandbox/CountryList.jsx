import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function CountryList() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const jsonCountries = await res.json();
    setCountries(jsonCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {countries.map((c) => (
        <Box key={c.name.common}>
          <Typography>{c.name.common}</Typography>
          <img src={c.flags.png} />
        </Box>
      ))}
    </div>
  );
}

export default CountryList;
