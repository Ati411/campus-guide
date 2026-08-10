export type Place = {
  slug: string;
  name: string;
  summary: string;
  building: string;
  openHours: string;
  facilities: string[];
};

export const places: Place[] = [
  {
    slug: "library",
    name: "ห้องสมุดกลาง",
    summary: "พื้นที่อ่านหนังสือ ห้องประชุมกลุ่ม และฐานข้อมูลออนไลน์",
    building: "อาคารทรัพยากรการเรียนรู้ ชั้น 1–5",
    openHours: "จันทร์–ศุกร์ 08:00–20:00",
    facilities: ["Wi-Fi", "ห้องประชุม", "ปลั๊กไฟ", "Printer"],
  },
  {
    slug: "cafeteria",
    name: "โรงอาหาร",
    summary: "ร้านอาหารและเครื่องดื่มสำหรับนักศึกษาและบุคลากร",
    building: "อาคารอเนกประสงค์ ชั้น 1",
    openHours: "ทุกวัน 07:00–18:00",
    facilities: ["ที่นั่ง 300 ที่", "จุดเติมน้ำ", "ทางลาด"],
  },
  {
    slug: "innovation-lab",
    name: "Innovation Lab",
    summary: "พื้นที่สร้างต้นแบบ ทำงานกลุ่ม และจัด Workshop",
    building: "อาคารวิศวกรรม ชั้น 4",
    openHours: "จันทร์–ศุกร์ 09:00–19:00",
    facilities: ["3D Printer", "Projector", "Workshop tools"],
  },
];

export function findPlace(slug: string) {
  return places.find((place) => place.slug === slug);
}
