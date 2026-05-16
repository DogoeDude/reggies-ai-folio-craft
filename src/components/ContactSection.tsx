import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xykorogl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const result = await response.json();
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please ensure your Formspree ID is correct and active.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mb-10"></div>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-xl leading-relaxed">
              I'm currently looking for job opportunities where I can learn and contribute. Feel free to reach out 
              if you think we might be a good fit for each other.
            </p>
            
            <p className="text-lg text-muted-foreground mt-2 leading-relaxed">
              I am eager to prove my value to your team, and I am very interested 
              in discussing how my skills and adaptability can benefit your company's long-term goals.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <a href="mailto:reggiehermosisima@gmail.com" className="text-base text-muted-foreground hover:text-primary transition-colors">
                    reggiehermosisima@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Phone</p>
                  <a href="tel:+639763111575" className="text-base text-muted-foreground hover:text-primary transition-colors">
                    09763111575
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/reggie-hermosisima-0937a8275/" target="_blank" rel="noopener noreferrer" className="text-base text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/reggie-hermosisima
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">GitHub</p>
                  <a href="https://github.com/DogoeDude" target="_blank" rel="noopener noreferrer" className="text-base text-muted-foreground hover:text-primary transition-colors">
                    github.com/DogoeDude
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label htmlFor="name" className="text-base font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-white/[0.02] border-white/10 focus-visible:ring-primary/50 backdrop-blur-sm"
                  required
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-base font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-white/[0.02] border-white/10 focus-visible:ring-primary/50 backdrop-blur-sm"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="text-base font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'd like to discuss a potential opportunity..."
                rows={6}
                className="bg-white/[0.02] border-white/10 focus-visible:ring-primary/50 backdrop-blur-sm resize-none"
                required
              />
            </div>
            
            <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
