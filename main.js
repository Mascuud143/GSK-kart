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
romModal.addEventListener("click", closeFinnRomModal);
backdrop.addEventListener("click", closeFinnRomModal);
/////////////////////////////////
//Functions
function openFinnRomModal() {
  romModal.classList.toggle("hidden");
  backdrop.classList.remove("hidden");
  console.log("modal");
}

function closeFinnRomModal(e) {
  console.log(e.target == div);
  romModal.classList.add("hidden");
  backdrop.classList.add("hidden");
}
