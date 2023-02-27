import React, { FC, useState, useRef } from 'react'

export const App: FC = () => {
  const [count, setCount] = useState<number>(0)
  const decrementButtonRef = useRef<HTMLButtonElement | null>(null)

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const focusOnDecrementButton = () => {
    decrementButtonRef.current?.focus()
  }

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button ref={decrementButtonRef} onClick={decrement}>
          -
        </button>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={focusOnDecrementButton}>focus on minus</button>
      </div>
    </div>
  )
}
