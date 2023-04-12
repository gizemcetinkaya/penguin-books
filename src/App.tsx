import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
    </Layout>
  );
}

export default App;
