import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import BG from "./assets/4940019.jpg";
import Blog from "./Pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      {/* <main style={{ backgroundImage: `url(${BG})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}> */}
      <main>
        <Header />
        <Routes>
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter >
  )
}