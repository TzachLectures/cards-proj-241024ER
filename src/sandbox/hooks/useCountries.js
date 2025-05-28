import { useEffect, useState } from "react";

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const jsonCountries = await res.json();
    setCountries(jsonCountries);
    setFilteredCountries(jsonCountries);
  };

  const handleChange = (event) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase().trim())
      )
    );
  };

  useEffect(() => {
    getCountries();
  }, []);

  return {
    filteredCountries,
    handleChange,
  };
}
