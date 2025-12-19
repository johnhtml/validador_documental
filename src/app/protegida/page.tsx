
import { getAuthFromRequest } from "../../utils/authServer";
import BlobUploader from "../../components/BlobUploader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PaginaProtegida() {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token");
  const token = tokenCookie?.value;
  const req = { cookies: { token } } as any;
  const { isAuthenticated, userRoles } = getAuthFromRequest(req, ["admin"]);

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2>Página protegida</h2>
      <p>Solo usuarios autenticados y con rol permitido pueden ver esto.</p>
      <div>Roles del usuario: {userRoles.join(", ")}</div>
      <BlobUploader />
    </main>
  );
}