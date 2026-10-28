"use client";
import { useState } from 'react';

function Counter({ userCount }) {
  const [count, setCount] = useState(0);
  return (
    <div className="my-4">
      <p>Кількість користувачів з сервера: {userCount}</p>
      <button className="bg-accent-500 px-4 py-2 text-white" onClick={() => setCount(count + 1)}>
        Лічильник: {count}
      </button>
    </div>
  );
}
export default Counter;