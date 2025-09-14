// src/components/PrivateLayout.jsx
import NavbarLogada from "./NavbarLogada";
import { Outlet } from "react-router-dom";

function PrivateLayout() {
  return (
    <>
      <NavbarLogada />
      <main className="min-h-screen p-6">
        <Outlet /> {/* Aqui entram as páginas privadas */}
      </main>
    </>
  );
}

export default PrivateLayout;
