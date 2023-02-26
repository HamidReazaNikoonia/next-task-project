import React from 'react'
import Card from '../../components/Card'

// Styles
import styles from './styles.module.scss'

const ArticleCard = ({title, createdAt, description}) => {
  return (
    <>
      <Card className={styles.cardContainer}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.subTitle}>
            <span>{createdAt} •</span>
            <span>☕️☕️☕️</span>
            <span>14 min read</span>
        </div>

        <div className={styles.description}>
          {description}
        </div>
      </Card>
    </>
  )
}


export default ArticleCard;