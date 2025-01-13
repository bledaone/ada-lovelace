function unixTimeSeconds() {
  const millisecondsSinceEpoch = Date.now();
  const secondsSinceEpoch = Math.floor(millisecondsSinceEpoch / 1000);
  return secondsSinceEpoch;
}

function formatWithCommas(number) {
  return number.toLocaleString(); // Use toLocaleString for comma separation
}

let initialSeconds = unixTimeSeconds();
const counterElement = document.getElementById("seconds-counter");

setInterval(() => {
  const currentSeconds = unixTimeSeconds();
  const formattedSeconds = formatWithCommas(currentSeconds);
  counterElement.textContent = formattedSeconds; 
}, 1000);

function setupProjectToggles() {
  const listItems = document.querySelectorAll('#projects ul li');

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      const paragraph = item.querySelector('p'); // Find the <p> inside the <li>
      if (paragraph) {
        if (paragraph.style.display === 'none' || !paragraph.style.display) {
          paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupProjectToggles);
} else {
  setupProjectToggles();
}