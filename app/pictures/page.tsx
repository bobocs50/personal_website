import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const countries = [
  {
    name: "Japan",
    slug: "japan",
    cover: "/pictures/japan/jn1.jpg",
  },
  {
    name: "Korea",
    slug: "korea",
    cover: "/pictures/korea/korea_v_1.jpg",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    cover: "/pictures/vietnam/vietnam_v_1.jpg",
  },
];

const PicturesPage = () => {
  return (
    <main className="min-h-screen px-10 pb-16 pt-36 sm:px-8 max-[420px]:px-5 max-[420px]:pt-28">
      <div className="mx-auto w-full max-w-[980px]">
        <p className="mb-8 text-[1rem] text-[#666]">
          <a href="/" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-[1.02] hover:text-[#1a5fd1]">
            <span className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Back home
            </span>
          </a>
        </p>

        <div className="mb-10">
          <p className="flex flex-wrap items-center gap-2 text-[2rem] font-normal leading-[1.6] text-[#1a1a1a] sm:text-[1.6rem] max-[420px]:text-[1.35rem]">
            Photography
          </p>
          <p className="mt-3 text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
            A curated wall of moments from the places I’ve been.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {countries.map((country) => {
            const card = (
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f4f4f4] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-200 group-hover:-translate-y-1">
                  {country.cover ? (
                    <Image
                      src={country.cover}
                      alt={country.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#f2f2f2] text-[1rem] text-[#999]">
                      Coming soon
                    </div>
                  )}
                </div>
                <p className="mt-3 text-[1.1rem] text-[#1a1a1a]">
                  {country.name}{" "}
                  <span aria-hidden="true">
                    {country.slug === "japan" && "🇯🇵"}
                    {country.slug === "korea" && "🇰🇷"}
                    {country.slug === "vietnam" && "🇻🇳"}
                  </span>
                </p>
              </div>
            );

            if (country.slug === "japan" || country.slug === "korea" || country.slug === "vietnam") {
              return (
                <a key={country.slug} href={`/pictures/${country.slug}`} className="block">
                  {card}
                </a>
              );
            }

            return (
              <div key={country.slug} className="block">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default PicturesPage;
