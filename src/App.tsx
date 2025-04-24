import { useState } from 'react'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
    </>
  )
}

export default App
