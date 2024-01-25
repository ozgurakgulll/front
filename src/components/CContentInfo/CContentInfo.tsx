import { useEffect, useState } from 'react';
import styles from './../../styles/components/_contentInfo.module.scss';

export function CContentInfo({ content }: { content: ContentInterface }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className={` ${isVisible ? styles['animate-fade-in'] : 'opacity-0'}`}>
      <div className={styles['info-content']}>
        <div
          className={styles['text-header']}>
          {content.header}
        </div>
        <div className={styles['text-title']}>
          {content.title}
        </div>
        <div
          className={styles['text-info']}>
          {content.info}
        </div>
        <button type="button"
                className={styles['info-button']}>
          Learn More
        </button>

      </div>
    </div>)
}

interface ContentInterface {
  header: string,
  title: string,
  info: string
}
