import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Search from "./pages/Search";

function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </Layout>
  );
}

export default App;
