import { certifications, education } from "@/lib/mock-data";

export function Education() {
  return (
    <section id="training" className="px-6 py-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-end gap-4 mb-12">
          <div className="h-px bg-border flex-1 max-w-xs" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Formacion
          </h2>
          <span className="text-primary font-mono text-sm">04.</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Educación
            </h3>
            {education.map((item, index) => (
              <div key={item.title} className="relative pl-8 pb-8 last:pb-0">
                {/* Timeline line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-[11px] top-3 w-px h-full bg-border" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-background" />

                <div>
                  <p className="text-primary font-mono text-sm mb-1">
                    {item.period}
                  </p>
                  <h4 className="text-foreground font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {item.institution}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Certificaciones
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center gap-3 text-muted-foreground text-sm"
                >
                  <span className="text-primary text-xs">▹</span>
                  <a href={cert.url} className="hover:text-primary">
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
