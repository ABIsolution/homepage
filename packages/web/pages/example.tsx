import React from 'react';
import { Button, Input, Typography } from '../components/common';
import Layout from '../components/layout';
// Example stylings
const styles: Record<
  string,
  React.HTMLAttributes<HTMLDivElement>['style']
> = {
  container: {
    padding: '0.5em',
    display: 'flex',
    flexDirection: 'column',
  },
  incrementButton: {
    border: '1px solid green',
    padding: '0.5em 0.5em 0.5em',
    margin: '0.5em',
  },
  decrementButton: {
    border: '1px solid red',
    padding: '0.5em 0.5em 0.5em',
    margin: '0.5em',
  },
  input: { padding: '0.5em', margin: '0.5em' },
  paragraph: { color: 'red', fontSize: '12', margin: '0.5em' },
  subParagraph: {
    color: 'green',
    fontSize: '15',
    margin: '0.5em',
  },
  title: { color: 'blue', margin: '0.5em' },
};
export default function Example() {
  const [clickCount, setClickCount] = React.useState<number>(0);
  const [formValue, setFormValue] = React.useState<string>('');
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const elementName = (event.target as HTMLInputElement).name;
    if (elementName === 'incrementButton') {
      setClickCount((prev) => prev + 1);
    } else if (elementName === 'decrementButton') {
      if (clickCount > 0) {
        setClickCount((prev) => prev - 1);
      }
    }
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (event.target.name === 'input') {
      setFormValue((_prev) => event.target.value);
    }
  }
  return (
    <Layout>
      <div style={styles.container}>
        <Typography styles={styles.title}>
          Hello, this is an example.
        </Typography>
        <Typography styles={styles.subParagraph}>
          Here are some example components.
        </Typography>
        <form name="exampleForm" id="example-page-form">
          <Button
            text="increment"
            name="incrementButton"
            styles={styles.incrementButton}
            onClick={handleClick}
          />
          <Button
            text="decrement"
            name="decrementButton"
            styles={styles.decrementButton}
            onClick={handleClick}
          />
          <Input
            type="text"
            name="input"
            styles={styles.input}
            value={formValue}
            onChange={handleChange}
          />
          <Input
            disabled={true}
            name="output"
            type="text"
            styles={styles.input}
            value={clickCount}
            onChange={() => void 0}
          />
          <Typography styles={styles.paragraph}>
            {formValue}
          </Typography>
        </form>
      </div>
    </Layout>
  );
}
