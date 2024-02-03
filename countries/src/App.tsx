import "../src/index.css";
import { MainLayout } from "./layouts/main-layout";
import { AppRouter } from "./routers/app-router";

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}
export default App;
