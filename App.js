import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Page Components
import Home from './pages/Home';
import Editorial from './pages/Editorial';
import Conference from './pages/Conference';
import SubmitPaper from './pages/SubmitPaper';
import CurrentIssue from './pages/CurrentIssue';
import Archive from './pages/Archive';
import AdminDashboard from './pages/AdminDashboard';
import Chatbot from './pages/Chatbot';

// Author Dropdown Pages
import PaperFormat from './pages/authors/PaperFormat';
import HowToPublish from './pages/authors/HowToPublish';
import AuthorGuidelines from './pages/authors/AuthorGuidelines';
import TrackPaper from './pages/authors/TrackPaper';
import CopyrightForm from './pages/authors/CopyrightFormat'; // Corrected import
import EthicsPolicy from './pages/authors/ethics';
import TermsAndConditions from './pages/authors/TermsAndCondition';
import RefundPolicy from './pages/authors/RefundPolicy';
import ProcessingCharges from './pages/authors/ProcessingCharges';
import PublicationImpact from './pages/authors/PublicationImpact';
import PaperStatus from './pages/authors/PaperStatus';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/submit-paper" element={<SubmitPaper />} />
        <Route path="/current-issue" element={<CurrentIssue />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />

        {/* Author Pages */}
        <Route path="/paper-format" element={<PaperFormat />} />
        <Route path="/how-to-publish" element={<HowToPublish />} />
        <Route path="/author-guidelines" element={<AuthorGuidelines />} />
        <Route path="/track-paper" element={<TrackPaper />} />
        <Route path="/copyright-form" element={<CopyrightForm />} />
        <Route path="/ethics-policy" element={<EthicsPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/processing-charges" element={<ProcessingCharges />} />
        <Route path="/publication-impact" element={<PublicationImpact />} />
        <Route path="/PaperStatus" element={<PaperStatus />}/>
      </Routes>
    </Router>
  );
}

export default App;
