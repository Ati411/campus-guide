import Link from "next/link";
import Image from "next/image";
import { places } from "@/data/places";

export default function PlacesPage() {
  if (!places || places.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-slate-500 border border-dashed border-slate-700/50 rounded-3xl">
        <svg
          className="w-12 h-12 mb-4 text-slate-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path>
        </svg>
        <p className="text-lg font-medium">No places found in the directory.</p>
      </div>
    );
  }

  // แยกสถานที่เป็น 2 กลุ่ม: แนะนำ (ใหญ่) และ ทั่วไป (รายการแนวยาว)
  const featuredPlaces = places.slice(0, 2);
  const regularPlaces = places.slice(2);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 pb-16">
      {/* 1. Header Section - ปรับให้คลีน ไม่มีกรอบ */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-900/50 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Campus{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
              Places
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
            ระบบนำทางและข้อมูลสถานที่แบบครบวงจร ค้นพบทุกมุมของคณะสหวิทยาการ
            มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
          </p>
        </div>
      </div>

      {/* 2. Featured Grid - แสดงผลแบบ Bento (การ์ดใหญ่) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredPlaces.map((place) => (
          <Link
            key={place.slug}
            href={`/places/${place.slug}`}
            className="group relative h-[400px] rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-900 shadow-2xl block"
          >
            {/* Image Background */}
            {place.image ? (
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out opacity-60 group-hover:opacity-80"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>

            {/* Content Positioned at Bottom */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="mb-auto self-end">
                <span className="bg-[#0f172a]/80 backdrop-blur-md text-emerald-400 text-xs px-4 py-2 rounded-full border border-emerald-500/30 font-bold shadow-lg">
                  {place.category}
                </span>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight group-hover:text-emerald-300 transition-colors">
                  {place.name}
                </h2>
                {place.englishName && (
                  <p className="text-emerald-500/80 font-mono text-xs md:text-sm mb-3">
                    {place.englishName}
                  </p>
                )}
                <p className="text-slate-300 text-sm md:text-base line-clamp-2 max-w-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {place.summary}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-emerald-600/90 hover:bg-emerald-500 px-5 py-2.5 rounded-xl backdrop-blur-sm transition-all group-hover:pr-4">
                  See More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 3. Regular List - แสดงผลแบบ List View แนวนอน (เหมือนหน้า Admin แต่เป็นฝั่ง User) */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-white flex items-center gap-3">
          สถานที่อื่นๆ <span className="h-px flex-1 bg-slate-800 ml-4"></span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regularPlaces.map((place) => (
            <Link
              key={place.slug}
              href={`/places/${place.slug}`}
              className="group flex items-center gap-5 p-4 rounded-2xl bg-[#1e293b]/40 hover:bg-[#1e293b]/80 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Small Thumbnail */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 bg-slate-800 border border-slate-700/50">
                {place.image ? (
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs font-bold">
                    Img
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 py-1">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-1 block">
                  {place.category}
                </span>
                <h4 className="text-white font-bold text-sm md:text-base truncate group-hover:text-emerald-300 transition-colors">
                  {place.name}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm truncate mt-1">
                  {place.building}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="pr-2 text-slate-600 group-hover:text-emerald-400 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
