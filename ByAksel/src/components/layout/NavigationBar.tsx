import GlassSurface from "@/components/ui/GlassSurface"

export default function NavigationBar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <GlassSurface
        width="100%"
        height={70}
        borderRadius={16}
        displace={10}
        distortionScale={-120}
        brightness={60}
        opacity={0.85}
        mixBlendMode="screen"
        className="flex items-center justify-center px-8 py-2"
      >
        <nav className="flex gap-10 sm:gap-16 text-base font-medium">
          <a
            href="#about"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </GlassSurface>
    </header>
  )
}
