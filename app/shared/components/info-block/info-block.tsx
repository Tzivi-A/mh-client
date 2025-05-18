import { Image } from '@ui/image/image';
import styles from './info-block.module.css';

export interface InfoBlockProps {
  icon: string;
  title: string;
  subtitle: string;
  isActive?: boolean;
}

export const InfoBlock = ({ icon, title, subtitle, isActive = false }: InfoBlockProps) => {
  const containerClassName = `${styles.step} ${isActive ? styles.active : ''}`;

  return (
    <div className={containerClassName}>
      <Image src={icon} alt={subtitle} className={styles['step-icon']} />
      <div className={styles['step-text-container']}>
        <span className={styles['step-title']}>{title}</span>
        <span className={styles['step-subtitle']}>{subtitle}</span>
      </div>
    </div>
  );
};

export default InfoBlock;
