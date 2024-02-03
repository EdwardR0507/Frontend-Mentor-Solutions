import styles from "./country-card.module.css";
import { Country } from "../../interfaces/country";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  const navigate = useNavigate();

  const handleCountryClick = () => {
    navigate(`/${country.cca3}`);
  };

  return (
    <div className={styles.country} onClick={handleCountryClick}>
      <img
        className={styles.country__flag}
        src={country.flags.svg}
        alt={`flag of ${country.name.common}`}
      />
      <div className={styles.country__info}>
        <h2 className={styles.country__name}>{country.name.common}</h2>
        <div className={styles.country__details}>
          <p>
            <span className={styles.country__detail_label}>Population:</span>{" "}
            <span className={styles.country__detail_value}>
              {country.population.toLocaleString()}
            </span>
          </p>
          <p>
            <span className={styles.country__detail_label}>Region:</span>{" "}
            <span className={styles.country__detail_value}>
              {country.region}
            </span>
          </p>
          <p>
            <span className={styles.country__detail_label}>Capital:</span>{" "}
            <span className={styles.country__detail_value}>
              {country.capital}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
