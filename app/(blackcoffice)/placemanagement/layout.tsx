import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BackofficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-slate-900 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-lg flex items-center gap-2">
            Backoffice Management
          </div>
          <Link
            href="/places"
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-all"
          >
            ← Back (Home Page)
          </Link>
        </div>
      </header>

      <main className="max-w-7xl w-full mx-auto p-6 flex-grow">
        <div className="mb-6">
          <Breadcrumbs />
        </div>
        {children}
      </main>
    </div>
  );
}
