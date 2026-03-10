# AI Chatbot

A web-based AI chatbot application powered by Llama3 model using Ollama.

## Features

- Real-time chat interface
- Markdown rendering support
- AI-powered responses using Llama3
- Clean and modern UI

## Prerequisites

Before running this project, ensure you have the following installed:

1. **Node.js** (v14 or higher)
2. **Python** (v3.8 or higher)
3. **Ollama** - Must be installed and running with Llama3 model
   - Install Ollama: https://ollama.ai
   - Pull Llama3 model: `ollama pull llama3`

## Installation

### 1. Clone the repository

```
bash
git clone https://github.com/Mustafa2431/AI_Chatbot.git
cd AI_Chatbot
```

### 2. Install Node.js dependencies

```
bash
npm install
```

### 3. Install Python dependencies

```
bash
pip install ollama
```

## Running the Application

### Step 1: Start Ollama

Make sure Ollama is running with the Llama3 model:

```
bash
ollama run llama3
```

### Step 2: Start the server

```
bash
npm start
```

The server will start on `http://localhost:3000`

### Step 3: Open the application

Open `index.html` in your web browser, or navigate to `http://localhost:3000` if serving static files.

## Project Structure

```
AI_Chatbot/
├── index.html       # Main HTML file
├── style.css       # Stylesheet
├── script.js       # Frontend JavaScript
├── server.js       # Express server
├── chatbot.py      # Python chatbot script
├── package.json    # Node.js dependencies
├── requirements.txt # Python dependencies
└── README.md       # This file
```

## API Endpoint

- **URL:** `POST /chat`
- **Request Body:** `{"message": "your message here"}`
- **Response:** `{"reply": "AI response here"}`

## Troubleshooting

### Ollama not running

Ensure Ollama is installed and running:

```
bash
ollama --version
```

### Port already in use

If port 3000 is in use, modify `server.js` to use a different port.

### Python not found

Make sure Python is in your system PATH. You may need to use `python3` instead of `python` in `server.js`.

## License

ISC
