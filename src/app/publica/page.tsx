"use client";
import { useState } from "react";
import BlobUploader from "../../components/BlobUploader";

export default function PaginaPublica() {
  const [codeps, setCodeps] = useState("");
  const [nitIps, setNitIps] = useState("");
  const [nombreEps, setNombreEps] = useState("Nombre de la EPS");
  const [tipoReporte, setTipoReporte] = useState("Ambulatorio");

  const handleCodepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeps(e.target.value);
    setNombreEps(e.target.value ? `EPS para ${e.target.value}` : "Nombre de la EPS");
  };

  const handleValidar = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Validando archivo y datos del formulario...");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 flex flex-row  gap-8">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Validar archivo EPS</h2>
        <form className="flex flex-col gap-4" onSubmit={handleValidar}>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Código EPS</label>
            <input
              type="text"
              value={codeps}
              onChange={handleCodepsChange}
              className="w-full rounded border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Ingrese el código EPS"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">NIT IPS</label>
            <input
              type="text"
              value={nitIps}
              onChange={e => setNitIps(e.target.value)}
              className="w-full rounded border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Ingrese el NIT de la IPS"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Nombre EPS</label>
            <input
              type="text"
              value={nombreEps}
              readOnly
              className="w-full rounded border border-zinc-200 bg-zinc-100 px-3 py-2 text-zinc-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Tipo de reporte</label>
            <select
              value={tipoReporte}
              onChange={e => setTipoReporte(e.target.value)}
              className="w-full rounded border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              <option value="Ambulatorio">Ambulatorio</option>
              <option value="Laboratorio">Laboratorio</option>
              <option value="Imágenes">Imágenes</option>
              <option value="Patología">Patología</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Archivo</label>
            <BlobUploader />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded bg-orange-500 py-2 text-white font-semibold hover:bg-orange-600 transition"
          >
            Validar archivo
          </button>
        </form>
      </div>

      <div className="w-full max-w-md rounded-lg bg-white shadow-lg p-8 flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">Resultado validación</h2>
        <table className="w-full mb-4 border border-zinc-200 rounded">
          <thead>
            <tr className="bg-orange-100">
              <th className="py-2 px-3 text-left text-sm font-semibold text-zinc-700">Línea</th>
              <th className="py-2 px-3 text-left text-sm font-semibold text-zinc-700">Error</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 px-3 text-zinc-600">12</td>
              <td className="py-1 px-3 text-red-500">Formato inválido</td>
            </tr>
            <tr>
              <td className="py-1 px-3 text-zinc-600">47</td>
              <td className="py-1 px-3 text-red-500">Campo obligatorio vacío</td>
            </tr>
            <tr>
              <td className="py-1 px-3 text-zinc-600">89</td>
              <td className="py-1 px-3 text-red-500">Valor fuera de rango</td>
            </tr>
          </tbody>
        </table>
        <div className="bg-zinc-50 border border-zinc-200 rounded p-4 text-sm text-zinc-700">
          <div className="mb-2">Total líneas: <span className="font-bold">150</span></div>
          <div className="mb-2">Líneas con error: <span className="font-bold text-red-500">25</span></div>
          <div>Líneas Ok: <span className="font-bold text-green-600">125</span></div>
        </div>
      </div>
    </main>
  );
}
