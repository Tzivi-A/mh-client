import { Image } from '@ui/image/image';
import styles from './step-item.module.css';

export interface StepItemProps {
  icon: string;
  title: string;
  subtitle: string;
  isActive?: boolean;
}

export const StepItem = ({ icon, title, subtitle, isActive = false }: StepItemProps) => {
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

export default StepItem;
