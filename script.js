const API = "https://message-app-backend-vk3y.onrender.com/messages";
async function sendMessage() {
  const msg = document.getElementById("msg").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  loadMessages();
}

async function loadMessages() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(m => {
    const li = document.createElement("li");
    li.innerText = m;
    list.appendChild(li);
  });
}

loadMessages();