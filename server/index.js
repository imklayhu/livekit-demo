const express = require("express");
const cors = require("cors");
const { AccessToken } = require("livekit-server-sdk");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 生成LiveKit访问令牌
app.post("/api/token", (req, res) => {
  const { roomName, participantName } = req.body;
  
  if (!roomName || !participantName) {
    return res.status(400).json({ error: "Missing roomName or participantName" });
  }

  // 从环境变量获取LiveKit配置
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const wsUrl = process.env.LIVEKIT_WS_URL;

  if (!apiKey || !apiSecret || !wsUrl) {
    return res.status(500).json({ error: "LiveKit configuration missing" });
  }

  try {
    const at = new AccessToken(apiKey, apiSecret, {
      identity: participantName,
    });

    at.addGrant({ roomJoin: true, room: roomName });

    const token = at.toJwt();

    res.json({
      token,
      wsUrl,
      roomName,
      participantName,
    });
  } catch (error) {
    console.error("Error generating token:", error);
    res.status(500).json({ error: "Failed to generate token" });
  }
});

// 健康检查端点
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("LiveKit Demo Server is ready!");
});
