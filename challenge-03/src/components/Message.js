import styles from '../styles/message.module.css';

export default function Message({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className={styles.messageContainer}>
      <p>{message}</p>
    </div>
  );
}
