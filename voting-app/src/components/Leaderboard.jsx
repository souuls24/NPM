import React from 'react';

const Leaderboard = ({ leaderName, leaderVotes }) => {
  return (
    <div className="leaderboard">
      <h2>Current Leader</h2>
      <p>{leaderName} with {leaderVotes} votes</p>
    </div>
  );
};

export default Leaderboard;