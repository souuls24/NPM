import React from 'react';
import VoteButton from './VoteButton';

const VotingPanel = ({ pets, handleVote }) => {
  return (
    <div>
      {pets.map((pet) => (
        <VoteButton
          key={pet.name}
          label={pet.name}
          count={pet.votes}
          onVote={() => handleVote(pet.name)}
        />
      ))}
    </div>
  );
};

export default VotingPanel;