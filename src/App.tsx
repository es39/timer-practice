import { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const count = setInterval(() => {
      // 1초씩 감소
      setTime((time) => (time -= 1));
    }, 1000);
    if (time === 0) clearInterval(count);
    return () => clearInterval(count);
  }, [time]);

  return (
    <>
      <header>My Timer</header>
      <div>
        <button>시작</button>
        <button>멈춤</button>
        <button>초기화</button>
      </div>
      <div>timer : {time}</div>
    </>
  );
};

export default App;
