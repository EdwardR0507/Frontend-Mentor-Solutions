import { useEffect, useState } from "react";

import { Country, Region } from "../interfaces";

export const useFilterCountries = (initialCountries: Country[]) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region | "all">("all");
  const [result, setResult] = useState<Country[]>(initialCountries);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value as Region | "all";
    setRegion(selectedRegion);
  };

  useEffect(() => {
    const filterCountries = () => {
      let filteredCountries = initialCountries;

      // Filter by region
      if (region !== "all") {
        filteredCountries = filteredCountries.filter(
          (country) => country.region === region
        );
      }

      // Filter by search
      filteredCountries = filteredCountries.filter((country) =>
        country.name.official.toLowerCase().includes(search.toLowerCase())
      );

      setResult(filteredCountries);
    };

    filterCountries();
  }, [initialCountries, search, region]);

  return { search, setSearch, region, handleRegionChange, result };
};
