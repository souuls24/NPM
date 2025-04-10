import { useState } from 'react';
import VotingPanel from './components/VotingPanel';
import Leaderboard from './components/Leaderboard';

function App() {
  const [pets, setPets] = useState([
    { name: 'Dog', votes: 0 },
    { name: 'Cat', votes: 0 },
    { name: 'Rat', votes: 0 },
  ]);

  const handleVote = (petName) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.name === petName ? { ...pet, votes: pet.votes + 1 } : pet
      )
    );
  };

  const getLeader = () => {
    return pets.reduce((prev, current) => (prev.votes > current.votes ? prev : current));
  };

  const leader = getLeader();

  return (
    <>
      <h1>Vote for Your Favorite Pet</h1>
      <VotingPanel pets={pets} onVote={handleVote} />
      <Leaderboard leader={leader.name} votes={leader.votes} />
    </>
  );
}

export default App;