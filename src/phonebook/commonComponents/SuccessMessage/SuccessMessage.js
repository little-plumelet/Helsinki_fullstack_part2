import styles from './style.module.css';

export const SuccessMessage = ({message}) => {
  if (!message) return null;
  return (
    <div className={styles.successMessage}>
      {message}
    </div>
  )
}