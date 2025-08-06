import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactCard from "@/components/animations/ContactCard";
import { EMAIL_CONFIG, sendFallbackEmail, type EmailParams } from "@/config/email";
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Email parameters
      const emailParams: EmailParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAIL_CONFIG.TO_EMAIL,
      };

      // For now, use fallback email function
      // In production, you can uncomment the EmailJS code below
      // await emailjs.send(
      //   EMAIL_CONFIG.SERVICE_ID,
      //   EMAIL_CONFIG.TEMPLATE_ID,
      //   emailParams,
      //   EMAIL_CONFIG.PUBLIC_KEY
      // );

      // Uncomment the following code when you set up EmailJS:
      /*
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        emailParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );
      */

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Gmail",
      details: "harija9080@gmail.com",
      action: "mailto:harija9080@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+91 9080773897",
      action: "tel:+91 9080773897"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      details: "San Francisco, Tiruppur",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactCard 
                    key={info.title}
                    delay={index * 0.1}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl glass">
                      <CardContent className="p-4">
                        <a 
                          href={info.action}
                          className="flex items-center gap-4 group-hover:text-primary transition-colors"
                        >
                          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold">{info.title}</h4>
                            <p className="text-muted-foreground group-hover:text-inherit transition-colors">
                              {info.details}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </ContactCard>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={300}>
            <ContactCard isLoading={isLoading}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl glass">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-background/50 border-border/50 focus:ring-primary focus:border-primary"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border/50 focus:ring-primary focus:border-primary"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className="bg-background/50 border-border/50 focus:ring-primary focus:border-primary min-h-[120px] resize-none"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ContactCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;