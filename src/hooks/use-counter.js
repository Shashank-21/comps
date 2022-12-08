import { useEffect, useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount((current) => {
      return current + 1;
    });
  };

  return {
    count,
    increment,
  };
}

export default useCounter;
