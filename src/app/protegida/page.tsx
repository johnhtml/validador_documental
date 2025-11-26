"use client";
import { withAuth } from "../../components/withAuth";
import BlobUploader from "../../components/BlobUploader";

function PaginaProtegida({ userRoles }: { userRoles: string[] }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2>Página protegida</h2>
      <p>Solo usuarios autenticados y con rol permitido pueden ver esto.</p>
      <div>Roles del usuario: {userRoles.join(", ")}</div>
      <BlobUploader />
    </main>
  );
}


export default withAuth(PaginaProtegida, ["admin"]);