import React, { FC, useState } from 'react'

export const App: FC = () => {
  const [count, setCount] = useState<number>(0)

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}
