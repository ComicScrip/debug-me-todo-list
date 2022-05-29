import styles from './task.module.css';

export default function Task({ name, done }) {
  return (
    <div className={styles.taskContainer}>
      <p className={done ? styles.taskDone : ''}>{name}</p>
    </div>
  );
}
