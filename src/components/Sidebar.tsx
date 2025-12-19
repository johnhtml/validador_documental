import Link from "next/link";
import { FaHome, FaLock, FaGlobe } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="h-screen w-56 bg-gray-900 text-white flex flex-col p-4">
      <div className="mb-8 text-2xl font-bold flex items-center gap-2">
        <FaHome className="text-blue-400" /> Validador
      </div>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-2 hover:text-blue-400">
          <FaHome /> Inicio
        </Link>
        <Link href="/publica" className="flex items-center gap-2 hover:text-blue-400">
          <FaGlobe /> Pública
        </Link>
        <Link href="/protegida" className="flex items-center gap-2 hover:text-blue-400">
          <FaLock /> Protegida
        </Link>
      </nav>
    </aside>
  );
}
