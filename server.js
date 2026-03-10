const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();

app.use(cors()); // ⭐ ye line CORS allow karegi
app.use(express.json());

app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  const python = spawn("python", ["chatbot.py", userMessage]);

  let data = "";

  python.stdout.on("data", (chunk) => {
    data += chunk.toString();
  });

  python.on("close", () => {
    res.json({ reply: data });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
