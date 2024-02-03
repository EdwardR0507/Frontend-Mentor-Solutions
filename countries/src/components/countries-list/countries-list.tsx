import style from "./countries-list.module.css";
import { Country } from "../../interfaces";
import { CountryCard } from "../country-card/country-card";

interface CountriesListProps {
  countries: Country[];
}

export const CountriesList = ({ countries }: CountriesListProps) => {
  return countries.length > 0 ? (
    <section className={style.countries}>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </section>
  ) : (
    <div className={style.error}>
      <h2>Sorry, no countries found</h2>
    </div>
  );
};
