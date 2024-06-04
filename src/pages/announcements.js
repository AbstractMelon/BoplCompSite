import { useEffect, useState } from "react";

export default function Announcements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/announcements.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Announcements</h1>
      <ul>
        {data.map((announcement) => (
          <li key={announcement.title}>
            {announcement.date}: {announcement.title} - {announcement.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
