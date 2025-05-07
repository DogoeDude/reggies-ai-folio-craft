
import { Button } from "@/components/ui/button";
import { Github, Award, Trophy, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const projects = [
    {
      name: "C++ DBMS GUI",
      description: "A database management system with graphical user interface built with C++.",
      link: "https://github.com/DogoeDude/C-_DBMS-GUI-"
    },
    {
      name: "Todo App",
      description: "A task management application to organize and track todos.",
      link: "https://github.com/DogoeDude/Todo-App"
    },
    {
      name: "Regex2DFATool",
      description: "A tool for converting regular expressions to Deterministic Finite Automata.",
      link: "https://github.com/DogoeDude/Regex2DFATool"
    },
    {
      name: "NetComs Chat App",
      description: "A networking communications chat application.",
      link: "https://github.com/DogoeDude/NetComs_ChatApp"
    },
    {
      name: "VisualNote AI",
      description: "An AI-powered visual note-taking application.",
      link: "https://github.com/Illamapalooza/visualnote-ai"
    },
  ];

  const achievements = [
    {
      title: "Hackathon Participant",
      description: "GenAIPHBuilders AgenticAI (Current)",
      icon: <Trophy className="h-5 w-5 text-primary" />
    },
    {
      title: "Hackathon Participant",
      description: "Skiptala 2025",
      icon: <Trophy className="h-5 w-5 text-primary" />
    },
    {
      title: "Dean's Lister",
      description: "Academic achievement in Computer Science",
      icon: <Award className="h-5 w-5 text-primary" />
    },
    {
      title: "Cisco Networking",
      description: "Completed networking basics certification",
      icon: <FileCode className="h-5 w-5 text-primary" />
    },
    {
      title: "DevCon Member",
      description: "Active participant in developer community",
      icon: <FileCode className="h-5 w-5 text-primary" />
    },
    {
      title: "Core Team Member",
      description: "School organization leadership role in 2nd year",
      icon: <Award className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-10 md:mx-0"></div>
          
          {/* Achievements Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Achievements & Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      {achievement.icon}
                      <h4 className="font-medium">{achievement.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Projects Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <FileCode className="h-4 w-4 text-primary" />
                      {project.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* GitHub Profile */}
          <div className="text-center md:text-left">
            <div className="p-6 bg-white rounded-lg shadow-sm border max-w-3xl mx-auto md:mx-0">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center md:justify-start">
                <Github className="h-5 w-5 text-primary" />
                GitHub Profile
              </h3>
              <p className="text-muted-foreground mb-6">
                Explore all my repositories and contributions on GitHub to see my coding style,
                problem-solving approach, and technical capabilities in action.
              </p>
              <Button asChild size="lg" className="gap-2">
                <a href="https://github.com/DogoeDude" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Visit My GitHub
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
