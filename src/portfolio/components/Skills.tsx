import { skills } from "../../lib/mock-data";

export const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-end gap-4 mb-12">
          <div className="h-px bg-border flex-1 max-w-xs" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Habilidades
          </h2>
          <span className="text-primary font-mono text-sm">03.</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-background/50 rounded-lg p-6 border border-border/50"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
