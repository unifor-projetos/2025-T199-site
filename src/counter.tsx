import { useState } from "react";
import { useParams } from "react-router";

import Button from "react-bootstrap/Button";

function Counter() {
  const { startCount } = useParams();
  const [count, setCount] = useState(parseInt(startCount || "0"));

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column">
        {" "}
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
}

export default Counter;
