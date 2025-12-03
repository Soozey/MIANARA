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
import StudentSpace from "./pages/StudentSpace/StudentSpace";
import ProgramsList from "./pages/StudentSpace/ProgramsList";
import ClassPage from "./pages/StudentSpace/ClassPage";
import SubjectPage from "./pages/StudentSpace/SubjectPage";
import OrientationPage from "./pages/StudentSpace/OrientationPage";
import ScholarshipsPage from "./pages/StudentSpace/ScholarshipsPage";
import MianaraDemoPage from "./pages/MianaraDemoPage";
import AddArticle from "./pages/AddArticle";
import { AuthProvider } from "./context/AuthContext";
import { useEffect } from "react";
import { syncDemoContent } from "./services/contentSync";

function App() {
  useEffect(() => {
    // Sync demo content to backend on app load
    syncDemoContent();
  }, []);

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

            {/* Espace Étudiant Routes */}
            <Route path="etudiants" element={<StudentSpace />} />
            <Route path="etudiants/programmes" element={<ProgramsList />} />
            <Route path="etudiants/programmes/:classe" element={<ClassPage />} />
            <Route path="etudiants/programmes/:classe/:matiere" element={<SubjectPage />} />
            <Route path="etudiants/orientation" element={<OrientationPage />} />
            <Route path="etudiants/bourses" element={<ScholarshipsPage />} />
            <Route path="mianara-demo" element={<MianaraDemoPage />} />
            <Route path="add-article" element={<AddArticle />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;