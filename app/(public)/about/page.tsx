import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r text-slate-200 p-8 md:p-12 shadow-xl">
        <div className="relative z-10 space-y-3">
          <span className="px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-300/30 rounded-full text-xs font-semibold tracking-wider uppercase">
            Developer Profile
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            About the Developer
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 grid md:grid-cols-3 gap-8 items-center ">
        <div className="flex flex-col items-center text-center space-y-4 md:border-r md:border-slate-100 md:pr-8">
          {/* จุดที่ผมเพิ่มคอมโพเนนต์รูปภาพให้ */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md bg-slate-200 shrink-0">
            <Image
              src="/about.jpg"
              alt="Athiwat Tangrusicharoen"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Athiwat Tangrusicharoen
            </h2>
            <p className="text-xs text-red-600 font-semibold mt-0.5">
              นักศึกษา มหาวิทยาลัยขอนแก่น
            </p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 text-sm text-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-emerald-500 block uppercase">
                รหัสนักศึกษา
              </span>
              <span className="text-base font-bold text-slate-800">
                673450041-1
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-emerald-500 block uppercase">
                สาขาวิชา
              </span>
              <span className="text-base font-bold text-slate-800">
                วิทยาการคอมพิวเตอร์และสารสนเทศ
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-emerald-500 block uppercase">
                คณะ
              </span>
              <span className="text-base font-bold text-slate-800">
                คณะสหวิทยาการ
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-emerald-500 block uppercase">
                วิทยาเขต
              </span>
              <span className="text-base font-bold text-slate-800">
                วิทยาเขตหนองคาย
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
