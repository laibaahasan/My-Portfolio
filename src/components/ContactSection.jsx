import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let’s <span className="text-primary">Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether it’s about collaborating on projects, discussing tech,
          or just having a good conversation — I’d love to hear from you!
        </p>

        {/* Contact Info in middle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-full bg-primary/10 mb-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:laibahasan66@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              laibahasan66@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-full bg-primary/10 mb-3">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Phone</h4>
            <a
              href="tel:+916387641126"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 63876 41126
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-full bg-primary/10 mb-3">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Location</h4>
            <span className="text-muted-foreground">New Delhi, India</span>
          </div>
        </div>

        {/* Socials */}
        <div className="text-center">
          <h4 className="font-medium mb-4">Find Me Online</h4>
          <div className="flex space-x-6 justify-center">
            <a
              href="https://linkedin.com/in/laiba-h-16570023b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#0A66C2] hover:opacity-80 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_laiba_hasan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#E4405F] hover:opacity-80 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

