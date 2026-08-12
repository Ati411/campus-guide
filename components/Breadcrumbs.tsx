"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pathNames: Record<string, string> = {
  about: "About",
  places: "Places",
  placemanagement: "Place Management (Admin)",
  library: "Library",
  "complex-cafeteria": "Cafeteria",
  "interdisciplinary-lab": "Interdisciplinary Lab",
  "sports-complex": "Sports Complex",
  "nongkhai-aquarium": "Nong Khai Aquarium",
  "interdisciplinary-office": "Interdisciplinary Office",
  "satit-kku-nongkhai": "โรงเรียนสาธิต มข. วิทยาเขตหนองคาย",
  "satit-primary-kku-nongkhai": "โรงเรียนสาธิต มข. ฝ่ายประถม",
  "swimming-pool": "สระว่ายน้ำ คณะสหวิทยาการ",
  stadium: "สนามกีฬา มข. วิทยาเขตหนองคาย",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav
      className="flex px-5 py-3.5 bg-[#0b1121]/80 backdrop-blur-md rounded-xl shadow-sm border border-slate-800 mb-8 transition-all"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-2 md:space-x-3 text-xs md:text-sm font-medium">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2 text-emerald-500/80"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 001-1h2a1 1 0 001 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const label = pathNames[segment] || segment;

          return (
            <li key={href}>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-slate-600 mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {isLast ? (
                  <span className="text-emerald-300 font-semibold bg-emerald-900/20 px-2.5 py-1 rounded-lg border border-emerald-800/50">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
