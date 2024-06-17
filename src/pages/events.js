import { useEffect, useState } from "react";
import { Nav } from "/src/components/nav.js";

export default function Events() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <h1>Events</h1>
      <ul>
        {data.map((event) => (
          <li key={event.title}>
            {event.title} - {event.date}: {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
