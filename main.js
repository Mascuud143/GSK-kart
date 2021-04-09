import modal from "./modal.js";

// Top level
let gvgsModalIsOpened = false;

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
  if (classes.includes("background-drop") || classes.includes("close-modal")) {
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

  const tilbakeTilAvdeling = document.querySelector("#go-tilavdeling-btn");
  tilbakeTilAvdeling.addEventListener("click", () => {
    romModal.innerHTML = "";
    romModal.insertAdjacentHTML("afterbegin", modal.avdelingRomtemplate);
  });
}
