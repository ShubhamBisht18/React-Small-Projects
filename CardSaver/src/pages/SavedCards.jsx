import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../component/Card';

function SavedCards() {
  const { savedCards } = useSelector(state => state.card);

  if (savedCards.length === 0) return <div>No saved meals yet.</div>;

  return (
    <div className="card-container">
      {savedCards.map(card => (
        <Card key={card.idMeal} card={card} isSaved />
      ))}
    </div>
  );
}

export default SavedCards;