import { Briefcase, Code, User, Trophy } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & AI/ML Enthusiast
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              I am a passionate developer who enjoys building modern, scalable
              web applications. Skilled in the MERN stack, I’ve worked on
              projects like a Doctor Appointment System, Plagiarism Detection
              Tool (NLP), and interactive web apps including a Global Currency
              Converter and Music Player.
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              My goal is to create solutions that are not only functional but
              also intuitive and impactful. I’m also expanding my knowledge in
              AI/ML to integrate intelligent features into real-world software
              systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1ywqTKTogHJccGLMy0flrlpR8oVEyn5cZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic applications using React,
                    Node.js, Express, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI/ML Projects</h4>
                  <p className="text-muted-foreground">
                    Applying machine learning and NLP techniques to build
                    intelligent and innovative solutions.
                  </p>
                </div>
              </div>
            </div>

       

            {/* New LeetCode / DSA Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving / DSA</h4>
                  <p className="text-muted-foreground">
                    Solved 350+ problems on LeetCode (Easy, Medium, Hard).  
                    Regular participant in coding contests.  
                    <a
                      href="https://leetcode.com/yourusername/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End of DSA Card */}
          </div>
        </div>
      </div>
    </section>
  );
};
