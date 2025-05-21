import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

function Report() {
  const [papers, setPapers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Replace this with actual admin logic later (e.g., JWT, session)
    const userEmail = localStorage.getItem("userEmail"); // or any login session info
    if (userEmail === "admin@example.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) {
      fetch("http://localhost:5000/api/all-submissions")
        .then((res) => res.json())
        .then((data) => setPapers(data))
        .catch((err) => console.error("Error fetching papers:", err));
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return <h2 style={{ padding: "2rem", color: "red" }}>🚫 Access Denied</h2>;
  }

  return (
    <div className="admin-dashboard">
      <h2>📚 Submitted Papers Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Email</th>
            <th>Abstract</th>
            <th>Status</th>
            <th>Submitted At</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((paper) => (
            <tr key={paper._id}>
              <td>{paper.title}</td>
              <td>{paper.authors}</td>
              <td>{paper.email}</td>
              <td>{paper.abstract}</td>
              <td>{paper.reviewStatus}</td>
              <td>{new Date(paper.submittedAt).toLocaleString()}</td>
              <td>
                <a
                  href={`http://localhost:5000/${paper.filePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;
