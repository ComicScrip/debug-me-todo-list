import { useState } from 'react';
import styles from '../styles/Home.module.css';
import uniqid from 'uniqid';
import Task from '../components/Task';

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  const toggleDone = (taskId) =>
    setTaskList(
      taskList.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );

  return (
    <div className={styles.container}>
      <h1>My todo list</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newTaskName)
            setTaskList([
              { id: uniqid(), name: newTaskName, done: false },
              ...taskList,
            ]);
          setNewTaskName('');
        }}
      >
        <label htmlFor='newTask'>
          New task :
          <input
            type='text'
            onChange={(e) => setNewTaskName(e.target.value)}
            value={newTaskName}
          />
        </label>
        <button type='submit'>Add</button>
      </form>
      {taskList.map((task) => (
        <Task
          key={task.id}
          onClick={() => toggleDone(task.id)}
          name={task.name}
          done={task.done}
        />
      ))}
      {taskList.length > 0 && (
        <>
          completed :{' '}
          {taskList.reduce((acc, curr) => acc + (curr.done ? 1 : 0), 0)} /{' '}
          {taskList.length}
        </>
      )}
    </div>
  );
}
