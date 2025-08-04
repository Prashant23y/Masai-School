import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage(){
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timer, setTimer] = useState(10);
  const [intervalId, setIntervalId] = useState(null);
  const navigate = useNavigate();

  const startCountdown = () => {
    setShowConfirmation(true);
    const id = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    setIntervalId(id);
  };

  const resetState = () => {
    clearInterval(intervalId);
    setShowConfirmation(false);
    setTimer(10);
    setIntervalId(null);
  };

  useEffect(() => {
    if (timer === 0) {
      resetState();
    }
  }, [timer]);

  const handleYes = () => {
    clearInterval(intervalId);
    navigate('/data');
  };

  const handleNo = () => {
    resetState();
  };

  return (
    <div className="container">
      {!showConfirmation ? (
        <button onClick={startCountdown}>Fetch Data</button>
      ) : (
        <div className="confirmation">
          <p>Are you sure you want to fetch the data?</p>
          <div
            className="timer"
            style={{ color: timer <= 5 ? 'red' : 'green' }}
          >
            {timer}
          </div>
          <div className="buttons">
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
