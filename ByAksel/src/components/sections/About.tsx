import LogoLoop from "@/components/ui/LogoLoop";
import Portrait from "@/assets/aksel.jpg";
import ColorBends from "../ui/ColorBends";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiSharp,
  SiDocker,
  SiVite,
  SiGithub,
} from "react-icons/si";

export const About = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com" },
    { node: <SiSharp />, title: "C#", href: "https://learn.microsoft.com/dotnet/csharp/" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-linear-to-b from-[#fdfcfb] via-[#eef3fa] to-[#e9effa] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-[#1E293B]">
            Om mig
          </h2>
          <p className="mt-4 text-[#475569] max-w-2xl mx-auto text-lg sm:text-xl">
            Jeg er en softwareudvikler, der brænder for at skabe stabile og
            smukke løsninger. Jeg har en del generel erfaring, men har fået smag
            for fullstack udvikling.
          </p>
        </div>

        <div
          className="w-full rounded-3xl bg-white/40 backdrop-blur-xl border border-[#9AB3FF]/25
             shadow-[0_10px_40px_rgba(155,180,255,0.25)] relative min-h-[360px] overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <ColorBends
              colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
              rotation={25}
              speed={0.25}
              scale={1.2}
              frequency={1.3}
              warpStrength={1.1}
              mouseInfluence={0.7}
              parallax={0.5}
              noise={0.05}
              transparent
            />
          </div>

          <div className="flex items-center justify-between px-6 pt-8 pb-4 relative z-10">
            <div>
              <h3 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#1E293B]">
                Profil
              </h3>
              <p className="text-xl sm:text-2xl font-heading text-[#475569]">
                Min tech stack{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 pb-12 relative z-10">
            <img
              src={Portrait}
              alt="Aksel Kristensen portrait"
              className="w-52 h-52 object-cover rounded-full shadow-lg border border-[#9AB3FF]/40"
            />

            <div className="flex-1 w-full h-40 relative overflow-hidden">
              <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={48}
                gap={36}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
