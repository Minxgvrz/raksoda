const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");
const card = document.querySelector(".card");

// 👉 ความไว (ยิ่งมาก = กดยาก)
let difficulty = 1;

// ปุ่มไม่อ่ะ หนีแบบ "กดไม่ทัน"
noBtn.addEventListener("mouseenter", () => {
    difficulty += 0.4; // หนีแรงขึ้นเรื่อย ๆ

    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // จำกัดขอบเขตในหน้าจอ
    const minX = cardRect.left;
    const maxX = cardRect.right - btnRect.width;
    const minY = cardRect.top;
    const maxY = cardRect.bottom - btnRect.height;

    const x = minX + Math.random() * (maxX - minX);
    const y = minY + Math.random() * (maxY - minY);

    // วาร์ปแบบไว (แต่ไม่หลุดจอ)
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// กดได้สิ
yesBtn.addEventListener("click", () => {
    gif.src = "happy.gif";
    createHearts(10);

    setTimeout(() => {
        card.innerHTML = `
            <img src="ending.gif" style="width:200px;border-radius:20px;">
            <h1>เราคบกันแล้วนะ 💖</h1>
            <p>ขอบคุณที่เลือกพี่นะไอ่หมา รักนะ 🥰</p>
        `;
    }, 1400);
});

// ❤️ หัวใจลอย (ไม่รัวเกิน)
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2500);
    }
}
