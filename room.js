const point = document.querySelector(`.point`);
export class rom {
  parenEl = document.querySelector(".bane");
  constructor(room, position) {
    this.room = room;
    this.position = position;
  }

  show() {
    point.classList.remove("hidden");
    point.style.position = "absolute";
    point.style.top = `${this.position.top}`;
    point.style.right = `${this.position.right}`;
  }
}

export const rooms = {
  B101: {
    top: "90px",
    right: "230px",
  },

  B102: {
    top: "90px",
    right: "295px",
  },

  B103: {
    top: "140px",
    right: "295px",
  },

  B104: {
    top: "190px",
    right: "295px",
  },

  B105: {
    top: "240px",
    right: "295px",
  },

  B106: {
    top: "330px",
    right: "295px",
  },

  B107: {
    top: "290px",
    right: "250px",
  },

  B124: {
    top: "450px",
    right: "340px",
  },

  B123: {
    top: "450px",
    right: "400px",
  },

  B117: {
    top: "500px",
    right: "280px",
  },

  B119: {
    top: "580px",
    right: "260px",
  },

  C101: {
    top: "160px",
    right: "460px",
  },

  C102: {
    top: "160px",
    right: "525px",
  },

  C103: {
    top: "220px",
    right: "525px",
  },

  C104: {
    top: "280px",
    right: "525px",
  },
  C106: {
    top: "340px",
    right: "525px",
  },

  C105: {
    top: "340px",
    right: "460px",
  },

  C120: {
    top: "240px",
    right: "620px",
  },

  A101: {
    top: "50px",
    right: "50px",
  },

  A110: {
    top: "250px",
    right: "50px",
  },

  A117: {
    top: "510px",
    right: "70px",
  },

  A116: {
    top: "510px",
    right: "20px",
  },

  D102: {
    top: "160px",
    right: "780px",
  },

  D105: {
    top: "200px",
    right: "780px",
  },

  D111: {
    top: "300px",
    right: "780px",
  },

  D121: {
    top: "590px",
    right: "740px",
  },

  // 2.etg
  A217: {
    top: "500px",
    right: "50px",
  },

  A213: {
    top: "370px",
    right: "80px",
  },

  B201: {
    top: "90px",
    right: "230px",
  },

  B202: {
    top: "90px",
    right: "285px",
  },

  B203: {
    top: "150px",
    right: "285px",
  },

  B204: {
    top: "210px",
    right: "285px",
  },

  B205: {
    top: "270px",
    right: "285px",
  },

  B206: {
    top: "340px",
    right: "285px",
  },

  B207: {
    top: "340px",
    right: "250px",
  },

  B220: {
    top: "500px",
    right: "285px",
  },

  B221: {
    top: "560px",
    right: "285px",
  },

  B225: {
    top: "440px",
    right: "350px",
  },

  arbeidsromST: {
    top: "440px",
    right: "410px",
  },

  C201: {
    top: "150px",
    right: "530px",
  },

  C202: {
    top: "150px",
    right: "470px",
  },

  C203: {
    top: "220px",
    right: "470px",
  },
  C204: {
    top: "270px",
    right: "470px",
  },

  C205: {
    top: "330px",
    right: "470px",
  },

  C206: {
    top: "330px",
    right: "530px",
  },

  D202: {
    top: "150px",
    right: "800px",
  },

  D201: {
    top: "150px",
    right: "720px",
  },

  D203: {
    top: "200px",
    right: "800px",
  },

  D204: {
    top: "250px",
    right: "800px",
  },

  D214: {
    top: "300px",
    right: "800px",
  },

  D212: {
    top: "300px",
    right: "770px",
  },

  D212: {
    top: "300px",
    right: "770px",
  },
};
