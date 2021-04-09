const modal = {
  gvgsModalTemplate: ` <div class="header">
<button id="go-tilavdeling-btn">Gå til avdelling</button>
</div>
<div>
<img id="gvgs-rom-logo" src="/bilder//gauldalvgslogo.jpg" alt="gauldalvgslogo" />
</div>
<div class="rooms">
<button class="room-100">B101</button>
<button class="room-100">B102</button>
<button class="room-100">B103</button>
<button class="room-100">B104</button>
<button class="room-100">B105</button>
<button class="room-100">B106</button>
<button class="room-100">B107</button>

<button class="room-100">B202</button>
<button class="room-100">B201</button>
<button class="room-100">B203</button>
<button class="room-100">B204</button>
<button class="room-100">B205</button>
<button class="room-100">B206</button>
<button class="room-100">B207</button>

</div>`,

  avdelingRomtemplate: ` <span class="close-modal" id="close-modal">&times;</span>
  <div class="header">
    <h3>Velg avdeling eller Møterom</h3>
    <button id="moterom-btn">Møterom</button>
  </div>
  <div class="avdelinger">
    <img  src="/bilder/mkglogo.jpg" alt="mkglogo" />
    <img id="gvgs-btn" src="/bilder/gauldalvgslogo.jpg" alt="gauldalvgslogo" />
    <img
      src="/bilder/storenkulturhuslogo.jpg"
      alt="storenkulturhuslogo"
    />
  </div>`,
};

export default modal;
