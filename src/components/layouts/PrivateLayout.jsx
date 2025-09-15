// src/components/PrivateLayout.jsx
import { HeaderLogado } from "../navigation";
import { Outlet } from "react-router-dom";

function PrivateLayout() {
  return (
    <>
      <HeaderLogado />
      <main className="min-h-screen p-6">
        <Outlet /> {/* Aqui entram as páginas privadas */}
      </main>
    </>
  );
}

export default PrivateLayout;
