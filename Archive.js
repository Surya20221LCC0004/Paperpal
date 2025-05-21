import React from "react";
import "./Archive.css"; // Create this if you want custom styles

const Archive = () => {
  const archiveData = [
    {
      volume: "Volume 9",
      issue: "Issue 4",
      month: "December 2024",
      pdfLink: "/archives/vol9-issue4.pdf"
    },
    {
      volume: "Volume 9",
      issue: "Issue 3",
      month: "September 2024",
      pdfLink: "/archives/vol9-issue3.pdf"
    },
    {
      volume: "Volume 9",
      issue: "Issue 2",
      month: "June 2024",
      pdfLink: "/archives/vol9-issue2.pdf"
    },
    {
      volume: "Volume 9",
      issue: "Issue 1",
      month: "March 2024",
      pdfLink: "/archives/vol9-issue1.pdf"
    },
    // Add more issues as needed
  ];

  return (
    <div className="archive-page">
      <header className="archive-header">
        <h1>Archives</h1>
        <p>Browse past issues of IJRETA</p>
      </header>

      <div className="archive-list">
        {archiveData.map((item, index) => (
          <div className="archive-card" key={index}>
            <h3>{item.volume} - {item.issue}</h3>
            <p><strong>Month:</strong> {item.month}</p>
            <a href={item.pdfLink} target="_blank" rel="noopener noreferrer" className="archive-link">
              View Full Issue PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
