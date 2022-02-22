import React, { useEffect, useState } from 'react';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener(handleResize);
    };
  }, []);
  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}

export default App;
