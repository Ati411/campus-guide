import { places } from "@/data/places";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>รายการสถานที่</h1>
      <ul>
        {places.map((place) => (
          <li key={place.slug} className="border p-4 rounded mb-4">
            <h2>{place.name}</h2>
            <p>{place.summary}</p>
            <p>Building: {place.building}</p>
            <p>Open Hours: {place.openHours}</p>
            <ul>
              {place.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
            <Link href={`/places/${place.slug}`} className="text-blue-500">
              ดูรายละเอียด
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
