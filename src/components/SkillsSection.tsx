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
    <Card className={cn("h-full transition-all hover:shadow-md", className)}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
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
      skills: ["Python", "C++", "Java", "JavaScript/TypeScript"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-5 w-5 text-primary" />,
      skills: ["React", "HTML/CSS", "Responsive Design", "API Integration"],
    },
    {
      title: "Database & Analysis",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["MySQL", "Supabase", "Database Design", "SQL Queries", "Data Analysis and Interpretation"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5 text-primary" />,
      skills: ["Prompt Engineering", "ChatGPT", "Deepseek", "Claude", "Machine Learning Basics", "AI Research Tools"],
    },
    {
      title: "Tools & Practices",
      icon: <Github className="h-5 w-5 text-primary" />,
      skills: ["Git/GitHub", "VS Code", "Cursor", "IntelliJ", "Agile Methodology"],
    },
    {
      title: "AI-Enhanced Development",
      icon: <Brain className="h-5 w-5 text-primary" />,
      skills: ["GitHub Copilot", "Cursor AI", "Code Generation", "Research Automation", "AI Code Review"],
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
    <section id="skills" className="section-padding py-20">
      <div className="max-w-6xl mx-auto">
        {/* Technical Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
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
          <h2 className="text-3xl font-bold mb-2">Soft Skills</h2>
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
    </section>
  );
};

export default SkillsSection;
