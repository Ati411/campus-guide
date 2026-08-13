import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <header className="sticky top-0 z-50 bg-[#0b1121] text-white shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div>
              <span className="text-lg font-bold tracking-wide block leading-none text-slate-100 group-hover:text-emerald-400 transition-colors">
                Khon Kaen University - Nong Khai Campus
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-1 block">
                Faculty of Interdisciplinary Studies
              </span>
            </div>
          </Link>

          {/* แถบเมนู Navigation */}
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-all flex items-center"
            >
              Home
            </Link>

            <Link
              href="/places"
              className="px-3 py-2 rounded-md text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-all flex items-center"
            >
              Places
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-all flex items-center"
            >
              About
            </Link>

            <Link
              href="/placemanagement"
              className="ml-4 px-4 py-2 rounded-md bg-slate-800/80 text-emerald-400 hover:bg-slate-700 hover:text-emerald-300 font-mono text-xs border border-slate-700/50 transition-all flex items-center"
            >
              Admin
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="mb-6">
          <Breadcrumbs />
        </div>
        {children}
      </main>

      <footer className="bg-[#0b1121] text-slate-400 border-t border-slate-800 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm font-semibold text-slate-300">
              คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Faculty of Interdisciplinary Studies, Khon Kaen University, Nong
              Khai Campus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
