import { useEffect, useState } from "react";



 function Counter({ target }: { target: number }) {
  const [num, setNum] = useState(0);
  const easeMultiplier = 0.55;

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((n) => (n >= target ? n : n + 1));
    }, Math.max(Math.ceil((target - 30) * easeMultiplier), 10));

    return () => clearInterval(interval);
  }, [num, target]);

  return <div>{num}</div>
}

export { Counter }