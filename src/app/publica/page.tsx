import BlobUploader from "../../components/BlobUploader";

export default function PaginaPublica() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2>Página pública</h2>
      <p>Esta página permite cargar archivos .txt sin autenticación.</p>
      <BlobUploader />
    </main>
  );
}