import { places } from "@/data/places";
import Image from "next/image";

export default function PlaceManagementPage() {
  return (
    <div className="space-y-6 w-full pb-12">
      {/* 1. Dashboard Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 bg-[#0f172a] p-8 rounded-3xl border border-slate-800 shadow-lg flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold tracking-widest uppercase rounded-full mb-4 shadow-sm">
              Admin Workspace
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2">
              Places Management
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              ระบบจัดการฐานข้อมูลสถานที่ภายในคณะสหวิทยาการ มหาวิทยาลัยขอนแก่น
              วิทยาเขตหนองคาย
            </p>
          </div>
        </div>

        {/* Quick Stats Card */}
        <div className="bg-[#0f172a] p-6 rounded-3xl border border-slate-800 shadow-lg flex flex-col justify-center items-center text-center">
          <div className="text-5xl font-black text-white mb-2">
            {places.length}
          </div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Total Places
          </div>
          <div className="mt-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            System Online
          </div>
        </div>
      </div>

      {/* 2. Control Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#0f172a] p-4 rounded-2xl border border-slate-800 shadow-lg">
        <div className="relative w-full sm:w-96">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="ค้นหาสถานที่... (ยังไม่เปิดใช้งาน)"
            className="w-full bg-[#020617] border border-slate-800 text-slate-200 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
            disabled
          />
        </div>

        <button
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 opacity-80 cursor-not-allowed"
          disabled
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add New Place (ยังไม่เปิดใช้งาน)
        </button>
      </div>

      {/* 3. Rich List View */}
      <div className="bg-[#0f172a] rounded-3xl border border-slate-800 shadow-lg overflow-hidden">
        <div className="hidden md:flex px-6 py-4 bg-[#020617]/50 border-b border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <div className="w-16 shrink-0">Photo</div>
          <div className="flex-grow pl-4">Details</div>
          <div className="w-48 shrink-0">Category</div>
          <div className="w-40 shrink-0 text-right pr-2">Actions</div>
        </div>

        <div className="divide-y divide-slate-800/80">
          {places.map((place) => (
            <div
              key={place.slug}
              className="group flex flex-col md:flex-row items-start md:items-center p-4 md:p-6 hover:bg-[#1e293b]/50 transition-colors duration-200 gap-4"
            >
              {/* Thumbnail */}
              <div className="w-full md:w-16 h-32 md:h-16 rounded-xl overflow-hidden relative shrink-0 bg-[#020617] border border-slate-800 shadow-sm">
                {place.image ? (
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs font-bold">
                    No Img
                  </div>
                )}
              </div>

              {/* Main Info */}
              <div className="flex-grow min-w-0 md:pl-2">
                <h3 className="text-slate-200 font-bold text-base truncate group-hover:text-emerald-400 transition-colors">
                  {place.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="font-mono text-[10px] text-emerald-400/80 bg-emerald-900/20 px-2.5 py-0.5 rounded-md border border-emerald-800/30">
                    {place.slug}
                  </span>
                  <span className="text-slate-500 text-xs truncate">
                    {place.building}
                  </span>
                </div>
              </div>

              {/* Category */}
              <div className="w-full md:w-48 shrink-0 md:pl-4">
                <span className="inline-block px-3 py-1.5 bg-[#020617] text-slate-400 text-xs font-bold rounded-lg border border-slate-800">
                  {place.category}
                </span>
              </div>

              {/* Actions */}
              <div className="w-full md:w-40 shrink-0 flex items-center justify-end gap-2 pt-4 md:pt-0 border-t border-slate-800 md:border-t-0 mt-2 md:mt-0">
                <button
                  className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-[#020617] text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-bold border border-slate-700 transition-colors shadow-sm cursor-not-allowed opacity-70"
                  disabled
                >
                  Edit
                </button>
                <button
                  className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-[#020617] text-red-500 hover:text-red-400 hover:bg-red-950/30 text-xs font-bold border border-slate-700 hover:border-red-900/50 transition-colors shadow-sm cursor-not-allowed opacity-70"
                  disabled
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
