import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { getAdminHashes } from "/utils/hash.js";
import { parseCookies } from "/utils/cookies";
// import { Leaderboard } from './leaderboard';
import axios from "axios";

const ProtectedPage = () => {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // fetchEvents();
    // fetchAnnouncements();
    // fetchLeaderboard();
  }, []);

  const fetchEvents = async () => {
    const response = await axios.get("/api/events");
    setEvents(response.data);
  };

  const fetchAnnouncements = async () => {
    const response = await axios.get("/api/announcements");
    setAnnouncements(response.data);
  };

  const fetchLeaderboard = async () => {
    const response = await axios.get("/api/leaderboard");
    setLeaderboard(response.data);
  };

  const handlePublishEvent = async () => {
    await axios.post("/api/events", { title, description, date: value });
    fetchEvents();
  };

  const handlePublishAnnouncement = async () => {
    await axios.post("/api/announcements", { title, description });
    fetchAnnouncements();
  };

  return (
    <div className="dashboard">
      <div className="makeContainer">
        <h1>Create New Announcement/Event</h1>
        <span>Title</span>
        <TextField
          label="Enter event/announcement title"
          type="text"
          variant="outlined"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "100%", marginTop: "5px" }}
        />
        <span>Description</span>
        <TextField
          label="Enter event/announcement description"
          type="text"
          variant="outlined"
          required
          multiline
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ width: "100%", marginTop: "5px" }}
        />
        <br></br>
        <br></br>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: "100%", marginTop: "5px" }} />
            )}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handlePublishEvent}
          sx={{ backgroundColor: "#2f2f31", margin: "10px" }}
        >
          Publish Event
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handlePublishAnnouncement}
          sx={{ backgroundColor: "#2f2f31", margin: "10px" }}
        >
          Publish Announcement
        </Button>
      </div>

      <div className="analyticsContainer">
        <h2>Analytics</h2>
      </div>

      <div className="leaderboardContainer">
        <h2>Leaderboard</h2>
        {/* <Leaderboard /> */}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const cookies = parseCookies(context.req);
  const token = cookies.token;

  if (!Object.values(getAdminHashes()).includes(token)) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default ProtectedPage;
