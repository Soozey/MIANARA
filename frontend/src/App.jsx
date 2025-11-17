// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Tes layouts/pages existants
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import ContentView from "./pages/ContentView";

// ✅ Nouvelles pages
import Login from "./pages/Login";
import Moderation from "./pages/moderation";
//import Moderation from "./pages/Moderation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route parente avec le layout (header/footer, etc.) */}
        <Route path="/" element={<MainLayout />}>
          {/* Accueil */}
          <Route index element={<Home />} />

          {/* Pages existantes */}
          <Route path="content/:id" element={<ContentView />} />
          <Route path="contribute" element={<Contribute />} />
          <Route path="library" element={<Library />} />
          <Route path="about" element={<About />} />

          {/* ✅ Nouvelles routes */}
          <Route path="login" element={<Login />} />
          <Route path="admin/moderation" element={<Moderation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}