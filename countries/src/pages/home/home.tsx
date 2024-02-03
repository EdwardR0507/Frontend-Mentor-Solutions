import { CountriesList, Filter, Loader, SearchBar } from "../../components";
import { useCountries, useFilterCountries } from "../../hooks";

import styles from "./home.module.css";

const Home = () => {
  const { countries, error, loading } = useCountries();

  const { search, setSearch, region, handleRegionChange, result } =
    useFilterCountries(countries);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <section className={styles.container}>
          <section className={styles.filter__container}>
            <SearchBar search={search} onUpdateSearch={setSearch} />
            <Filter region={region} onChangeRegion={handleRegionChange} />
          </section>

          <CountriesList countries={result} />
        </section>
      )}
    </>
  );
};

export default Home;
