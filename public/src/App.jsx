import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";
import BG from "./assets/4940019.jpg";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundImage: `url(${BG})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter >
  )
}