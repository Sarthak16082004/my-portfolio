function About() {
  return (
    <section id="about" style={{ 
      padding: "100px 20px", 
      backgroundColor: "#0f1230",
    }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2 className="section-title" style={{
          fontSize: "3rem",
          marginBottom: "4rem",
        }}>About Me</h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}>
          <p style={{
            fontSize: "1.15rem",
            lineHeight: "1.9",
            color: "#c0c0c0",
            maxWidth: "900px",
          }}>
            I am a Full Stack Blockchain Developer with experience building scalable Web2 and Web3 applications.
            I specialize in smart contracts, decentralized applications, and blockchain-based payment systems with a 
            strong focus on real-world use cases. With hands-on hackathon wins and rapid prototyping skills, I turn 
            complex ideas into production-ready solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;