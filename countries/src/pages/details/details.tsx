import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeftIcon,
  CountryDetails,
  HomeIcon,
  Loader,
} from "../../components/";
import { useCountryByCode } from "../../hooks";

import styles from "./details.module.css";

const Details = () => {
  const navigate = useNavigate();
  const { code } = useParams();

  const { country, error, loading } = useCountryByCode(code);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleBorderCountryClick = (border: string) => {
    navigate(`/${border}`);
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className={styles.error}>
          <h2>{error.message}</h2>
          <button className={styles.button} onClick={handleGoToHome}>
            <HomeIcon />
            Go to Home
          </button>
        </div>
      ) : (
        <section className={styles.container}>
          <button className={styles.button} onClick={handleBackClick}>
            <ArrowLeftIcon />
            Back
          </button>
          <CountryDetails
            country={country}
            onBorderCountryClick={handleBorderCountryClick}
          />
        </section>
      )}
    </>
  );
};
export default Details;
