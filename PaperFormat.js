// src/pages/PaperFormat.js
import React from "react";
import { FileText } from "lucide-react";
import "./PaperFormat.css";

const PaperFormat = () => {
  return (
    <div className="paper-format-container">
      <h1>Paper Format</h1>
      <p>Please download and use the official paper format for submissions.</p>

      <a
        href="/assets/IJRETA-Paper-Format.docx"
        download
        className="download-button"
      >
        <FileText size={20} style={{ marginRight: "8px" }} />
        Download DOCX Format
      </a>
    </div>
  );
};

export default PaperFormat;
