import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import BlogPage from './pages/BlogPage';
import ContactusPage from './pages/ContactusPage';
import Layout from './pages/Layout';
import TeamPage from './pages/TeamPage';
import SingleBlogPage from './pages/SingleBlogPage';
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectPage';
import ProductDetailPage from './pages/ProductDetailPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the main layout route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactusPage />} />
          <Route path="/blogdetail" element={<SingleBlogPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projectdetail" element={<ProjectPage />} />
          <Route path="/productdetailpage" element={<ProductDetailPage />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
