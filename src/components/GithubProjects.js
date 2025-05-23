import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const GithubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/kuldeep-gaur/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const sorted = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      })
      .catch((err) => {
        console.error("GitHub API fetch failed:", err.message);
        setError("Failed to load GitHub projects. Try again later.");
      });
  }, []);

  return (
    <section
      className="github-projects"
      id="github-projects"
      style={{
        padding: "80px 0",
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>GitHub Projects</h2>
        {error && (
          <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>{error}</p>
        )}
        <Row>
          {repos.length === 0 && !error && (
            <p style={{ textAlign: "center", color: "#cccccc" }}>Loading your GitHub projects...</p>
          )}
          {repos.slice(0, 6).map((repo, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <div
                className="github-card"
                style={{
                  backgroundColor: "#1a1a1a",
                  minHeight: "270px",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(255,255,255,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 255, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(255,255,255,0.05)";
                }}
              >
                <div>
                  <h4 style={{ marginBottom: "10px", color: "#ffffff" }}>{repo.name}</h4>
                  <p style={{ color: "#cccccc", fontSize: "14px", minHeight: "50px" }}>
                    {repo.description || "No description available."}
                  </p>
                  <p style={{ fontSize: "13px", color: "#bbbbbb" }}>
                    ⭐ {repo.stargazers_count} &nbsp;&nbsp; 🛠 {repo.language || "N/A"}
                  </p>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0dcaf0",
                    textDecoration: "none",
                    marginTop: "auto",
                    fontWeight: "bold",
                  }}
                >
                  🔗 View on GitHub
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
