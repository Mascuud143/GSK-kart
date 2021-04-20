const modal = {
  gvgsModalTemplate: ` <div class="header">
<button id="go-tilavdeling-btn">Gå til avdelling</button>
</div>
<div>
<img id="gvgs-rom-logo" src="/bilder//gauldalvgslogo.jpg" alt="gauldalvgslogo" />
</div>
<div class="rooms-gvgs">
<button class="room room-gvgs">B101</button>
<button class="room room-gvgs">B102</button>
<button class="room room-gvgs">B103</button>
<button class="room room-gvgs">B104</button>
<button class="room room-gvgs">B105</button>
<button class="room room-gvgs">B106</button>
<button class="room room-gvgs">B107</button>

<button class="room room-gvgs">B202</button>
<button class="room room-gvgs">B201</button>
<button class="room room-gvgs">B203</button>
<button class="room room-gvgs">B204</button>
<button class="room room-gvgs">B205</button>
<button class="room room-gvgs">B206</button>
<button class="room room-gvgs">B207</button>

</div>`,

  avdelingRomtemplate: ` <span class="close-modal" id="close-modal">&times;</span>
  <div class="header">
    <h3>Velg avdeling eller Møterom</h3>
    <button id="moterom-btn">Møterom</button>
  </div>
  <div class="avdelinger">
    <img id="mgc-btn" src="/bilder/mkglogo.jpg" alt="mkglogo" />
    <img id="gvgs-btn" src="/bilder/gauldalvgslogo.jpg" alt="gauldalvgslogo" />
    <img
      src="/bilder/storenkulturhuslogo.jpg"
      alt="storenkulturhuslogo"
      id="sk-btn"
    />
  </div>`,

  ansattetemplate: ` <span class="close-modal" id="close-modal">&times;</span>
  <div class="header">
    <h3>Velg avdeling</h3>
    <button class="finnansatte-btn" id="finnansatte-btn">Tilforside</button>
  </div>
  <div class="avdelinger">
    <img id="mgc-btn" src="/bilder/mkglogo.jpg" alt="mkglogo" />
    <img id="gvgs-btn" id="gvgs-btn" src="/bilder/gauldalvgslogo.jpg" alt="gauldalvgslogo" />
    <img id="sk-btn"
      src="/bilder/storenkulturhuslogo.jpg"
      alt="storenkulturhuslogo"
    />
  </div>`,

  midtreGTemplate: ` <div class="header">
  <button id="go-tilavdeling-btn">Gå til avdelling</button>
  </div>
  <div>
  <img  src="/bilder/mkglogo.jpg" alt="mkglogo" />
  </div>
  <div class="rooms-gvgs">
  <button class="room room-mgc">C101</button>
  <button class="room room-mgc">C102</button>
  <button class="room room-mgc">C103</button>
  <button class="room room-mgc">C104</button>
  <button class="room room-mgc">C105</button>
  <button class="room room-mgc">B106</button>
  
  </div>`,

  skTemplate: ` <div class="header">
  <button id="go-tilavdeling-btn">Gå til avdelling</button>
  </div>
  <div>
  <img 
      src="/bilder/storenkulturhuslogo.jpg"
      alt="storenkulturhuslogo"
    />
  </div>
  <div class="rooms-gvgs">
  <button class="room room-sk">C101</button>
  <button class="room room-sk">C102</button>
  <button class="room room-sk">C103</button>
  <button class="room room-sk">C104</button>
  <button class="room room-sk">C105</button>
  <button class="room room-sk">B106</button>
  
  </div>`,

  moteTemplate: ` <div class="header">
  <button id="go-tilavdeling-btn">Gå til avdelling</button>
  </div>
  <h2>Møterom</h2>
  <div class="rooms-gvgs">
  <button class="room room-mote">C246</button>
  <button class="room room-mote">Studio 2(D229)</button>
  <button class="room room-mote">Studio 2(D223)</button>
  <button class="room room-mote">Studio 2(D224)</button>
  </div>`,
};

export default modal;

// for (let qool in rooms) {
//   if (qool[1] == "1") {
//     console.log(rooms[qool]);
//     const qol = new rom(qool, rooms[qool]);
//     const div = document.createElement("div");
//     div.style.backgroundColor = "red";
//     div.style.width = "25px";
//     div.style.height = "25px";
//     div.style.borderRadius = "25px";
//     div.style.position = "absolute";
//     const r = Number(rooms[qool].right.slice(0, -2)) - 6;
//     const t = Number(rooms[qool].top.slice(0, -2)) - 10;

//     div.style.right = `${r}px`;
//     div.style.top = `${t}px`;

//     //h
//     // div.style.right = rooms[qool].right;
//     // div.style.top = rooms[qool].top;
//     document.querySelector(".bane").appendChild(div);
//     qol.show();
//   }
// }
