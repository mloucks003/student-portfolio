import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to the demo page which shows the portfolio
    window.location.href = '/demo.html';
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#0a0e17',
      color: '#00ff41',
      fontFamily: 'monospace',
      fontSize: '1.5rem'
    }}>
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '3rem', marginBottom: '20px'}}>🔒</div>
        <div>Loading Portfolio...</div>
        <div style={{fontSize: '0.9rem', color: '#b8c1d9', marginTop: '10px'}}>
          Redirecting to demo...
        </div>
      </div>
    </div>
  );
}

export default App;
