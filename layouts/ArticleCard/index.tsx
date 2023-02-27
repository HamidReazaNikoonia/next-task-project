import React from 'react';
import Card from '../../components/Card';

// Styles
import styles from './styles.module.scss';

export interface IArticleCard {
  title: string;
  createdAt?: string;
  description?: string;
}

const ArticleCard: React.FC<IArticleCard> = ({ title, createdAt, description }) => {
  return (
    <>
      <Card className={styles['card-container-section']}>
        <div className={styles['card-title']}>{title}</div>
        <div className={styles['card-sub-title']}>
          <span>{createdAt}</span>
          <span> ☕️☕️☕️ </span>
          <span>14 min read</span>
        </div>

        <div className={styles['card-description']}>{description}</div>
      </Card>
    </>
  );
};

export default ArticleCard;
