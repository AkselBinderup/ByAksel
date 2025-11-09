import SpotlightCard from "@/components/ui/SpotlightCard";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import FarsoeImg from "@/assets/Farsoe.png";
import Portfolio from "@/assets/Portfolio.png";
import ColorBends from "../ui/ColorBends";

export const Work = () => {
  const projects = [
    {
      title: "Farsø lægehus",
      description: "Skræddersyet hjemmesideløsning til lægehuset i Farsø.",
      image: FarsoeImg,
      tags: ["React", "Tailwind", "Typescript", "Vite"],
    },
    {
      title: "About side",
      description: "En about me side bygget i React, Typescript og Tailwind.",
      image: Portfolio,
      tags: ["React", "Tailwind", "Vite", "Azure", "TypeScript"],
    },
    {
      title: "Notes app",
      description:
        "En web og app baseret notes applikation med synkronisering.",
      image: "/projects/kmdtools.png",
      tags: [
        "React",
        "React Native",
        "SQLite",
        "Firebase",
        "Vite",
        "Tailwind",
        "TypeScript",
      ],
    },
    {
      title: "Design System",
      description: "Genbrugelige UI-komponenter i React med adgangskontrol.",
      image: "/projects/designsystem.png",
      tags: ["React", "UI", "DX"],
    },
  ];

  return (
    <section
      id="work"
      className="relative min-h-screen bg-linear-to-b from-[#eef3fa] via-[#e9effa] to-[#fdfcfb] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-[#1E293B]">
            Udvalgte projekter
          </h2>
          <p className="mt-4 text-[#475569] max-w-2xl mx-auto">
            Et udsnit af løsninger jeg har bygget til web, interne værktøjer og
            branding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <SpotlightCard
              key={i}
              spotlightColor="rgba(120, 160, 255, 0.25)"
              className="rounded-2xl overflow-hidden shadow-lg border border-[#9AB3FF]/30 
                         hover:shadow-[0_0_30px_rgba(155,180,255,0.35)] transition-all duration-500 
                         bg-white/40 backdrop-blur-lg hover:bg-white/60 flex flex-col"
            >
              <div className="relative w-full h-40 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 
               mask-[linear-gradient(to_bottom,black_85%,transparent_100%)]"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-heading font-bold text-[#0A9396]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#475569] flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-[#9AB3FF]/30 bg-[#f8fafc]/70 text-[#1E293B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div
          className="relative w-full rounded-3xl overflow-hidden 
             border border-[#9AB3FF]/25 backdrop-blur-xl 
             shadow-[0_10px_40px_rgba(155,180,255,0.25)] 
             min-h-[360px]"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
            <ColorBends
              colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
              rotation={30}
              speed={0.3}
              scale={1.2}
              frequency={1.4}
              warpStrength={1.2}
              mouseInfluence={0.8}
              parallax={0.6}
              noise={0.08}
              transparent
            />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
          </div>

          <div className="flex items-center justify-between px-6 pt-6 pb-2 relative z-10">
            <div>
              <h3 className="  text-4xl sm:text-6xl font-heading font-heading font-extrabold text-[#1E293B]">
                Løsningsgalleri
              </h3>
              <p className="  text-2xl sm:text-3xl font-heading text-[#475569]">
                Fremvisning af diverse projekter og cases.
              </p>
            </div>
          </div>

          <div className="relative h-80 z-10">
            <CardSwap
              width={420}
              height={260}
              cardDistance={60}
              verticalDistance={65}
              delay={5000}
              skewAmount={5}
            >
              <Card className="bg-white text-[#1E293B] p-6 flex flex-col gap-3">
                <h4 className="text-xl font-heading">Farsø lægehus: frontside</h4>
                <p className="text-sm text-[#475569]">
                  Forsiden til Farsø lægehus med fokus på brugervenlighed og information.
                </p>
                <span className="text-xs bg-[#eef3fa] rounded-full px-3 py-1 w-fit">
                  React • Tailwind • Vite • TypeScript 
                </span>
              </Card><Card className="bg-white text-[#1E293B] p-6 flex flex-col gap-3">
                <h4 className="text-xl font-heading">About me: person kort</h4>
                <p className="text-sm text-[#475569]">
                  Eksempel fra about me siden af et person kort.
                </p>
                <span className="text-xs bg-[#eef3fa] rounded-full px-3 py-1 w-fit">
                  React • Tailwind • Vite • Azure • TypeScript
                </span>
              </Card><Card className="bg-white text-[#1E293B] p-6 flex flex-col gap-3">
                <h4 className="text-xl font-heading">Notes app: frontpage</h4>
                <p className="text-sm text-[#475569]">
                  Eksempel fra notesappen med synkronisering.
                </p>
                <span className="text-xs bg-[#eef3fa] rounded-full px-3 py-1 w-fit">
                  React • Tailwind • Vite • TypeScript • React Native • SQLite • Firebase
                </span>
              </Card><Card className="bg-white text-[#1E293B] p-6 flex flex-col gap-3">
                <h4 className="text-xl font-heading">Webshop løsning</h4>
                <p className="text-sm text-[#475569]">
                  Webshop bygget med fokus på performance og brugervenlighed.
                </p>
                <span className="text-xs bg-[#eef3fa] rounded-full px-3 py-1 w-fit">
                  React • CSS • TypeScript 
                </span>
              </Card>

              <Card className="bg-white text-[#1E293B] p-6 flex flex-col gap-3">
                <h4 className="text-xl font-heading">KMD Dataleverandør landingpage</h4>
                <p className="text-sm text-[#475569]">
                  Bygget til at simplificere KMD's dataleverandør service.
                </p>
                <span className="text-xs bg-[#eef3fa] rounded-full px-3 py-1 w-fit">
                  JS • CSS • HTML • ASP.NET • IIS-deployment • Node.js • NginX
                </span>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};
