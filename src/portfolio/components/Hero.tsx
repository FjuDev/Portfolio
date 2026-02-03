import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <p className="text-primary font-mono text-sm mb-4 tracking-wide">
          Hola, soy
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Francisco Jurado
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-8 text-balance">
          Desarrollador de Aplicaciones Multiplataforma
        </h2>
        
        {/* <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl mb-8 leading-relaxed">
          Graduado en DAM con pasion por la tecnología y el desarrollo. Especializado en Backend y con conocimientos
          en Frontend.

          {/* TODO MEJORAR ESTO */}
          {/* <p className="text-primary">Busco una oportunidad profesional para seguir creciendo.</p> */}

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Espana</span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/FjuDev"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-jurado-437334213/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:fjurado@icloud.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
