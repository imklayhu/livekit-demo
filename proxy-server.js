const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = 3002;

// 代理到localhost:3000
app.use("/", createProxyMiddleware({
  target: "http://localhost:3000",
  changeOrigin: true,
  logLevel: "debug"
}));

app.listen(port, "0.0.0.0", () => {
  console.log(`Proxy server running on http://0.0.0.0:${port}`);
  console.log("This will allow iOS devices to access via localhost");
});
