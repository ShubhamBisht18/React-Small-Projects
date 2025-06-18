import React from 'react';
import { useDispatch } from 'react-redux';
import { addCardToSaved, removeCardFromSaved } from '../feature/saveCardSlice';
import { useNavigate } from 'react-router-dom';

function Card({ card, isSaved = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    dispatch(addCardToSaved(card));
    navigate('/saved');
  };

  const handleRemove = () => {
    dispatch(removeCardFromSaved(card.idMeal));
  };

  return (
    <div className="card">
      <img src={card.strMealThumb} alt={card.strMeal} className="card-img" />
      <h3 style={{ color: 'black', fontSize: '16px' }}>{card.strMeal}</h3>
      <p style={{ color: 'black', fontSize: '14px' }}>{card.strCategory}</p>
      {isSaved ? (
        <button onClick={handleRemove}>Remove</button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
    </div>
  );
}

export default Card;