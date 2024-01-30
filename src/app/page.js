import Link from "next/link";

export default function Home() {
  return (
    <main className="d-flex flex-column align-items-center mt-5">
      <h1 className="text-center">Manteniemiento CRUD - Personas</h1>
      <Link href="/people" className="btn btn-primary" style={{ width: 150 }}>Ver personas</Link>
    </main>
  );
}
