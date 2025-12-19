import BlobUploader from "../../components/BlobUploader";

// Server Component para SSR
export default async function PaginaPublica() {
  // Aquí podrías hacer fetch o lógica de servidor si lo necesitas
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2>Página pública</h2>
      <p>Esta página permite cargar archivos .txt sin autenticación.</p>
      <BlobUploader />
    </main>
  );
}