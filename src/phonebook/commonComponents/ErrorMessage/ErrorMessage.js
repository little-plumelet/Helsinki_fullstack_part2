import styles from './style.module.css';

export const ErrorMessage = ({message}) => {
  if (!message) return null;
  return (
    <div className={styles.errorMessage}>
      {message}
    </div>
  )
}