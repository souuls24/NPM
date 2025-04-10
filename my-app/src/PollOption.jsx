import React from 'react';

const PollOption = ({ label, count, onVote }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h3>{label}</h3>
      <p>Votes: {count}</p>
      <button onClick={onVote}>Vote</button>
    </div>
  );
};

export default PollOption;
