import React from 'react';

function VoteButton({ label, count, onVote }) {
  return (
    <button onClick={onVote}>
      {label}: {count}
    </button>
  );
}

export default VoteButton;