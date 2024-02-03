import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

import styles from "./error.module.css";
import { HomeIcon } from "../../components";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <div id="error-page" className={styles.container}>
      <h2 className={styles.title}>Oops!</h2>
      <p className={styles.subtitle}>
        Sorry, an unexpected error has occurred.
      </p>
      <p
        className={styles.error}
        aria-live="assertive"
        aria-atomic="true"
        role="alert"
      >
        <i>{errorMessage}</i>
      </p>

      <button
        id="go-to-home"
        className={styles.button}
        onClick={handleGoToHome}
      >
        <HomeIcon />
        Go to home
      </button>
    </div>
  );
};
export default ErrorPage;
