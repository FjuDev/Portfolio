import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">05. ¿Qué sigue?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Contacta Conmigo
        </h2>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          Actualmente busco nuevas oportunidades como desarrollador. Si piensas
          que mi perfil puede encajar en tu equipo, o te puedo
          ayudar con alguna tecnología, no dudes en escribirme.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
        >
          <a href="mailto:fjurado@icloud.com">Envíame un Email</a>
        </Button>
      </div>
    </section>
  );
};
