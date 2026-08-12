import Link from "next/link";

export default function PlaceNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 text-center">
      <p className="text-6xl" aria-hidden="true">
        🧭
      </p>
      <h1 className="mt-5 text-3xl font-bold">ไม่พบสถานที่นี้</h1>
      <p className="mt-3 text-slate-600">
        ชื่อใน URL อาจไม่ถูกต้อง หรือข้อมูลถูกย้ายแล้ว
      </p>
      <Link
        href="/places"
        className="mt-7 inline-block rounded-lg bg-emerald-700 px-5 py-3 text-white"
      >
        ดูสถานที่ทั้งหมด
      </Link>
    </main>
  );
}
