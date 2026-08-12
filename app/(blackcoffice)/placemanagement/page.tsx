import { places } from "@/data/places";
import Image from "next/image";

export default function PlaceManagementPage() {
  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto pb-12">
      {/* 1. Dashboard Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[#1e293b] p-8 rounded-2xl border border-slate-600 shadow-sm flex flex-col justify-center">
          <div>
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-3 block">
              Backoffice Workspace
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
              Places Management
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-lg">
              ระบบจัดการฐานข้อมูลสถานที่ภายในคณะสหวิทยาการ มหาวิทยาลัยขอนแก่น
              วิทยาเขตหนองคาย
            </p>
          </div>
        </div>

        {/* Quick Stats Card */}
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-600 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="text-5xl font-black text-white mb-2">
            {places.length}
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Total Places
          </div>
          <div className="mt-4 px-4 py-1.5 bg-emerald-900/50 border border-emerald-700 rounded-full text-emerald-400 text-xs font-semibold">
            System Online
          </div>
        </div>
      </div>

      {/* 2. Control Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#1e293b] p-4 rounded-xl border border-slate-600">
        <div className="relative w-full sm:w-96">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
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
            placeholder="Not Ready Yet (Search Disabled)"
            className="w-full bg-[#0f172a] border border-slate-600 text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-500"
            disabled
          />
        </div>

        <button
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
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
          Add New Place (Not Ready to Use)
        </button>
      </div>

      {/* 3. Rich List View */}
      <div className="space-y-3">
        <div className="hidden md:flex px-6 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <div className="w-16 shrink-0"></div>
          <div className="flex-grow pl-4">Details</div>
          <div className="w-48 shrink-0">Category</div>
          <div className="w-32 shrink-0 text-right pr-2">Actions</div>
        </div>

        {places.map((place) => (
          <div
            key={place.slug}
            className="group flex flex-col md:flex-row items-start md:items-center p-4 bg-[#1e293b] hover:bg-[#334155] border border-slate-600 rounded-xl transition-all duration-150 gap-4 shadow-sm"
          >
            {/* Thumbnail */}
            <div className="w-full md:w-16 h-32 md:h-16 rounded-lg overflow-hidden relative shrink-0 bg-[#0f172a] border border-slate-600">
              {place.image ? (
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs font-medium">
                  No Img
                </div>
              )}
            </div>

            {/* Main Info */}
            <div className="flex-grow min-w-0 md:pl-2">
              <h3 className="text-white font-bold text-base md:text-lg truncate">
                {place.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1.5">
                <span className="font-mono text-[10px] md:text-xs text-emerald-300 bg-[#0f172a] px-2 py-1 rounded border border-slate-600">
                  {place.slug}
                </span>
                <span className="text-slate-300 text-xs truncate">
                  {place.building}
                </span>
              </div>
            </div>

            {/* Category */}
            <div className="w-full md:w-48 shrink-0 md:border-l md:border-slate-600 md:pl-4">
              <span className="inline-block px-3 py-1.5 bg-[#0f172a] text-slate-200 text-xs font-semibold rounded-md border border-slate-600">
                {place.category}
              </span>
            </div>

            {/* Actions */}
            <div className="w-full md:w-auto shrink-0 flex items-center justify-end gap-2 pt-4 md:pt-0 border-t border-slate-600 md:border-t-0 mt-2 md:mt-0">
              <button
                className="flex-1 md:flex-none px-4 py-2 rounded-md bg-[#0f172a] text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-bold border border-slate-600 transition-colors"
                disabled
              >
                Edit
              </button>
              <button
                className="flex-1 md:flex-none px-4 py-2 rounded-md bg-red-950 text-red-400 hover:text-red-300 hover:bg-red-900 text-xs font-bold border border-red-900 transition-colors"
                disabled
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
