import { Box, TextField, Typography } from "@mui/material";
import useCountries from "./hooks/useCountries";

function CountryList() {
  const { filteredCountries, handleChange } = useCountries();
  return (
    <div>
      <TextField onChange={handleChange} />
      {filteredCountries.map((c) => (
        <Box key={c.name.common}>
          <Typography>{c.name.common}</Typography>
          <img src={c.flags.png} />
        </Box>
      ))}
    </div>
  );
}

export default CountryList;
