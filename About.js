src/pages/Authors.js
import React from "react";
import "..//pages/Editorial.css";  

const Authors = () => {
  return (
    <section className="editorial-section">
      <div className="container">
        <h1>Author Guidelines</h1>

        <div className="editorial-group">
          <p>
            Welcome to IJRETA. We appreciate your interest in submitting your research to our journal. To ensure a smooth submission process and maintain the high standards of our publication, please carefully review and adhere to the following guidelines.
          </p>

          <h2>1. Scope and Focus</h2>
          <p>
            IJRETA publishes original research articles, reviews, case studies, and short communications across a wide range of disciplines [include specific areas of focus]. Submissions should contribute to the advancement of knowledge in the field and align with the journal’s aim to disseminate high-quality, impactful research.
          </p>

          <h2>2. Manuscript Preparation</h2>

          <h3>2.1 General Requirements</h3>
          <ul>
            <li><strong>Language:</strong> All manuscripts must be written in English...</li>
            <li><strong>Originality:</strong> The manuscript must be original, unpublished...</li>
            <li><strong>Word Count:</strong> Research articles should not exceed 10000 words...</li>
            <li><strong>Format:</strong> Manuscripts should be prepared using a standard word processing program...</li>
          </ul>

          <h3>2.2 Manuscript Structure</h3>
          <ul>
            <li><strong>Title Page:</strong>
              <ul>
                <li>Title of the manuscript (concise and informative)</li>
                <li>Full names, affiliations, and email addresses of all authors</li>
                <li>Corresponding author’s contact details</li>
                <li>Acknowledgment of funding sources, if applicable</li>
              </ul>
            </li>
            <li><strong>Abstract:</strong> A concise summary of the research (150-250 words)...</li>
            <li><strong>Keywords:</strong> Provide 4-6 keywords...</li>
            <li><strong>Main Text:</strong>
              <ul>
                <li>Introduction...</li>
                <li>Methods...</li>
                <li>Results...</li>
                <li>Discussion...</li>
                <li>Conclusion...</li>
              </ul>
            </li>
            <li><strong>References:</strong> Follow IJRETA's preferred citation style...</li>
            <li><strong>Tables and Figures:</strong> Include these in the manuscript after the references...</li>
          </ul>

          <h3>2.3 Supplementary Materials</h3>
          <p>Authors may submit supplementary materials...</p>

          <h2>3. Submission Process</h2>

          <h3>3.1 Online Submission</h3>
          <p>Manuscripts must be submitted through our online submission system...</p>

          <h3>3.2 Peer Review Process</h3>
          <ul>
            <li>Initial Screening...</li>
            <li>Double-Blind Review...</li>
            <li>Revisions...</li>
            <li>Final Decision...</li>
          </ul>

          <h2>4. Ethical Considerations</h2>
          <ul>
            <li>Plagiarism...</li>
            <li>Conflicts of Interest...</li>
            <li>Ethical Approvals...</li>
          </ul>

          <h2>5. Post-Acceptance</h2>

          <h3>5.1 Proofs</h3>
          <p>After acceptance, authors will receive page proofs for final approval...</p>

          <h3>5.2 Publication Fees</h3>
          <p>
            IJRETA may charge a publication fee... <a href="https://IJRETA.org/ProcessingCharges" target="_blank" rel="noopener noreferrer">here</a>.
          </p>

          <h3>5.3 Open Access</h3>
          <p>All articles published in IJRETA are open access...</p>

          <h2>6. Contact Information</h2>
          <p>For any questions, contact us at <a href="mailto:editor@IJRETA.org">editor@IJRETA.org</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default Authors;
