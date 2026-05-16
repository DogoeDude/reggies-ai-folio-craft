import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Github, Globe, Brain, Network, Users, Clock, Target } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillCategoryProps = {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  className?: string;
};

const SkillCategory = ({ title, skills, icon, className }: SkillCategoryProps) => {
  return (
    <Card className={cn("h-full bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-500 backdrop-blur-sm", className)}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
        <ul className="space-y-3 text-base">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const technicalSkills = [
    {
      title: "Programming",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: ["Python", "C++", "JavaScript/TypeScript"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-5 w-5 text-primary" />,
      skills: ["React", "HTML/CSS", "ShadCN", "API Integration"],
    },
    {
      title: "Database & Analysis",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["MySQL", "Supabase", "Database Design", "Data Analysis"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5 text-primary" />,
      skills: ["Deepseek", "Claude", "Machine Learning Basics", "AI Research Tools"],
    },
    {
      title: "Tools & Practices",
      icon: <Github className="h-5 w-5 text-primary" />,
      skills: ["Git/GitHub", "VS Code", "Cursor", "IntelliJ"],
    },
    {
      title: "AI-Enhanced Development",
      icon: <Brain className="h-5 w-5 text-primary" />,
      skills: ["GitHub Copilot", "Cursor AI", "Research Automation", "AI Code Review"],
    },
  ];

  const softSkills = [
    {
      title: "Problem Solving & Critical Thinking",
      icon: <Target className="h-5 w-5 text-primary" />,
      skills: ["Problem Solving", "Critical Thinking", "Attention to Detail"],
    },
    {
      title: "Communication & Teamwork",
      icon: <Users className="h-5 w-5 text-primary" />,
      skills: ["Communication", "Teamwork & Collaboration", "Project Management"],
    },
    {
      title: "Work Management",
      icon: <Clock className="h-5 w-5 text-primary" />,
      skills: ["Time Management", "Adaptability", "Resourcefulness"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Technical Skills Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-3">Technical Skills</h2>
            <div className="h-1 w-20 bg-primary mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((category, index) => (
                <SkillCategory
                  key={index}
                  title={category.title}
                  skills={category.skills}
                  icon={category.icon}
                />
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div>
            <h2 className="text-4xl font-bold mb-3">Soft Skills</h2>
            <div className="h-1 w-20 bg-primary mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((category, index) => (
                <SkillCategory
                  key={index}
                  title={category.title}
                  skills={category.skills}
                  icon={category.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
