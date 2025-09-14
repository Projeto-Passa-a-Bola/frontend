// src/components/PublicLayout.jsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet /> {/* Aqui entram as páginas públicas */}
      </main>
      <Footer />
    </>
  );
}

export default PublicLayout;
