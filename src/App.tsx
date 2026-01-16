import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <h1>Vite + React + TypeScript</h1>
      <p>Welcome to your new project!</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  )
}
