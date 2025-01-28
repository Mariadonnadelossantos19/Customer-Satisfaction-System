import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import LandingPage from "./Pages/LandingPage";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
