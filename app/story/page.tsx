const StoryPage = () => {
  return (
    <main className="min-h-screen px-10 pb-16 pt-36 sm:px-8 max-[420px]:px-5 max-[420px]:pt-28">
      <div className="mx-auto w-full max-w-[864px]">
        <p className="mb-8 text-[1rem] text-[#666]">
          <a href="/" className="inline-block text-[#2E7CF6] transition-all duration-200 hover:scale-[1.02] hover:text-[#1a5fd1]">
            Back home
          </a>
        </p>

        <div className="mb-12">
          <p className="flex flex-wrap items-center gap-2 text-[2rem] font-normal leading-[1.6] text-[#1a1a1a] sm:text-[1.6rem] max-[420px]:text-[1.35rem]">
            The story so far
          </p>
          <p className="mt-3 text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
            I learned to build by breaking things, fixing them, and repeating the cycle until the ideas started to feel real.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] max-[420px]:text-[1rem]">
            I’m driven by a simple loop: curiosity, obsession, and execution. I’ve always cared about the small details —
            the way a sentence reads, the way a button feels, the way a system holds together under pressure.
          </p>
          <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] max-[420px]:text-[1rem]">
            My failures shaped the taste I have today. I shipped too early, then too late. I chased shiny features and
            forgot the core. Each time, the lesson was the same: build the thing that solves a real problem and make it
            beautiful enough that people want to come back.
          </p>
          <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] max-[420px]:text-[1rem]">
            Right now, I’m building Ankimax — a calm, focused learning tool. It’s the kind of product I wish existed
            when I was trying to learn fast without burning out.
          </p>
          <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] max-[420px]:text-[1rem]">
            If you’ve ever felt stuck between ambition and overwhelm, you get it. That’s the energy I’m trying to turn
            into something useful.
          </p>
        </div>
      </div>
    </main>
  );
};

export default StoryPage;
