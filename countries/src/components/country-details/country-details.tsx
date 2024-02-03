import { Country } from "../../interfaces";
import styles from "./country-details.module.css";

interface CountryDetailsProps {
  country: Country | undefined;
  onBorderCountryClick: (border: string) => void;
}

export const CountryDetails = ({
  country,
  onBorderCountryClick,
}: CountryDetailsProps) => {
  console.log(country);
  return (
    <article className={styles.country}>
      <img
        className={styles.country__flag}
        src={country?.flags.svg}
        alt={`flag of ${country?.name.common}`}
      />
      <section className={styles.country__info}>
        <h2 className={styles.country__name}>{country?.name?.common}</h2>
        <section className={styles.country__details}>
          <div className={styles.container__info}>
            <div className={styles.basic__info}>
              <p>
                <span className={styles.basic__info__label}>Native Name:</span>{" "}
                <span className={styles.basic__info__value}>
                  {country?.name?.common || "N/A"}
                </span>
              </p>
              <p>
                <span className={styles.basic__info__label}>Population:</span>{" "}
                <span className={styles.basic__info__value}>
                  {country?.population?.toLocaleString()}
                </span>
              </p>
              <p>
                <span className={styles.basic__info__label}>Region:</span>{" "}
                <span className={styles.basic__info__value}>
                  {country?.region || "N/A"}
                </span>
              </p>
              <p>
                <span className={styles.basic__info__label}>Sub Region:</span>{" "}
                <span className={styles.basic__info__value}>
                  {country?.subregion || "N/A"}
                </span>
              </p>
              <p>
                <span className={styles.basic__info__label}>Capital:</span>{" "}
                <span className={styles.basic__info__value}>
                  {country?.capital}
                </span>
              </p>
            </div>

            <div className={styles.more__info}>
              <p>
                <span className={styles.more__info__label}>
                  Top Level Domain:
                </span>{" "}
                <span className={styles.more__info__value}>{country?.tld}</span>
              </p>
              <p>
                <span className={styles.more__info__label}>Currencies:</span>{" "}
                <span className={styles.more__info__value}>
                  {country?.currencies?.EUR?.name}
                </span>
              </p>
              <p>
                <span className={styles.more__info__label}>Languages:</span>{" "}
                {Object.values(country?.languages || {})
                  .sort()
                  .join(", ")}
              </p>
            </div>
          </div>
          <div className={styles.border__countries}>
            <p className={styles.border__countries__label}>Border Countries:</p>
            <div className={styles.border__countries__list}>
              {country?.borders?.map((border) => (
                <span
                  key={border}
                  className={styles.border__country}
                  onClick={() => onBorderCountryClick(border)}
                >
                  {border}
                </span>
              )) || "N/A"}
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};
