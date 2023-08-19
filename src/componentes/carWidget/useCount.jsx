import { useState } from 'react';

const useCount = (initial, min, max) => {
  const [contador, setContador] = useState(initial);

  const decrement = () => {
    if (contador > min) {
      setContador((prevState) => prevState - 1);
    }
  };

  const increment = () => {
    if (contador < max) {
      setContador((prevState) => prevState + 1);
    }
  };

  return [contador, decrement, increment];
};

export default useCount;
