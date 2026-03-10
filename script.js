async function send() {
  let messageInput = document.getElementById("msg");
  let message = messageInput.value;

  if (message.trim() === "") return;

  let chatBox = document.getElementById("chat-box");

  // show user message
  chatBox.innerHTML += `
<div class="message user">
<b>You:</b> ${message}
</div>
`;

  messageInput.value = "";

  // loading indicator
  chatBox.innerHTML += `
<div class="message bot" id="loading">
AI is typing...
</div>
`;

  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    let res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    let data = await res.json();

    // remove loading text
    document.getElementById("loading").remove();

    // convert markdown → html
    let reply = marked.parse(data.reply);

    // show bot message
    chatBox.innerHTML += `
<div class="message bot">
<b>AI:</b><br>
${reply}
</div>
`;

    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    document.getElementById("loading").remove();

    chatBox.innerHTML += `
<div class="message bot">
Error connecting to server
</div>
`;
  }
}
