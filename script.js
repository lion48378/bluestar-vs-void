// Change this to your real kickoff date/time.
const GAME_DATE = "2026-10-10T12:00:00-07:00";
function tick(){const x=new Date(GAME_DATE)-Date.now();if(x<=0)return;d.textContent=Math.floor(x/864e5);h.textContent=Math.floor(x%864e5/36e5);m.textContent=Math.floor(x%36e5/6e4);s.textContent=Math.floor(x%6e4/1e3)}tick();setInterval(tick,1000);
document.querySelector('#form').addEventListener('submit',e=>{e.preventDefault();msg.textContent=`Ticket registered for ${name.value} (${roblox.value}).`;e.target.reset()});
