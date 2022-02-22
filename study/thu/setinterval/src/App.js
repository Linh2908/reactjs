import React, { useEffect, useState } from 'react';

const App = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timeId = setInterval(() => {
      setCountdown(prev => {
        if(prev === 1)
        clearInterval(timeId);
        return prev -1;
      });
      
    }, 1000);
   
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <div>
      {countdown}
    </div>
  );
}

export default App;
