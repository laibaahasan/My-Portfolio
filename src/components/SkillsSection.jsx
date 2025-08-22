export const SkillsSection = () => {
  const skills = {
    Languages: ["Python", "C", "C++", "HTML", "JavaScript", "SQL"],
    "Libraries & Frameworks": ["Bootstrap", "Tailwind CSS", "React.js", "Node.js"],
    Databases: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "Postman", "Razorpay", "Jupyter Notebook"],
    "AI / ML ": [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Training & Evaluation",
      "Feature Engineering",
    ],
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        {/* Skill Categories */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              {/* Category Heading */}
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary/90 to-purple-500/80 text-transparent bg-clip-text">
                {category}
              </h3>

              {/* Skills as buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 rounded-full border border-primary/40 text-primary font-medium bg-card shadow-sm hover:bg-gradient-to-r hover:from-primary hover:to-purple-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




