import Image from "next/image";

const Portfolio = () => {
  return (
    <main className="min-h-screen px-10 pb-10 pt-40 sm:px-8 max-[420px]:px-5 max-[420px]:pt-28">
      <div className="mx-auto w-full max-w-[864px]">
        {/* Intro */}
        <div className="mb-12">
          <p className="flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            Hi, my name is Philipp Huynh{" "}
            <span className="relative ml-1 inline-block h-14 w-14 overflow-hidden rounded-full sm:h-12 sm:w-12 max-[420px]:h-11 max-[420px]:w-11">
              <Image
                src="/images/philipp_icon.jpg" 
                alt="Philipp Huynh"
                fill
                sizes="56px"
                className="object-cover object-[50%_10%] scale-[2]"
              />
            </span>
          </p>
        </div>

        {/* What I do */}
        <div className="mb-10 sm:mb-8">
          <p className="mb-1 flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            Currently building{" "}
            <a href="#" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-105 hover:text-[#1a5fd1]">Ankimax</a>
            <span className="group relative ml-1 inline-flex">
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-[0.79rem] text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:-top-10 sm:mt-0">
                Ankimax - Waitlist
              </span>
              <Image
                src="/images/anki_icon.jpeg"
                alt="Ankimax"
                width={46}
                height={46}
                className="h-[46px] w-[46px] -rotate-[8deg] rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:rotate-0 sm:h-10 sm:w-10 max-[420px]:h-9 max-[420px]:w-9"
              />
            </span>
          </p>
          <p className="flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            and studying Business Informatics{" "}
            <a href="https://www.uni-potsdam.de/de/" target="_blank" rel="noreferrer" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-105 hover:text-[#1a5fd1]">@UniPotsdam</a>
            <a href="https://www.uni-potsdam.de/de/" target="_blank" rel="noreferrer" className="group relative ml-1 inline-flex">
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-[0.79rem] text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:-top-10 sm:mt-0">
                Yes I go here.
              </span>
              <Image
                src="/images/potsdam_icon.png"
                alt="University of Potsdam"
                width={46}
                height={46}
                className="h-[46px] w-[46px] rotate-[6deg] rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:rotate-0 sm:h-10 sm:w-10 max-[420px]:h-9 max-[420px]:w-9"
              />
            </a>
          </p>
        </div>

        {/* Dreams */}
        <div className="mb-10 sm:mb-8">
          <p className="mb-1 flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            Proving my delusional dreams by building tools that solve real problems.
          </p>
          <p className="flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            Check out my work, tech stack, and experience{" "}
            <a href="#" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-105 hover:text-[#1a5fd1]">here.</a>
          </p>
        </div>

        {/* Story */}
        <div className="mb-10 sm:mb-8">
          <p className="flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            Defined by my{" "}
            <a href="#" className="inline-block text-[#1a1a1a] transition-all duration-200 hover:scale-105 hover:text-[#555]">failures.</a>{" "}
            Here is my{" "}
            <a href="#" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-105 hover:text-[#1a5fd1]">story</a>
            <a href="#" className="group relative inline-flex items-center">
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-[0.79rem] text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:-top-10 sm:mt-0">
                My story
              </span>
              <Image
                src="/images/book_icon.jpeg"
                alt="Story"
                width={46}
                height={46}
                className="h-[46px] w-[46px] -rotate-[8deg] rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:rotate-0 sm:h-10 sm:w-10 max-[420px]:h-9 max-[420px]:w-9"
              />
            </a>
          </p>
        </div>

        {/* Hobbies */}
        <div className="mb-10 sm:mb-8">
          <p className="mb-1 flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            When I'm not coding, I'm making music, working out,
          </p>
          <p className="flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            and documenting the world through a lens{" "}
            <span className="group relative ml-1 inline-flex">
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-[0.79rem] text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:-top-10 sm:mt-0">
                My best pictures
              </span>
              <Image
                src="/images/camera_icon.jpeg"
                alt="Camera"
                width={46}
                height={46}
                className="h-[46px] w-[46px] rotate-[6deg] rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:rotate-0 sm:h-10 sm:w-10 max-[420px]:h-9 max-[420px]:w-9"
              />
            </span>
          </p>
        </div>

        {/* LinkedIn */}
        <div className="mb-10 sm:mb-8">
          <p className="flex flex-wrap items-center gap-2 text-[1.8rem] font-normal leading-[1.7] text-[#1a1a1a] sm:text-[1.44rem] max-[420px]:text-[1.25rem]">
            After years of overthinking, I finally started posting.{" "}
            <a href="https://www.linkedin.com/in/bobocs50/" target="_blank" rel="noreferrer" className="group relative ml-1 inline-flex">
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-[0.79rem] text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:-top-10 sm:mt-0">
                @bobocs50
              </span>
              <Image
                src="/images/linkedin_icon.png" 
                alt="LinkedIn"
                width={46}
                height={46}
                className="h-[46px] w-[46px] -rotate-[8deg] rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:rotate-0 sm:h-10 sm:w-10 max-[420px]:h-9 max-[420px]:w-9"
              />
            </a>
          </p>
        </div>

        {/* Divider */}
        <hr className="my-14 border-0 border-t border-[#e0e0e0] sm:my-10" />

        {/* Footer Links */}
        <div className="flex flex-col gap-2">
          <p className="text-[1.2rem] text-[#666]">
            Want my resume?{" "}
            <a href="/other/PhilCV.pdf" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-105 hover:text-[#1a5fd1]">Click here.</a>
          </p>
          <p className="text-[1.2rem] text-[#666]">
            Want to say hi?{" "}
            <a href="mailto:bgbphilipp@gmail.com" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-105 hover:text-[#1a5fd1]">Click here.</a>
          </p>
          <p className="text-[1.2rem] text-[#666]">
            Change it to darkmode?{" "}
            <span className="inline-block text-[#2E7CF6] opacity-70">(coming soon)</span>
          </p>
        </div>
      </div>
    </main>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Portfolio />
    </div>
  );
}

export default App;
