function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "3rem 20px",
      borderTop: "1px solid #2d3748",
      backgroundColor: "#0a0e27",
      color: "#808080",
    }}>
      <p style={{ 
        fontSize: "1rem",
        marginBottom: "0.5rem",
      }}>
        © 2026 Sarthak Pathak. All rights reserved.
      </p>
      <p style={{ 
        fontSize: "0.9rem",
        color: "#606060",
      }}>
        Designed & Built with React
      </p>
    </footer>
  );
}

export default Footer;