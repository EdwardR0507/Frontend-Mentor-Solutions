import { APIError, Country } from "../interfaces";

export const getCountries = async (): Promise<Country[] | APIError> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      const errorResponse = await response.json();
      const apiError: APIError = {
        status: response.status,
        message: errorResponse.message || "Error fetching countries",
      };
      throw apiError;
    }

    return response.json();
  } catch (error: any) {
    console.error("Error in getCountries:", error);

    if (error satisfies APIError) {
      return error;
    }

    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};

export const getCountryByCode = async (
  code: string | undefined
): Promise<Country[] | APIError> => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    if (!response.ok) {
      const errorResponse = await response.json();
      const apiError: APIError = {
        status: response.status,
        message: errorResponse.message || "Error fetching country",
      };
      throw apiError;
    }
    return response.json();
  } catch (error: any) {
    console.error("Error in getCountryByCode:", error);

    if (error satisfies APIError) {
      return error;
    }

    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};
