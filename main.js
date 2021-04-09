import modal from "./modal.js";
import { rom, rooms } from "./room.js";

// Top level
const herskaDu = document.querySelector(".her-skal-du");

// At refresh, this happens
function init() {
  // Hide all the points
  const allPoints = document.querySelectorAll(".point");
  //   allPoints.forEach((point) => point.classList.add("hidden"));

  //   Hide her skal du circle
  herskaDu.style.display = "none";
}

//Select elements
// knapper
const finnRomBtn = document.querySelector("#finn-rom");
const finnAnsattBtn = document.querySelector("#finn-ansatt");
const closeFinnRomModalBtn = document.querySelector("#close-modal");

// modal
const romModal = document.querySelector("#finnrom-modal");
const backdrop = document.querySelector("#back-drop");

////////////////////////////////
// EvenstListners

window.addEventListener("load", () => {
  init();
});

finnRomBtn.addEventListener("click", openFinnRomModal);
finnAnsattBtn.addEventListener("click", openAnsatteModal);
romModal.addEventListener("click", closeAvdelingRomModal);
backdrop.addEventListener("click", closeAvdelingRomModal);

/////////////////////////////////
//Functions
function openFinnRomModal() {
  renderAvdelingRomModal();
}

function openAnsatteModal() {
  renderAnsatteModal();
}

function closeAvdelingRomModal(e) {
  // Make sure the modal does not close, but only if the close X button  || backdrop is clicked
  const classes = [...e.target.classList];

  if (
    classes.includes("background-drop") ||
    classes.includes("close-modal") ||
    classes.includes("room-gvgs")
  ) {
    romModal.classList.add("hidden");
    backdrop.classList.add("hidden");
  }
}

function renderAvdelingRomModal() {
  // Make sure we clear out point before modal is re-opened
  const allPoints = document.querySelectorAll(".point");
  allPoints.forEach((point) => {
    const classes = [...point.classList];

    if (!classes.includes("hidden")) point.classList.add("hidden");
  });

  // Make shure there is no html content inside
  romModal.innerHTML = "";

  romModal.insertAdjacentHTML("afterbegin", modal.avdelingRomtemplate);
  romModal.classList.toggle("hidden");
  backdrop.classList.remove("hidden");
  const gvgsBtn = document.querySelector("#gvgs-btn");
  gvgsBtn.addEventListener("click", renderRomGvgs);
}
function renderAnsatteModal() {
  // Make shure there is no html content inside
  romModal.innerHTML = "";

  romModal.insertAdjacentHTML("afterbegin", modal.ansattetemplate);
  romModal.classList.toggle("hidden");
  backdrop.classList.remove("hidden");
  const gvgsBtn = document.querySelector("#gvgs-btn");
  gvgsBtn.addEventListener("click", renderRomGvgs);
}

function renderRomGvgs() {
  romModal.innerHTML = "";
  romModal.insertAdjacentHTML("afterbegin", modal.gvgsModalTemplate);
  //   Listening click for all rooms for gvgs
  const gvgsRooms = document.querySelectorAll(".room-gvgs");
  console.log(gvgsRooms);
  gvgsRooms.forEach((room) => {
    room.addEventListener("click", showRoom);
  });

  const tilbakeTilAvdeling = document.querySelector("#go-tilavdeling-btn");
  tilbakeTilAvdeling.addEventListener("click", () => {
    romModal.innerHTML = "";
    romModal.insertAdjacentHTML("afterbegin", modal.avdelingRomtemplate);
  });
}

//Runs whenever room is selected
function showRoom(e) {
  const room = e.target.textContent;

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
}
