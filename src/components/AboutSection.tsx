
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const qualities = [
    "Problem Solver",
    "Critical Thinker",
    "Communicative",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Resourcefulness",
    "Keen to Details",
    "Project Management",
    "Self-motivation / Initiative"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          
          <div className="space-y-6">
            <p className="text-lg">
              I'm currently pursuing a degree in <span className="highlight">Computer Science</span> at USTP CDO, 
              where I've developed a strong foundation in programming, database management, and web development.
            </p>
            
            <p className="text-lg">
              My passion lies in creating efficient solutions and exploring emerging technologies. 
              I enjoy working with AI-assisted development tools to enhance productivity and solution quality.
            </p>
            
            <h3 className="text-xl font-semibold mt-10 mb-4">Key Attributes</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {qualities.map((quality, index) => (
                <Card key={index} className="p-3 text-center bg-white hover:shadow-md transition-all">
                  <p>{quality}</p>
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
