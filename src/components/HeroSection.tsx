
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-primary font-medium mb-3">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hermosisima, Reggie Y.
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Computer Science Student at USTP CDO
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm a passionate problem solver and developer with experience in web development, 
            machine learning, and AI-assisted development. Currently seeking OJT opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#experience">See My Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
