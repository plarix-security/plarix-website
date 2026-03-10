import { LogoCloud } from "@/components/ui/logo-cloud-2";

export function LogoSection() {
  return (
    <section className="relative w-full bg-zinc-950 py-16 md:py-24 border-b border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-12 text-center font-normal text-4xl text-white tracking-tight md:text-5xl">
          Trusted by leading security teams
        </h2>

        <LogoCloud />
      </div>
    </section>
  );
}
