function pad(n){ return String(n).padStart(2, "0"); }

function updateClock(){
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const h12 = hours % 12 || 12;
  const ampm = hours >= 12 ? "PM" : "AM";
  document.getElementById("clock").textContent = `${h12}:${pad(mins)} ${ampm}`;

  document.getElementById("date").textContent =
    now.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
}

updateClock();
setInterval(updateClock, 15000);

document.getElementById("refreshTile").addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
});
