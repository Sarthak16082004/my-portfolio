function Projects() {
  const featuredProjects = [
    {
      title: "Zentra",
      description: "Enabling Under-Collateralized Lending in Web3 through Community-Driven Trust Scores",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      tags: ["TypeScript", "Next.js", "Blockchain"],
      github: "https://github.com/Sarthak16082004",
      demo: "#",
      gradient: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
    },
    {
      title: "Relifo",
      description: "A transparent, blockchain-powered platform for disaster relief campaigns with dual-chain architecture.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      tags: ["TypeScript", "Open Source"],
      github: "https://github.com/Sarthak16082004",
      demo: "#",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
  ];

  const otherProjects = [
    {
      title: "P2P Serverless Torrent",
      description: "A lightweight, browser-based peer-to-peer file sharing app using WebTorrent library. Share and download files directly without central servers.",
      tags: ["JavaScript", "HTML/CSS", "WebTorrent", "P2P"],
      link: "https://github.com/Sarthak16082004/P2P-Serverless-Torrent",
      icon: "🌐",
    },
    {
      title: "Sign Language to Text Converter",
      description: "AI-powered Hackathon project to convert sign language to text, enabling communication for Deaf and Mute communities.",
      tags: ["Python", "AI/ML", "OpenCV", "Hackathon"],
      link: "https://github.com/Sarthak16082004",
      icon: "🤖",
    },
    {
      title: "TaskMate - Task Manager",
      description: "Offline-first Flutter & Node.js task manager with authentication, persistent login, and seamless online/offline sync.",
      tags: ["Flutter", "Node.js", "Firebase", "React"],
      link: "https://github.com/Sarthak16082004/taskmate-offline-task-manager",
      icon: "✅",
    },
    {
      title: "NLP-based Code Compiler",
      description: "AI-powered compiler using CodeT5 and fine-tuned models for natural language processing of code.",
      tags: ["Python", "NLP", "CodeT5", "Machine Learning"],
      link: "https://github.com/Sarthak16082004/NLP-Compiler-main",
      icon: "💻",
    },
  ];

  return (
    <section id="projects" style={{ 
      padding: "100px 20px", 
      backgroundColor: "#0a0e27",
    }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2 className="section-title" style={{
          fontSize: "3rem",
          marginBottom: "1rem",
        }}>Featured Projects</h2>
        <p style={{
          textAlign: "center",
          color: "#a0a0a0",
          marginBottom: "4rem",
          fontSize: "1.1rem",
        }}>
          Here are some of the projects I've worked on recently.
        </p>

        {/* Featured Projects */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          marginBottom: "4rem",
        }}>
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1a1f3a",
                border: "1px solid #2d3748",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "#60a5fa";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#2d3748";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Project Image */}
              <div style={{
                height: "250px",
                background: project.gradient,
                position: "relative",
                overflow: "hidden",
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.8,
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  display: "flex",
                  gap: "0.5rem",
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "1.2rem",
                    }}
                  >
                    🔗
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "1.2rem",
                    }}
                  >
                    ↗
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: "2rem" }}>
                <h3 style={{
                  fontSize: "1.5rem",
                  color: "#ffffff",
                  marginBottom: "1rem",
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: "#c0c0c0",
                  marginBottom: "1.5rem",
                  lineHeight: "1.6",
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "#2d3748",
                        color: "#e0e0e0",
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}>
          {otherProjects.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1a1f3a",
                border: "1px solid #2d3748",
                borderRadius: "12px",
                padding: "2rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#60a5fa";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(96, 165, 250, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#2d3748";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                fontSize: "3rem",
                marginBottom: "1rem",
              }}>
                {project.icon}
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}>
                {project.title}
              </h3>
              <p style={{
                color: "#c0c0c0",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}>
                {project.description}
              </p>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: "#2d3748",
                      color: "#e0e0e0",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#60a5fa",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                }}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;