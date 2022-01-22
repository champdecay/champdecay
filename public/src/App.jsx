import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-white mb-96">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}