import React, { useState } from 'react';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = () => {
    if (query.toLowerCase().includes('status')) {
      setResponse('Your paper is currently under review. You will be notified via email once the review is complete.');
    } else if (query.toLowerCase().includes('submitted')) {
      setResponse('Yes, your submission has been received. It will be reviewed within 3-5 business days.');
    } else {
      setResponse('Hi! I can help you with your paper submission status or review process. Try typing "status" or "submitted".');
    }
  };

  return (
    <div style={{
      background: '#fff', padding: '20px', height: '100%',
      fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <h3 style={{ marginBottom: '10px' }}>Paper Pal</h3>
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
        <p><strong>Bot:</strong> Hi! How can I assist you today?</p>
        {response && <p><strong>Bot:</strong> {response}</p>}
      </div>
      <div>
        <input
          type="text"
          value={query}
          placeholder="Ask me something..."
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: '70%', padding: '8px' }}
        />
        <button onClick={handleSend} style={{ padding: '8px 12px', marginLeft: '5px' }}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
