import { useEffect, useState } from "react";

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getCountries = async () => {
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags"
      );
      const jsonCountries = await res.json();
      if (Array.isArray(jsonCountries)) {
        setCountries(jsonCountries);
        setFilteredCountries(jsonCountries);
      }
    } catch (error) {
      console.log(error);
    }
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
