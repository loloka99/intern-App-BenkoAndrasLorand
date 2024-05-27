import { useState } from 'react';
import HomeCard from './homeCard';
import { initialCards } from './initialCards';

import styles from './home.module.scss';

const Home = () => {
  const [cards, setCards] = useState(initialCards);
  const addCard = () => {
    const id = cards.length + 1;
    const newCard = {
      id,
      title: `Type a title here`,
      description: `Type a description here`,
      isEditing: true,
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const editCard = (id: number, newTitle: string, newDescription: string) => {
    setCards(
      cards.map(card =>
        card.id === id
          ? { ...card, title: newTitle, description: newDescription }
          : card,
      ),
    );
  };

  return (
    <div className={styles.container}>
      {cards.map(card => (
        <HomeCard
          key={card.id}
          title={card.title}
          description={card.description}
          onDelete={() => deleteCard(card.id)}
          onEdit={(newTitle, newDescription) =>
            editCard(card.id, newTitle, newDescription)
          }
          isEditing={card.isEditing}
        />
      ))}
      <button className={styles.addButton} onClick={addCard}>
        +
      </button>
    </div>
  );
};

export default Home;
