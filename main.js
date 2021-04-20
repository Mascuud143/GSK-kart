import modal from "./modal.js";
import { rom, rooms } from "./room.js";
import detteSkjerTemplate from "./detteskjerdenneuken.js";

// Top level

// Render detteskjer denne uken
const detteSKjerContainer = document.querySelector("#detteSKjer");

detteSKjerContainer.insertAdjacentHTML("afterbegin", detteSkjerTemplate);

//Select elements
// knapper
const finnRomBtn = document.querySelector("#finn-rom");
const finnAnsattBtn = document.querySelector("#finn-ansatt");
const closeFinnRomModalBtn = document.querySelector("#close-modal");
const tilbakestill = document.querySelector(".tilbakestill-visning");
const detteSkjerBtn = document.querySelectorAll("#detteSkjer-btn");

// modal
const romModal = document.querySelector("#finnrom-modal");
const backdrop = document.querySelector("#back-drop");

const herskaDu = document.querySelector(".her-skal-du");
////////////////////////////////
// EvenstListners
window.addEventListener("load", () => {
  init();
});

// ["onmousemove", "onkeypress "].forEach((e) =>
//   // window.addEventListener(e, idleCounter)
// );

finnRomBtn.addEventListener("click", renderAvdelingRomModal);
finnAnsattBtn.addEventListener("click", renderAnsatteModal);
romModal.addEventListener("click", closeAvdelingModal);
backdrop.addEventListener("click", closeAvdelingModal);
detteSkjerBtn.forEach((btn) => btn.addEventListener("click", showRoom));
/////////////////////////////////

// At refresh, this happens
function init() {
  herskaDu.style.display = "none";
  document.querySelector(".point").classList.add("hidden");
}

//Functions

function closeAvdelingModal(e) {
  // Make sure the modal does not close, but only if the close X button  || backdrop is clicked
  const classes = [...e.target.classList];

  if (
    classes.includes("background-drop") ||
    classes.includes("close-modal") ||
    classes.includes("room-gvgs") ||
    classes.includes("finnansatte-btn")
  ) {
    romModal.classList.add("hidden");
    backdrop.classList.add("hidden");
  }
}

function renderAvdelingRomModal() {
  // Make shure there is no html content inside
  romModal.innerHTML = "";

  romModal.insertAdjacentHTML("afterbegin", modal.avdelingRomtemplate);
  romModal.classList.toggle("hidden");
  backdrop.classList.remove("hidden");
  //   GVGS modal
  const gvgsBtn = document.querySelector("#gvgs-btn");
  gvgsBtn.addEventListener("click", () => {
    renderRomModal(modal.gvgsModalTemplate, ".room-gvgs");
  });

  // MCG Modal
  const mcgBtn = document.querySelector("#mgc-btn");
  mcgBtn.addEventListener("click", () => {
    console.log("iolo");
    renderRomModal(modal.midtreGTemplate, ".room-mgc");
  });

  // Sk Modal
  const skBtn = document.querySelector("#sk-btn");
  skBtn.addEventListener("click", () => {
    renderRomModal(modal.skTemplate, ".room-sk");
  });

  // Mote modal
  const moteBtn = document.querySelector("#moterom-btn");
  moteBtn.addEventListener("click", () => {
    renderRomModal(modal.moteTemplate, ".room-mote");
  });
}
function renderAnsatteModal() {
  // Make shure there is no html content inside
  romModal.innerHTML = "";

  romModal.insertAdjacentHTML("afterbegin", modal.ansattetemplate);

  const finnansatteBtn = document.querySelector("#finnansatte-btn");

  finnansatteBtn.addEventListener("click", closeAvdelingModal);

  romModal.classList.remove("hidden");
  backdrop.classList.remove("hidden");

  const gvgsBtn = document.querySelector("#gvgs-btn");
  gvgsBtn.addEventListener("click", () => {
    window.location.href = "/ansattgvs.html";
  });

  // MCGansatte
  const mcgBtn = document.querySelector("#mgc-btn");
  mcgBtn.addEventListener("click", () => {
    window.location.href = "/ansattstus.html";
  });

  // Sk ansatte
  const skBtn = document.querySelector("#sk-btn");
  skBtn.addEventListener("click", () => {
    window.location.href = "/ansattkhus.html";
  });
}

function renderRomModal(modale, rooms) {
  romModal.innerHTML = "";
  romModal.insertAdjacentHTML("afterbegin", modale);
  //   Listening click for all rooms for gvgs
  const gvgsRooms = document.querySelectorAll(`${rooms}`);
  gvgsRooms.forEach((room) => {
    room.addEventListener("click", showRoom);
  });

  document
    .querySelector("#go-tilavdeling-btn")
    .addEventListener("click", () => {
      renderAvdelingRomModal();
      romModal.classList.remove("hidden");
    });
}

//Runs whenever a room btn is clicked
function showRoom(e) {
  const room = e.target.getAttribute("room") || e.target.textContent;
  let roomSelected;

  for (let rom in rooms) {
    if (rom == room) {
      roomSelected = rom;
    }
  }
  console.log(roomSelected);

  // from the selected room , we crrate a new rom class
  const newRoom = new rom(roomSelected, rooms[roomSelected]);
  newRoom.show();
  //   Hide modal
  romModal.classList.add("hidden");
  backdrop.classList.add("hidden");
  herskaDu.style.display = "flex";

  herskaDu.textContent = `${roomSelected} ligger i ${
    roomSelected[1] == "1" ? "1" : "2"
  }.etg`;

  tilbakestill.classList.remove("hidden");
  tilbakestill.addEventListener("click", () => location.reload());
}
