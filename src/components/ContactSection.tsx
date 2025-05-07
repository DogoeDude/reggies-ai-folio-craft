
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend or email service
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mb-10"></div>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg">
              I'm currently looking for OJT opportunities. Feel free to reach out 
              if you think we might be a good fit for each other.
            </p>
            
            <p className="text-muted-foreground mt-2">
              If you appreciate my performance during the OJT period and there might be 
              potential employment opportunities afterward, I would be very interested 
              in discussing those possibilities with you.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:reggiehermosisima@gmail.com" className="text-muted-foreground hover:text-primary">
                    reggiehermosisima@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+639763111575" className="text-muted-foreground hover:text-primary">
                    09763111575
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/reggie-hermosisima-0937a8275/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    linkedin.com/in/reggie-hermosisima
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a href="https://github.com/DogoeDude" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    github.com/DogoeDude
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'd like to discuss a potential opportunity..."
                rows={6}
                required
              />
            </div>
            
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
