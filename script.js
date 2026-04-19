function handleClick() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  if (!input) {
    output.innerText = "⚠️ Napiš něco!";
    return;
  }

  if (input.toLowerCase().includes("arrr")) {
    output.innerText = "🧠 Jé ar… detekováno speciální slovo!";
  } else {
    output.innerText = "💬 Output: " + input;
  }
}

// live clock
function updateTime() {
  const time = new Date().toLocaleTimeString();
  document.getElementById("time").innerText = "🕒 " + time;
}

setInterval(updateTime, 1000);
updateTime();

// little glitch effect on title
setInterval(() => {
  const title = document.querySelector(".glow");
  title.style.opacity = Math.random() > 0.9 ? 0.6 : 1;
}, 200);
