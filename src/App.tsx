import { useState } from 'react';
// import './App.css';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  heading: {
    color: 'blue',
  },
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 {...stylex.props(styles.heading)}>React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}
