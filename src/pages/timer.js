import { useEffect, useState } from 'react';

export default function Home() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      const response = await fetch('/api/timer');
      const data = await response.json();
      setTime(data.currentTime);
    };

    fetchTime();
    const interval = setInterval(fetchTime, 1000); // Fetch new time every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
           <main className="container">
        <section className="hero">
                <h1>Server-Side Timer</h1>
            {time ? <p>Current Server Time: {new Date(time).toLocaleTimeString()}</p> : <p>Loading...</p>}
        </section>
        <section>
            <h1>What is this page?</h1>
            <p>This is a testing page to make sure the API is setup properly.</p>
        </section>
        </main>

    </div>
  );
}