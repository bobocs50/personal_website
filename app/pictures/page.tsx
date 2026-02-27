const pictureSlots = [
  "Street",
  "Architecture",
  "Light",
  "Portrait",
  "Movement",
  "Details",
  "Night",
  "Nature",
];

const PicturesPage = () => {
  return (
    <main className="min-h-screen px-10 pb-16 pt-36 sm:px-8 max-[420px]:px-5 max-[420px]:pt-28">
      <div className="mx-auto w-full max-w-[864px]">
        <p className="mb-8 text-[1rem] text-[#666]">
          <a href="/" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-[1.02] hover:text-[#1a5fd1]">
            Back home
          </a>
        </p>

        <div className="mb-10">
          <p className="flex flex-wrap items-center gap-2 text-[2rem] font-normal leading-[1.6] text-[#1a1a1a] sm:text-[1.6rem] max-[420px]:text-[1.35rem]">
            Picture wall
          </p>
          <p className="mt-3 text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
            A curated wall of moments. Drop your favorites in and I’ll keep this updated.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {pictureSlots.map((label) => (
            <div
              key={label}
              className="group flex aspect-square items-end justify-between rounded-xl border border-[#e6e6e6] bg-[#fafafa] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-[1rem] text-[#666]">{label}</p>
              <span className="text-[0.9rem] text-[#999]">Soon</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[1rem] text-[#666] max-[420px]:text-[0.95rem]">
          Want me to wire real photos? Drop them into `public/pictures` and tell me the filenames.
        </p>
      </div>
    </main>
  );
};

export default PicturesPage;
