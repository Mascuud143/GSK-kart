export class rom {
  constructor(room, position) {
    this.room = room;
    this.position = position;
  }

  show() {
    const point = document.querySelector(`#${this.room}`);

    // show the point
    point.classList.remove("hidden");
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
    top: "310",
    right: "295px",
  },

  B107: {
    top: "290px",
    right: "250px",
  },
};
