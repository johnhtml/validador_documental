import Link from "next/link";
import { FaHome, FaLock, FaGlobe } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="h-screen w-56 bg-gray-100 text-gray-500 flex flex-col p-4">
      <div className="mb-8 text-2xl font-bold flex items-center gap-2">
        <FaHome className="text-orange-500" /> Validador
      </div>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-2 hover:text-orange-500">
          <FaHome /> Inicio
        </Link>
        <Link href="/publica" className="flex items-center gap-2 hover:text-orange-500">
          <FaGlobe /> Pública
        </Link>
        <Link href="/protegida" className="flex items-center gap-2 hover:text-orange-500">
          <FaLock /> Protegida
        </Link>
      </nav>
    </aside>
  );
}
