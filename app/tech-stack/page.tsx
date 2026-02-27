const TechStackPage = () => {
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
            Work, Tech Stack, Experience
          </p>
          <p className="mt-3 text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
            A living snapshot of what I build with, what I’m building now, and the kind of problems I like to solve.
          </p>
        </div>

        <div className="mb-12">
          <p className="mb-2 text-[1.5rem] text-[#1a1a1a] max-[420px]:text-[1.2rem]">Current Focus</p>
          <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
            Building Ankimax — a focused learning tool that turns repetition into progress. Waitlist open.
          </p>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-[1.5rem] text-[#1a1a1a] max-[420px]:text-[1.2rem]">Stack</p>
          <div className="flex flex-col gap-4">
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Frontend: Next.js, React, TypeScript, Tailwind, Framer Motion, Radix UI.
            </p>
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Backend: Node.js, Postgres, Prisma, REST, Auth, background jobs.
            </p>
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Design: Figma, systems thinking, UX writing, rapid prototyping.
            </p>
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Workflow: GitHub, Vercel, Linear, Notion, testing + analytics.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-[1.5rem] text-[#1a1a1a] max-[420px]:text-[1.2rem]">Selected Work</p>
          <div className="flex flex-col gap-3">
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Ankimax — daily practice loops, spaced repetition, and calm UI.
            </p>
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Personal website — minimal, fast, and focused on story and craft.
            </p>
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Side experiments — small tools, prototypes, and data‑driven ideas.
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-4 text-[1.5rem] text-[#1a1a1a] max-[420px]:text-[1.2rem]">Experience</p>
          <div className="flex flex-col gap-3">
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Building products end‑to‑end: from idea to UI to shipping.
            </p>
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Designing systems that scale: components, patterns, and workflows.
            </p>
            <p className="text-[1.2rem] text-[#666] max-[420px]:text-[1rem]">
              Learning fast and iterating with real feedback.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TechStackPage;
