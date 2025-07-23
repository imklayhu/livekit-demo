import React, { useState } from "react";
import {
  LiveKitRoom,
  VideoConference,
  RoomOptions,
} from "@livekit/components-react";
import "@livekit/components-styles";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [wsUrl, setWsUrl] = useState("");
  const [roomName, setRoomName] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");
  const [isInRoom, setIsInRoom] = useState(false);

  const handleJoinRoom = async () => {
    if (!roomName.trim() || !participantName.trim()) {
      setError("Please enter both room name and participant name");
      return;
    }

    setIsConnecting(true);
    setError("");

    try {
      const response = await fetch("/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomName: roomName.trim(),
          participantName: participantName.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get access token");
      }

      const data = await response.json();
      setToken(data.token);
      setWsUrl(data.wsUrl);
      setIsInRoom(true);
    } catch (err) {
      setError(err.message || "Failed to join room");
    } finally {
      setIsConnecting(false);
    }
  };

  const handleLeaveRoom = () => {
    setToken("");
    setWsUrl("");
    setRoomName("");
    setParticipantName("");
    setIsInRoom(false);
    setError("");
  };

  if (isInRoom && token && wsUrl) {
    const roomOptions: RoomOptions = {
      adaptiveStream: true,
      dynacast: true,
      publishDefaults: {
        simulcast: true,
      },
    };

    return (
      <div className="app">
        <div className="header">
          <h1>LiveKit Demo</h1>
        </div>
        <div className="main-content">
          <div className="room-container">
            <div className="room-header">
              <div className="room-info">
                <h2>Room: {roomName}</h2>
                <p>Participant: {participantName}</p>
              </div>
              <button className="leave-button" onClick={handleLeaveRoom}>
                Leave Room
              </button>
            </div>
            <LiveKitRoom
              token={token}
              serverUrl={wsUrl}
              connect={true}
              video={true}
              audio={true}
              options={roomOptions}
            >
              <VideoConference />
            </LiveKitRoom>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="header">
        <h1>LiveKit Demo</h1>
      </div>
      <div className="main-content">
        <div className="join-form">
          <h2>Join Video Room</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label htmlFor="roomName">Room Name:</label>
            <input
              id="roomName"
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Enter room name"
              disabled={isConnecting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="participantName">Your Name:</label>
            <input
              id="participantName"
              type="text"
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              placeholder="Enter your name"
              disabled={isConnecting}
            />
          </div>
          <button
            className="join-button"
            onClick={handleJoinRoom}
            disabled={isConnecting}
          >
            {isConnecting ? "Connecting..." : "Join Room"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
