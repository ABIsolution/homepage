import React from 'react';
import { Button, Input, Typography } from '../components/common';
import Layout from '../components/layout';
import { GetServerSideProps } from 'next';
const styles: Record<
  string,
  React.HTMLAttributes<HTMLDivElement>['style']
> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5em 0.5em',
  },
  todoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '10vh',
  },
  removeButton: {
    padding: '0.5em 1em',
    margin: '0.5em',
  },
  statusFinished: {
    padding: '0.5em 1em',
    color: 'green',
    margin: '0.5em',
  },
  statusUnfinished: {
    padding: '0.5em 1em',
    color: 'red',
    margin: '0.5em',
  },
  input: {
    padding: '0.5em',
    margin: '0.5em',
    border: '1px solid blue',
  },
  subParagraph: {
    color: 'green',
    fontSize: '15px',
    margin: '0.5em',
  },
  title: {
    color: 'green',
    margin: '0.5em',
  },
};
function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
const Tasks: React.FC<{
  data: { title: string; status: boolean }[];
}> = ({ data }) => {
  const [tasks, setTasks] =
    React.useState<{ title: string; status: boolean }[]>(data);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [formValue, setFormValue] = React.useState<string>('');

  async function handleAddTask(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    if (typeof formValue === 'string' && formValue !== '') {
      const newTask = {
        title: formValue,
        status: false,
      };
      const response = await fetch('http://127.0.0.1:80/api/tasks', {
        method: 'PUT',
        body: JSON.stringify({ task: newTask }),
      });
      setFormValue((prev) => '');
      await refreshTasks();
    }
  }

  async function handleRemoveTask(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    const deleteTaskIndex = parseInt(event.currentTarget.value);
    const response = await fetch('http://127.0.0.1:80/api/tasks', {
      method: 'DELETE',
      body: JSON.stringify({ index: deleteTaskIndex }),
    });
    await refreshTasks();
  }

  async function handleUpdateStatus(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    const updateTaskIndex = parseInt(event.currentTarget.value);
    if (typeof updateTaskIndex === 'number') {
      const response = await fetch('http://127.0.0.1:80/api/tasks', {
        method: 'PATCH',
        body: JSON.stringify({ index: updateTaskIndex }),
      });
      await refreshTasks();
    }
  }

  async function refreshTasks() {
    setLoading(true);
    const response: { Tasks: { status: boolean; title: string } } =
      await fetch('http://127.0.0.1:80/api/tasks', {
        method: 'GET',
      })
        .then((result) => result.json())
        .catch((error) => {
          console.error(error);
          return undefined;
        });
    if (
      response &&
      'Tasks' in response &&
      Array.isArray(response.Tasks)
    ) {
      setTasks(response.Tasks);
    }
    await wait(Math.floor(Math.random() * 3000));
    setLoading(false);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (event.target.name === 'input') {
      setFormValue((_prev) => event.target.value);
    }
  }
  return (
    <Layout>
      <Typography variant="h1">Tasks</Typography>
      <div style={styles.container}>
        {isLoading ? (
          <Typography variant="h1" styles={styles.title}>
            Loading...
          </Typography>
        ) : Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <span
              id={`todo-${index}`}
              style={styles.todoContainer}
              key={`todo-${index}`}
            >
              <Typography
                variant="paragraph"
                styles={
                  task.status === true
                    ? styles.statusFinished
                    : styles.statusUnfinished
                }
              >
                {`[${task.status === true ? '✓' : 'X'}]`}
              </Typography>
              <Typography
                variant="paragraph"
                id={`todo-title-${index}`}
                styles={styles.paragraph}
              >
                {task.title}
              </Typography>

              <Button
                text={
                  task.status === true ? 'Undo Task' : 'Complete Task'
                }
                value={index}
                styles={
                  task.status === false
                    ? styles.statusFinished
                    : styles.statusUnfinished
                }
                onClick={handleUpdateStatus}
              ></Button>

              <Button
                text="Remove"
                value={index}
                id={`remove-todo-btn-${index}`}
                styles={styles.removeButton}
                onClick={handleRemoveTask}
              />
            </span>
          ))
        ) : (
          <div>
            <Typography variant="paragraph" styles={styles.title}>
              No Tasks
            </Typography>
          </div>
        )}

        <form
          name="exampleForm"
          id="example-page-form"
          style={styles.form}
        >
          <label>Create new Task: </label>
          <Input
            type="text"
            name="input"
            styles={styles.input}
            value={formValue}
            onChange={handleChange}
          />
          <Button text="Create" onClick={handleAddTask} />
        </form>
      </div>
    </Layout>
  );
};
export default Tasks;

export const getServerSideProps: GetServerSideProps<{
  data: { title: string; status: boolean }[];
}> = async () => {
  const response: { Tasks: { title: string; status: boolean }[] } =
    await fetch('http://127.0.0.1:80/api/tasks', {
      method: 'GET',
    })
      .then((result) => result.json())
      .catch((error) => {
        console.error(error);
        return { Tasks: [] };
      });
  return {
    props: {
      data: response.Tasks,
    },
  };
};
