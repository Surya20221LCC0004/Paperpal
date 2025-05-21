import React from 'react';
import './conference.css';

const Conference = () => {
  return (
    <div className="content-container">
      <h1>Conference</h1>

      <section>
        <h3>About Our Conference</h3>
        <p>
          The International Journal of Research in Engineering Technology and Applications (IJRETA) hosts
          an annual conference bringing together leading researchers, academics, and industry professionals.
          The conference provides a platform for sharing the latest advancements, networking, and collaboration.
        </p>
      </section>

      <section>
        <h3>Important Dates</h3>
        <ul>
          <li>Paper Submission Deadline: June 30, 2025</li>
          <li>Notification of Acceptance: July 31, 2025</li>
          <li>Camera Ready Submission: August 15, 2025</li>
          <li>Conference Date: September 20-22, 2025</li>
        </ul>
      </section>

      <section>
        <h3>Submission Guidelines</h3>
        <p>
          Authors are invited to submit original research papers in engineering, technology, and related fields.
          Papers should follow the IJRETA formatting guidelines and will be subject to peer review.
        </p>
      </section>

      <section>
        <h3>Registration Fees</h3>
        <p>Indian Authors: INR 3000 per paper</p>
        <p>International Authors: $150 per paper</p>
      </section>

      <section>
        <h3>Contact</h3>
        <p>For queries related to the conference, please write to <a href="mailto:conference@ijreta.org">conference@ijreta.org</a></p>
      </section>
    </div>
  );
};

export default Conference;
