import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import Layout from "@/components/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
