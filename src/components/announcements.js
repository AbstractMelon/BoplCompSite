import { useEffect, useState } from "react";

export function AnnouncementsComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/announcements")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
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