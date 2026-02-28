import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const japanPhotos = [
  { src: "/pictures/japan/jn9.jpg", wide: true },
  { src: "/pictures/japan/jn1.jpg", wide: false },
  { src: "/pictures/japan/jn2.jpg", wide: false },
  { src: "/pictures/japan/jn3.jpg", wide: false },
  { src: "/pictures/japan/jn4.jpg", wide: false },
  { src: "/pictures/japan/jn5.jpg", wide: false },
  { src: "/pictures/japan/jn6.jpg", wide: false },
  { src: "/pictures/japan/jn7.jpg", wide: false },
  { src: "/pictures/japan/jn8.jpg", wide: false },
];

const JapanPicturesPage = () => {
  return (
    <main className="min-h-screen px-10 pb-16 pt-36 sm:px-8 max-[420px]:px-5 max-[420px]:pt-28">
      <div className="mx-auto w-full max-w-[1230px]">
        <p className="mb-8 text-[1rem] text-[#666]">
          <a href="/pictures" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-[1.02] hover:text-[#1a5fd1]">
            <span className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Back to Photography
            </span>
          </a>
        </p>

        <div className="mb-10">
          <p className="flex flex-wrap items-center gap-2 text-[2rem] font-normal leading-[1.6] text-[#1a1a1a] sm:text-[1.6rem] max-[420px]:text-[1.35rem]">
            Japan
          </p>
          <p className="mt-3 text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
            A quiet collection from when I solo‑traveled through Japan.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[3.25rem]">
          {japanPhotos.map((photo, index) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-md bg-[#f4f4f4] shadow-[0_24px_60px_rgba(0,0,0,0.18)] ${
                photo.wide ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={photo.src}
                alt={`Japan ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default JapanPicturesPage;
