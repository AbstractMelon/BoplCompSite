import { useEffect, useState } from "react";

export function AnnouncementsComp() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("/data/announcements.json")
      .then((response) => response.json())
      .then((data) => setAnnouncements(data));
  }, []);

  return (
    <div>
      <ol>
        {announcements.map((announcement, index) => (
          <div key={index} class="announcement-card-list" onClick={() => handleCardClick(announcement)}>
            <h2>{announcement.title} - {announcement.converted_date}</h2>
            <p>{announcement.content}</p>
          </div>
        ))}
      </ol>
    </div>
  );
}


function handleCardClick(announcement) {
  alert(`Title: ${announcement.title}\nDate: ${announcement.date}\nContent: ${announcement.content}`);
}
