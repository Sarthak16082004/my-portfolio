function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👤" },
    { name: "Projects", href: "#projects", icon: "📁" },
    { name: "Experience", href: "#experience", icon: "💼" },
    { name: "Contact", href: "#contact", icon: "✉️" },
  ];

  return (
    <nav
      style={{
        padding: "20px 40px",
        background: "rgba(10, 14, 39, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #2d3748",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div 
        className="container" 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ 
          fontSize: "1.5rem", 
          fontWeight: "700",
          background: "linear-gradient(135deg, #60a5fa, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Sarthak Pathak
        </h2>
        
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                style={{ 
                  color: "#e0e0e0", 
                  transition: "color 0.3s",
                  fontWeight: "500",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#60a5fa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#e0e0e0";
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        <a
          href="#achievements"
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            border: "2px solid #60a5fa",
            borderRadius: "8px",
            color: "#60a5fa",
            fontWeight: "600",
            transition: "all 0.3s ease",
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#60a5fa";
            e.currentTarget.style.color = "#0a0e27";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#60a5fa";
          }}
          title="View achievements"
        >
          🏆
        </a>
      </div>
    </nav>
  );
}

export default Navbar;