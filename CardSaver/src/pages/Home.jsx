import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../feature/saveCardSlice';
import Card from '../component/Card';

function Home() {
  const dispatch = useDispatch();
  const { cards, loading } = useSelector(state => state.card);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="card-container">
      {cards.map(card => (
        <Card key={card.idMeal} card={card} />
      ))}
    </div>
  );
}

export default Home;