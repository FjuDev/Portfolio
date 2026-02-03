export const About = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Sobre mi
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Soy desarrollador titulado en
              <span className="text-primary">
                {" "}
                Desarrollo de Aplicaciones Multiplataforma (DAM)
              </span>
              . <br />
              Durante mi formación he trabajado en diferentes proyectos que me
              han permitido desarrollar habilidades tanto en backend como en
              frontend, a la vez que trabajaba con proyectos personales, algunos
              disponibles en GitHub.
              Mi objetico es crear aplicaciones que funcionen correctamente,
              y que ofrezcan una
              <span className="text-primary">
                {" "}
                experiencia al usuario cuidada y eficiente
              </span>
              . <br />
              <br />
              Me encanta trabajar en mis propios proyectos, aprender tecnologías
              nuevas y mantenerme a la última en tendencias del desarrollo de
              software.
              <br />
              <br /> Actualmente estoy abierto a nuevas oportunidades laborales
              donde pueda seguir creciendo y participar en proyectos reales
              aportando lo mejor de mí.
            </p>
          </div>
          <div className="md:col-span-2 relative group">
            <div className="relative w-56 h-56 mx-auto md:ml-auto md:mr-0">
              <div className="absolute inset-0 bg-primary/20 rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative w-full h-full bg-secondary rounded-lg overflow-hidden border-2 border-primary/50">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <img
                    src="/src/assets/imagenPerfil.JPEG"
                    className="text-6xl font-bold text-primary/30"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
