const messages = [
    "YOUR DATA IS GONE!",
    "あなたのデータが消えました！",
    "¡Tus datos han desaparecido!",
    "Votre données sont parties !",
    "你的数据已经丢失！",
    "IP: 192.168.1." + Math.floor(Math.random() * 255) + " HACKED!",
    "Access Denied. Critical Breach!",
    "Botnet Injected. Goodbye!",
];

function spamScreen() {
    const messageBox = document.createElement("p");
    messageBox.innerText = messages[Math.floor(Math.random() * messages.length)];
    messageBox.style.position = "absolute";
    messageBox.style.top = Math.random() * 100 + "vh";
    messageBox.style.left = Math.random() * 100 + "vw";
    messageBox.style.color = "red";
    document.body.appendChild(messageBox);
}

setInterval(spamScreen, 500);
