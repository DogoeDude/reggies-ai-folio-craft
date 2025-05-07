
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-8">
            <p className="text-lg">
              My practical experience and projects are showcased on my GitHub profile.
              There you can find various projects that demonstrate my skills in programming,
              web development, and more.
            </p>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">
                GitHub Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                Browse through my repositories to see my coding style, problem-solving approach, 
                and technical capabilities in action.
              </p>
              <Button asChild size="lg" className="gap-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View My GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
