import React from 'react';
import styles from './users.module.scss';

interface UserCardProps {
  gender: string;
  name: {
    first: string;
    last: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ name, gender }) => {
  return (
    <div className={styles.userCard}>
      <h2>
        {name.first} {name.last}
      </h2>
      <p>{gender}</p>
    </div>
  );
};

export default UserCard;
