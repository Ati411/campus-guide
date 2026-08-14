import Link from "next/link";
import { places } from "@/data/places";

export default function HomePage() {
  const featuredPlaces = places.slice(0, 3);

  return (
    <div className="w-full min-h-screen flex flex-col pt-12 pb-20">
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1e293b]/80 border border-slate-700/50 backdrop-blur-sm shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">
              KKU NKC
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            WELCOME TO <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-600 to-amber-600">
              Khon Kaen University
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
              Nong Khai Campus
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-md leading-relaxed">
            สำรวจอาคารเรียน ห้องสมุด และจุดบริการทั้งหมดในคณะสหวิทยาการ
            วิทยาเขตหนองคาย
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/places"
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-3 group"
            >
              Start Exploring
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[450px] hidden lg:block">
          {/* แบ็คกราวด์ตกแต่ง */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-[3rem] border border-emerald-500/20 transform rotate-3 scale-105"></div>

          <div className="absolute inset-4 bg-[#0f172a]/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-slate-700/50 flex flex-col p-8 gap-5 z-10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 font-bold tracking-widest uppercase text-xs">
                Quick Access
              </h3>
              <span className="text-emerald-500/50 text-xs font-mono">
                Live
              </span>
            </div>

            {featuredPlaces.map((place) => (
              <Link
                key={place.slug}
                href={`/places/${place.slug}`}
                className="flex-1 bg-[#1e293b]/60 hover:bg-[#1e293b] border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl p-5 transition-all group flex items-center justify-between shadow-sm"
              >
                <div>
                  <h4 className="text-white font-bold group-hover:text-emerald-400 transition-colors text-lg">
                    {place.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium uppercase tracking-wider">
                    {place.category}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0f172a] border border-slate-700/50 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <svg
                    className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-t border-slate-800/80 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2 space-y-4 pr-8">
            <h2 className="text-2xl font-black text-white">สถานที่ตั้ง</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย <br />
              112 หมู่ 7 ถนนมิตรภาพ ต.หนองกอมเกาะ อ.เมือง จ.หนองคาย 43000
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              เวลาทำการ
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              จันทร์ – ศุกร์ <br />
              <span className="font-mono text-emerald-100">
                08.30 – 16.30 น.
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              ติดต่อเรา
            </h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>
                <span className="text-slate-500 mr-2">Tel:</span>042-415-600
              </li>
              <li>
                <span className="text-slate-500 mr-2">Web:</span>is.kku.ac.th
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
