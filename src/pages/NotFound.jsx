import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <span className="font-heading text-7xl text-primary">404</span>
      <h1 className="mt-4 text-2xl">Página no encontrada</h1>
      <Link
        to="/"
        className="mt-8 rounded-full bg-heading px-7 py-3 font-bold uppercase text-white transition hover:bg-primary"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
