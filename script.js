function copyIP() {
    const ip = document.getElementById("ip").value;

    navigator.clipboard.writeText(ip);

    const button = document.querySelector(".ip-box button");

    button.innerText = "✅ IP скопирован!";

    setTimeout(() => {
        button.innerText = "Скопировать IP";
    }, 2000);
}
