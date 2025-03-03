import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import Layout from "@/components/Layout";
import Contact from "@/pages/Contact";
import Chat from "@/pages/Chat";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
