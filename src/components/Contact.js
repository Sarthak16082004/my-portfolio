function Contact() {
  const contactLinks = [
    { 
      label: "Email", 
      value: "sarthakpathak1608@gmail.com", 
      href: "mailto:sarthakpathak1608@gmail.com", 
      icon: "📧" 
    },
    { 
      label: "GitHub", 
      value: "Sarthak16082004", 
      href: "https://github.com/Sarthak16082004", 
      icon: "🔗" 
    },
    { 
      label: "LinkedIn", 
      value: "sarthak-pathak", 
      href: "https://www.linkedin.com/in/sarthak-pathak-639717302", 
      icon: "💼" 
    },
    { 
      label: "Location", 
      value: "Dehradun, Uttarakhand, India", 
      href: "#", 
      icon: "📍" 
    },
  ];

  return (
    <section id="contact" style={{ 
      padding: "100px 20px", 
      backgroundColor: "#0f1230",
    }}>
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        <h2 className="section-title" style={{
          fontSize: "3rem",
          marginBottom: "1rem",
        }}>Get in Touch</h2>
        <p style={{
          fontSize: "1.1rem",
          color: "#a0a0a0",
          marginBottom: "4rem",
          lineHeight: "1.8",
        }}>
          Want to work together? Feel free to reach out for collaborations or just a friendly hello.
        </p>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              style={{
                padding: "2rem",
                backgroundColor: "#1a1f3a",
                border: "1px solid #2d3748",
                borderRadius: "12px",
                color: "#e0e0e0",
                textDecoration: "none",
                transition: "all 0.3s ease",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#60a5fa";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(96, 165, 250, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2d3748";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                {link.icon}
              </div>
              <div style={{ 
                fontSize: "0.85rem", 
                color: "#808080",
                marginBottom: "0.5rem",
              }}>
                {link.label}
              </div>
              <div style={{ 
                fontSize: "0.95rem", 
                color: "#60a5fa",
                fontWeight: "500",
              }}>
                {link.value}
              </div>
            </a>
          ))}
        </div>
        
        <a 
          href="mailto:sarthakpathak1608@gmail.com" 
          className="btn btn-primary"
          style={{
            padding: "14px 32px",
            fontSize: "1.1rem",
          }}
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;