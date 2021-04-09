import modal from "./modal.js";
import { rom, rooms } from "./room.js";

// Top level
let gvgsModalIsOpened = false;

// At refresh, this happens
function init() {
  // Hide all the points
  const allPoints = document.querySelectorAll(".point");
  allPoints.forEach((point) => point.classList.add("hidden"));
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
romModal.addEventListener("click", closeAvdelingRomModal);
backdrop.addEventListener("click", closeAvdelingRomModal);

/////////////////////////////////
//Functions
function openFinnRomModal() {
  renderAvdelingRomModal();
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
  // Make shure there is no html content inside
  romModal.innerHTML = "";

  romModal.insertAdjacentHTML("afterbegin", modal.avdelingRomtemplate);
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
  romModal.classList.add("hidden");
  backdrop.classList.add("hidden");
}
