import { useEffect, useState } from "react";
import { APIError, Country } from "../interfaces";
import { getCountryByCode } from "../services/countries.service";

export const useCountryByCode = (code: string | undefined) => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [error, setError] = useState<APIError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const response = await getCountryByCode(code);
      setLoading(false);

      if ("status" in response) {
        setError(response);
        return;
      }
      setCountry(response[0]);
    };
    fetchCountries();
  }, [code]);

  return { country, error, loading };
};
