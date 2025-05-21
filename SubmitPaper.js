import React, { useState } from "react";
import "./SubmitPaper.css";

function SubmitPaper() {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    email: "",
    abstract: "",
    file: null,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      setMessage("Please upload a paper file.");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("authors", formData.authors);
    data.append("email", formData.email);
    data.append("abstract", formData.abstract);
    data.append("file", formData.file);

    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`✅ ${result.message}`);
        setFormData({ title: "", authors: "", email: "", abstract: "", file: null });
      } else {
        setMessage(`❌ ${result.message || "Failed to submit paper."}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("⚠️ Error uploading file.");
    }
  };

  return (
    <div className="submit-paper-wrapper">
      <div className="submit-paper-card">
        <h2>📄 Submit Your Paper</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>📌 Paper Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter your paper title"
          />

          <label>👨‍💼 Author(s) Name (comma separated)</label>
          <input
            type="text"
            name="authors"
            value={formData.authors}
            onChange={handleChange}
            required
            placeholder="Author names separated by commas"
          />

          <label>📧 Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Contact email"
          />

          <label>📝 Abstract</label>
          <textarea
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            required
            placeholder="Write a brief abstract..."
          />

          <label>📎 Upload Paper (PDF)</label>
          <input
            key={formData.file ? formData.file.name : ""}
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />

          <button type="submit">🚀 Submit Paper</button>
        </form>
        {message && <p className="form-message">{message}</p>}
      </div>
    </div>
  );
}

export default SubmitPaper;
