import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import ContentView from "./pages/ContentView";
import Contribute from "./pages/Contribute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Student from "./pages/Student";
import Training from "./pages/Training";
import Conference from "./pages/Conference";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="content/:id" element={<ContentView />} />
            <Route path="contribute" element={<Contribute />} />
            <Route path="student" element={<Student />} />
            <Route path="training" element={<Training />} />
            <Route path="conference" element={<Conference />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;