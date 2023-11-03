import React, { MouseEvent } from 'react';
import { Button, Input, Typograph } from '../components/examples';
// Example stylings
const styles = {
  container: {
    padding: '0.5em',
    display: 'flex',
    'flex-direction': 'column',
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
  paragraph: { color: 'red', 'font-size': '12', margin: '0.5em' },
  subParagraph: {
    color: 'green',
    'font-size': '15',
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
      setClickCount((prev) => prev - 1);
    }
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'input') {
      setFormValue((_prev) => event.target.value);
    }
  }
  return (
    <main>
      <div style={styles.container}>
        <Typograph styles={styles.title}>
          Hello, this is an example.
        </Typograph>
        <Typograph styles={styles.subParagraph}>
          Here are some example components.
        </Typograph>
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
          <Typograph styles={styles.paragraph}>{formValue}</Typograph>
        </form>
      </div>
    </main>
  );
}
