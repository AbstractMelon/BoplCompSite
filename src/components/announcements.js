import { useEffect, useState, useId } from "react";

export function AnnouncementsComp() {
  const divId = useId();

  // ? For better performance on client-side, the HTML is generated and stored in a cache on the server-side.
  useEffect(() => {
    fetch("/api/announcements")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(divId).innerHTML = data;
      });
  }, []);

  return <div id={divId}></div>;
  // return (
  //   <div>
  //     <ul>
  //       {data.map((announcement) => (
  //         <li key={announcement.title}>
  //           {announcement.date}: {announcement.title} - {announcement.content}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
