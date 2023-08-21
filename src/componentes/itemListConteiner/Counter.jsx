import React from 'react';
import useCount from './useCount';


const Counter = () => {
  const [contador, decrement, increment] = useCount(1, 0, 10);

  return (
    <div>
      <button onClick={decrement}>-</button>
        {contador}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
