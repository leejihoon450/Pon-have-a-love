  const gif = document.getElementById('gif');
  const question = document.getElementById('question');
  const btnContainer = document.getElementById('btnContainer');
  let yesBtnSize = 18;
  let noCount = 0;

  // แก้ตรงนี้เพื่อเปลี่ยนรูปเมื่อกด no
  let gifs = ["https://media.tenor.com/76BaX0eo304AAAAj/kitty-kitty-heart.gif", 
    "https://media1.tenor.com/m/wVAjxnPa81IAAAAd/cat-cat-gif.gif",
    "https://media1.tenor.com/m/f6ts3WWJa-8AAAAC/funny-cats-funny.gif",
    "https://media1.tenor.com/m/kEZzd8WrRpAAAAAC/peach-peach-and-goma.gif",
    "https://media.tenor.com/C35t4Pf5GlgAAAAi/peach-and-goma-cute.gif",
    "https://media1.tenor.com/m/troWhJKIjZsAAAAC/hey-cat.gif"
  ]

  function initButtons() {
    btnContainer.innerHTML = `
      <button class="btn yes" id="yesBtn">ຮັກ 💕</button>
      <button class="btn no" id="noBtn">ບໍ່ຮັກ 😢</button>
    `;
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => yesClick(yesBtn));
    noBtn.addEventListener('click', () => noClick(yesBtn, noBtn));
  }

  function resetPage() {
    noCount = 0;
    yesBtnSize = 18;
    question.textContent = "ຮັກຂ້ອຍບໍ່? 💖";
    // แก้ตรงนี้เพื่อเปลี่ยนรูปหน้าแรก
    gif.src = "https://media.tenor.com/76BaX0eo304AAAAj/kitty-kitty-heart.gif";
    initButtons();
  }

  function yesClick(yesBtn) {
    // แก้ตรงนี้เพื่อเปลี่ยนรูปเมื่อกด yes
    gif.src = "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif";
    question.textContent = "ເຍ່ ຂ້ອຍກະຮັກເຈົ້າຄືກັບແມ່ຂອງເຈົ້າ 💗";
    btnContainer.innerHTML = `<button class="btn" id="homeBtn">ກັບ🏠</button>`;
    document.getElementById('homeBtn').addEventListener('click', resetPage);
  }

  function noClick(yesBtn, noBtn) {
    yesBtnSize += 10;
    yesBtn.style.fontSize = yesBtnSize + 'px';
    noCount++;
    gif.src = gifs[noCount]
    if (noCount >= 5) {
      noBtn.remove();
      yesBtn.textContent = "ຮັກ ❤️";
      yesBtn.classList.add('ຮັກ');
      yesBtn.onclick = () => {
        // แก้ตรงนี้เพื่อเปลี่ยนรูปเมื่อกด love
        gif.src = "https://media1.tenor.com/m/qR1sGRNmfqsAAAAC/besito-catlove.gif";
        question.innerHTML = `<div class="message-box">ເຍ້ ຂ້ອຍກະຮັກເຈົ້າຄືກັບແມ່ຂອງເຈົ້າ 💞</div>`;
        btnContainer.innerHTML = `<button class="btn" id="homeBtn">ກັບ 🏠</button>`;
        document.getElementById('homeBtn').addEventListener('click', resetPage);
      };
    }
  }

  resetPage();