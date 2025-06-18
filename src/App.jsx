import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import CustomThemeProvider from "./providers/CustomThemeProvider";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </CustomThemeProvider>
    </>
  );
}

export default App;
