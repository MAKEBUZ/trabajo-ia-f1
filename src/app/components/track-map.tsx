import Image from "next/image";

export default function TrackMap() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 300 150" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      </svg>
      <Image
        src="/track-map.png"
        alt="Track Map"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
      />
    </div>
  );
}