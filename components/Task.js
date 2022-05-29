import styles from './Task.module.css';

export default function Task({ name, done, onClick }) {
  return (
    <div className={styles.taskContainer} onClick={onClick}>
      <p className={done ? styles.taskDone : ''}>{name}</p>
    </div>
  );
}
