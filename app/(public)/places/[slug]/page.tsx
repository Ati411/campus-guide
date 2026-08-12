import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { places } from "@/data/places";

export default async function PlaceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const place = places.find((p) => p.slug === resolvedParams.slug);

  if (!place) {
    notFound();
  }

  return (
    <div className="w-full pb-20">
      {/* 1. Full-width Hero Image (ภาพแบบเต็มตา ไม่มีข้อความกวนใจ) */}
      <div className="relative w-full h-[45vh] min-h-[350px] bg-slate-900">
        {place.image ? (
          <Image
            src={place.image}
            alt={place.name}
            fill
            className="object-cover opacity-70"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-700 bg-[#0f172a]">
            <span className="text-xl font-bold">ไม่มีรูปภาพประกอบ</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 -mt-24 md:-mt-32">
        <div className="bg-[#1e293b]/95 backdrop-blur-2xl border border-slate-700/60 rounded-[2rem] p-6 md:p-12 shadow-2xl shadow-black/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <Link
              href="/places"
              className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-emerald-400 transition-colors group"
            >
              <div className="bg-[#0f172a] p-2.5 rounded-full mr-3 group-hover:bg-emerald-900/30 border border-slate-700/50 group-hover:border-emerald-500/30 transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
              </div>
              Back
            </Link>
            <span className="inline-block bg-[#0f172a] text-emerald-400 text-xs px-4 py-2 rounded-full border border-slate-700/50 font-bold tracking-widest uppercase">
              {place.category}
            </span>
          </div>

          {/* Title Section */}
          <div className="mb-10 pb-10 border-b border-slate-700/50">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-4">
              {place.name}
            </h1>
            {place.englishName && (
              <p className="text-lg md:text-xl text-emerald-500/80 font-mono">
                {place.englishName}
              </p>
            )}
          </div>

          {/* Main Info Split (แบ่งซ้าย-ขวา แบบอิสระ ไม่ตีกรอบอึดอัด) */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* ฝั่งซ้าย: Description (เน้นให้อ่านง่าย สบายตา) */}
            <div className="lg:w-3/5">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                เกี่ยวกับสถานที่
              </h3>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {place.description}
              </p>
            </div>

            {/* ฝั่งขวา: Meta Info (Location & Hours) */}
            <div className="lg:w-2/5 space-y-4">
              <div className="bg-[#0f172a]/60 border border-slate-700/30 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0 border border-slate-700/50">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      สถานที่ตั้ง
                    </h4>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {place.building}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f172a]/60 border border-slate-700/30 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0 border border-slate-700/50">
                    <svg
                      className="w-5 h-5 text-emerald-400"
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
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      เวลาเปิด-ปิด
                    </h4>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {place.openHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
