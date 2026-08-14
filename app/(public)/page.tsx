import Link from "next/link";
import { places } from "@/data/places";

export default function HomePage() {
  // ดึงสถานที่ 3 แห่งมาแสดงเป็น Featured
  const featuredPlaces = places.slice(0, 3);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-20 pb-16">
      <section className="relative flex flex-col items-center justify-center text-center pt-16 pb-8 md:pt-24 md:pb-16 overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="space-y-6 relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            WELCOME TO <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-600 to-amber-600">
              Khon Kaen University
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
              Nong Khai Campus
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            สำรวจสถานที่ อาคารเรียน ห้องสมุด และจุดบริการต่างๆ
            ภายในคณะสหวิทยาการ ได้อย่างสะดวก
          </p>

          <div className="pt-8">
            <Link
              href="/places"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg transition-all shadow-lg shadow-emerald-900/40 hover:scale-105 hover:shadow-emerald-900/60 gap-3 group"
            >
              See All Places
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700/50">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* ฝั่งซ้าย: หัวข้อหลัก */}
            <div className="w-full md:w-1/3">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                ข้อมูลติดต่อ
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Faculty of Interdisciplinary Studies, Khon Kaen University Nong
                Khai Campus
              </p>
            </div>

            {/* ฝั่งขวา: รายละเอียด (แบ่งเป็น 2 คอลัมน์) */}
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3 bg-[#0f172a]/50 p-5 rounded-2xl border border-slate-700/30">
                <p className="font-bold text-emerald-400 text-sm uppercase tracking-widest">
                  สถานที่ตั้ง
                </p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย <br />
                  112 หมู่ 7 ถนนมิตรภาพ ต.หนองกอมเกาะ อ.เมือง จ.หนองคาย 43000
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3 bg-[#0f172a]/50 p-5 rounded-2xl border border-slate-700/30">
                  <p className="font-bold text-emerald-400 text-sm uppercase tracking-widest">
                    เวลาทำการ
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    จันทร์ – ศุกร์ : 08.30 – 16.30 น. <br />
                    <span className="text-slate-400 text-xs">
                      (เว้นวันหยุดนักขัตฤกษ์)
                    </span>
                  </p>
                </div>

                <div className="space-y-3 bg-[#0f172a]/50 p-5 rounded-2xl border border-slate-700/30">
                  <p className="font-bold text-emerald-400 text-sm uppercase tracking-widest">
                    ช่องทางติดต่อ
                  </p>
                  <div className="text-slate-300 space-y-1 text-sm">
                    <p>
                      <strong className="text-slate-400">โทร:</strong>{" "}
                      042-415-600
                    </p>
                    <p>
                      <strong className="text-slate-400">เว็บ:</strong>{" "}
                      https://www.is.kku.ac.th/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
