import { useEffect, useState } from "react";
import { getCountries } from "../services/countries.service";
import { APIError, Country } from "../interfaces";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<APIError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const response = await getCountries();
      setLoading(false);

      if ("status" in response) {
        setError(response);
        return;
      }

      setCountries(response);
    };
    fetchCountries();
  }, []);

  return { countries, error, loading };
};
