import { Button } from "@/components/ui/button";
import { Github, Award, Trophy, FileCode, Brain, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const projects = [
    {
      name: "ENHANCED COMPUTATIONAL MODELING OF URBAN EVACUATION",
      description: "Developed a research-based evacuation simulation using a Mesoscopic Cellular Automaton model, integrating Dijkstra-based routing and hazard penalty functions to optimize path selection under congestion conditions.",
      link: "#"
    },
    {
      name: "Regex2DFATool",
      description: "Developed a tool that generates lexical analyzers (scanners) from regular expressions by converting them into finite automata and producing corresponding scanner code.",
      link: "https://github.com/DogoeDude/Regex2DFATool"
    },
    {
      name: "LocalAreaChat",
      description: "Built a concurrent client-server messaging system using socket programming, supporting real-time bidirectional communication, multi-client handling, and connection management (disconnections and reconnections).",
      link: "#"
    },
    {
      name: "VisualNote AI",
      description: "An AI-powered visual note-taking application. Helped with setting up the API's needed for the application to be able to fully function as intended. And also helped with setting up the data base for the application which utilized Supabase.",
      link: "https://github.com/Illamapalooza/visualnote-ai"
    }
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
      title: "DevCon",
      description: "Participated in developer community activities",
      icon: <FileCode className="h-5 w-5 text-primary" />
    },
    {
      title: "Core Team Member",
      description: "School organization leadership role in 2nd year",
      icon: <Award className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-3">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-10 md:mx-0"></div>

          {/* AI Approach Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-center md:text-left">My Approach</h3>
            <Card className="mb-8 bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-500 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold text-xl">AI-Powered Development</h4>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I leverage AI tools to enhance my development workflow and productivity. Rather than adhering strictly to traditional
                  approaches, I embrace technological advancements that allow me to work smarter and deliver results faster.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <Card className="bg-black/20 border-white/5">
                    <CardContent className="p-4">
                      <h5 className="font-semibold text-lg mb-3">Benefits</h5>
                      <ul className="space-y-2 text-base">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>Accelerated development cycles</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>Focus on complex problem-solving</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>Enhanced code quality</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-black/20 border-white/5">
                    <CardContent className="p-4">
                      <h5 className="font-semibold text-lg mb-3">Tools Used</h5>
                      <ul className="space-y-2 text-base">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>GitHub Copilot</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>Cursor Editor</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>ChatGPT & Claude</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>Deepseek AI</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>Research Assistants</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4 bg-primary/10 p-5 rounded-lg border border-primary/20 backdrop-blur-sm">
                  <p className="text-base leading-relaxed">
                    <strong>My Philosophy:</strong> AI tools are designed to make development and research more efficient.
                    I embrace these technologies not as replacements for skill, but as amplifiers that allow me to focus on higher-level
                    problem solving and creative work. By leveraging the latest AI advancements, I can deliver better results more quickly
                    while continuously expanding my technical capabilities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Objective Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-center md:text-left">Career Objective</h3>
            <Card className="hover:shadow-lg transition-all duration-500 border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-transparent border-t-white/5 border-r-white/5 border-b-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h4 className="font-bold text-xl flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Seeking Job Opportunities
                  </h4>
                  <span className="text-base font-semibold bg-primary/10 text-primary px-4 py-1.5 rounded-full mt-2 md:mt-0">Available Now</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a graduating student, I am actively looking for job opportunities where I can contribute to the company's growth. I am highly motivated, willing to immerse myself in the company's culture, and eager to learn industry-standard development practices. My goal is to apply my foundational skills while adapting to professional environments, ultimately making meaningful contributions to the team's success.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-center md:text-left">Achievements & Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-500 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      {achievement.icon}
                      <h4 className="font-semibold text-lg">{achievement.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-base">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-center md:text-left">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-primary/50 transition-all duration-500 backdrop-blur-sm flex flex-col h-full group">
                  <CardContent className="p-5 flex flex-col h-full">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <FileCode className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-xl">{project.name}</span>
                    </h4>
                    <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">{project.description}</p>
                    <div className="mt-auto pt-2">
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto bg-white/[0.02] border-white/10 hover:bg-primary/20 hover:text-primary transition-all duration-300">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <Github className="h-4 w-4" />
                          {project.link === "#" ? "Private Repository" : "View Project"}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
