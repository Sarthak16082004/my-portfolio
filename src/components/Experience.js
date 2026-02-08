function Experience() {
  const achievements = [
    {
      title: "Paradigm Shift Hackathon(JGEC) 🏆",
      subtitle: "1st Runner-Up",
      date: "Dec 2025",
      icon: "💡",
      tags: ["Next.js", "Node.js", "Express", "3web.js", "Gemini Ai", "clerk", "TypeScript"],
    },
    {
      title: "East India Blockchain Summit 2.0(IIT KGP)",
      subtitle: "Finalist",
      date: "Jan 2025",
      icon: "🏆",
      tags: ["Next.js", "solidity", "Prisma", "EVM", "Weleptic", "Node.js", "Express", "Ether.js", "TypeScript"],
    },
    {
      title: "Educathon 3.0 (TMSL)",
      subtitle: "Finalist",
      date: "Nov 2025",
      icon: "🏆",
      tags: ["Next.js", "solidity", "Prisma", "EVM", "remix", "Node.js", "Express", "Gemini Ai", "Ether.js"],
    },
  ];

  return (
    <section id="experience" style={{ 
      padding: "100px 20px", 
      backgroundColor: "#0f1230",
    }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2 className="section-title" style={{
          fontSize: "3rem",
          marginBottom: "4rem",
        }}>Achievements & Hackathons</h2>
        
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: "#1a1f3a",
                border: "1px solid #2d3748",
                borderRadius: "16px",
                padding: "2.5rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#60a5fa";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(96, 165, 250, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2d3748";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "2rem",
              }}>
                {/* Icon */}
                <div style={{
                  fontSize: "3rem",
                  backgroundColor: "#2d3748",
                  width: "80px",
                  height: "80px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {achievement.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.5rem",
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: "1.5rem",
                        color: "#ffffff",
                        marginBottom: "0.25rem",
                      }}>
                        {achievement.title}
                      </h3>
                      <p style={{
                        fontSize: "1.1rem",
                        color: "#a0a0a0",
                      }}>
                        {achievement.subtitle}
                      </p>
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#808080",
                      fontSize: "0.95rem",
                    }}>
                      📅 {achievement.date}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    marginTop: "1.5rem",
                  }}>
                    {achievement.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: "#2d3748",
                          color: "#e0e0e0",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "0.9rem",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;