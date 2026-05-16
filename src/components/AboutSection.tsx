
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const qualities = [
    "Problem Solver",
    "Critical Thinker",
    "Communicative",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Keen to Details",
    "Project Management",

  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-3">About Me</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>

          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Computer Science graduate (2026)</span> from USTP Cagayan de Oro with experience in front-end and back-end development and applied machine learning. Skilled in building applications, training models, and leading teams to deliver projects.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Proficient in Python and JavaScript, with experience in multi-agent systems and continuous learning in software, hardware, and German.
            </p>

            <h3 className="text-3xl font-semibold tracking-tight mt-14 mb-8 text-foreground/90">Key Attributes</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {qualities.map((quality, index) => (
                <Card key={index} className="p-5 text-center bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                  <p className="font-semibold text-lg text-muted-foreground hover:text-foreground transition-colors">{quality}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
