function Skills() {
  const skillCategories = [
    {
      name: "FRONTEND",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
    },
    {
      name: "BACKEND",
      skills: ["Node.js", "Express", "REST API", "GraphQL", "Socket.io"],
    },
    {
      name: "DATABASE",
      skills: ["MongoDB", "Supabase", "Firebase", "PostgreSQL", "MySQL", "Prisma"],
    },
    {
      name: "TOOLS",
      skills: ["Git", "Docker", "Recoil", "Hardhat", "RainbowKit", "NextAuth"],
    },
    {
      name: "BLOCKCHAIN",
      skills: ["Solana", "Web3", "Smart Contracts", "ethers.js", "remix", "EVM", "solidity", "rust", "Stellar"],
    },
  ];

  return (
    <section id="skills" style={{ 
      padding: "100px 20px", 
      backgroundColor: "#0a0e27",
    }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2 className="section-title" style={{
          fontSize: "3rem",
          marginBottom: "4rem",
        }}>Skills</h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "3rem",
        }}>
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 style={{ 
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
                color: "#808080",
                fontWeight: "600",
                letterSpacing: "1px",
              }}>
                {category.name}
              </h3>
              <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "0.75rem",
              }}>
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    style={{
                      display: "inline-block",
                      backgroundColor: "#1a1f3a",
                      color: "#e0e0e0",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      fontSize: "0.95rem",
                      border: "1px solid #2d3748",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#60a5fa";
                      e.currentTarget.style.backgroundColor = "#2d3748";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#2d3748";
                      e.currentTarget.style.backgroundColor = "#1a1f3a";
                    }}
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
}

export default Skills;