import { PropsWithChildren } from "react";

import { Header } from "../components";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
