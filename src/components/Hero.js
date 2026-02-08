function Hero() {
  return (
    <section id="home" style={{
      padding: "120px 20px 80px",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
    }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>
          {/* Left side - Text content */}
          <div>
            <h1 style={{
              fontSize: "4rem",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#ffffff",
            }}>
              Hi, I'm Sarthak <span style={{ display: "inline-block" }}>👋</span>
            </h1>
            <h2 style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "30px",
              background: "linear-gradient(135deg, #60a5fa, #93c5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Full Stack Blockchain Developer
            </h2>
            <p style={{
              fontSize: "1.2rem",
              color: "#c0c0c0",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}>
              I create and ship end-to-end web applications using modern development stacks. 
              At present, I'm focused on developing Web3 solutions and collaborating on open-source initiatives.
            </p>
            <div style={{ marginTop: "40px", display: "flex", gap: "1rem" }}>
              <a href="#contact" className="btn btn-primary" style={{
                padding: "14px 32px",
                fontSize: "1.1rem",
              }}>
                Open CV →
              </a>
              <a href="#contact" className="btn" style={{
                padding: "14px 32px",
                fontSize: "1.1rem",
              }}>
                Contact me →
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #60a5fa",
              boxShadow: "0 20px 60px rgba(96, 165, 250, 0.3)",
            }}>
              <img 
                src="https://avatars.githubusercontent.com/u/134594305?v=4" 
                alt="Sarthak Pathak"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;