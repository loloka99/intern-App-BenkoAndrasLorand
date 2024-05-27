import { useState, useEffect } from 'react';
import styles from './home.module.scss';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

type HomeCardProps = {
  key: number;
  title: string;
  description: string;
  onDelete: () => void;
  onEdit: (newTitle: string, newDescription: string) => void;
  isEditing: boolean;
};

const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  onDelete,
  onEdit,
  isEditing: initialIsEditing,
}) => {
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleEdit = () => {
    onEdit(newTitle, newDescription);
    setIsEditing(false);
  };

  useEffect(() => {
    setIsEditing(initialIsEditing); // Use initialIsEditing
  }, [initialIsEditing]);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.contentSide}>
          {isEditing ? (
            <>
              <input
                className={`${styles.input} ${styles.title}`}
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
              />
              <textarea
                className={`${styles.input} ${styles.description}`}
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
              />
              <button
                className={`${styles.button} ${styles.save}`}
                onClick={handleEdit}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h2>{title}</h2>
              <p>{description}</p>
            </>
          )}
        </div>
        <div className={styles.buttonsSide}>
          <button
            className={`${styles.button} ${styles.edit}`}
            onClick={() => setIsEditing(true)}
          >
            <FaEdit />
          </button>
          <button
            className={`${styles.button} ${styles.delete}`}
            onClick={onDelete}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};
export default HomeCard;
