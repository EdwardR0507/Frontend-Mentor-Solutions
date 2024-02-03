import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loader } from "../components";

const ErrorPage = lazy(() => import("../pages/error/error"));
const Home = lazy(() => import("../pages/home/home"));
const Details = lazy(() => import("../pages/details/details"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:code",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
]);

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
