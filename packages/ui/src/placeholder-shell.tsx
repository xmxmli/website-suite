import type { ReactNode } from "react";

type PlaceholderShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PlaceholderShell({
  eyebrow,
  title,
  description,
  children
}: PlaceholderShellProps) {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
          {eyebrow}
        </p>
        <div className="mt-5 max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            {description}
          </p>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </section>
    </main>
  );
}
