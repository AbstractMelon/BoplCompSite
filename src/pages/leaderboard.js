import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/leaderboard.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {data.map((player) => (
          <li key={player.name}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
