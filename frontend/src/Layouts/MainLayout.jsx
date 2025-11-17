// frontend/src/Layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function MainLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <main
        style={{
          flex: 1,
          padding: "1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          opacity: 0.6,
        }}
      >
        © {new Date().getFullYear()} Mianàra — Karibo Services
      </footer>
    </div>
  );
}
