import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { Nav } from "/src/components/nav.js";

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const [newPlayer, setNewPlayer] = useState({ name: "", score: "" });
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    fetch("/data/leaderboard.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer({ ...newPlayer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, newPlayer]);
    setFilteredData([...filteredData, newPlayer]);
    setNewPlayer({ name: "", score: "" });
    saveData([...data, newPlayer]);
  };

  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.score - b.score;
      } else {
        return b.score - a.score;
      }
    });
    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleEdit = (index, newData) => {
    const updatedData = [...data];
    updatedData[index] = newData;
    setData(updatedData);
    setFilteredData(updatedData);
    saveData(updatedData);
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    setFilteredData(updatedData);
    saveData(updatedData);
  };

  const saveData = (data) => {
    localStorage.setItem("leaderboardData", JSON.stringify(data));
  };

  return (
    <div>
      <Head>
        <title>Bopl Battle Competitive - Leaderboard</title>
      </Head>
      <header>
        <Nav />
      </header>
      <div className="container">
        <h1>Leaderboard</h1>
        <div className="leaderboard-controls">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSort}>
            Sort by Score ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
        </div>
        <div className="leaderboard">
          {filteredData.map((player, index) => (
            <div key={index} className="player-card">
              <h3>{player.name}</h3>
              <p>Score: {player.score}</p>
              <button onClick={() => handleEdit(index, player)}>
                {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
              </button>
              <button onClick={() => handleDelete(index)}>
                {/* <FontAwesomeIcon icon={faTrash} /> */}
              </button>
            </div>
          ))}
        </div>
        {/*
        <div className="leaderboard-add">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newPlayer.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="score"
              placeholder="Score"
              value={newPlayer.score}
              onChange={handleChange}
              required
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPlus} /> Add Player
            </button>
          </form>
        </div>
        */}
      </div>
    </div>
  );
}
