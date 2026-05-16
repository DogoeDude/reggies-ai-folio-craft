
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <p className="text-primary font-semibold text-lg mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight py-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-primary/40 animate-fade-in">
            Hermosisima, Reggie Y.
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground leading-snug mb-8 max-w-3xl mx-auto">
            A growing Developer at Philippines, Misamis Oriental
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate problem solver and developer with experience in web development,
            machine learning, and AI-assisted development. Currently seeking job opportunities where I can contribute and grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 transition-all duration-300">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/[0.02] border-white/10 hover:bg-white/[0.05] transition-all duration-300">
              <a href="#experience">See My Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
