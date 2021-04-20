const ansatte = [
  // Ledelse
  {
    navn: "Randi Hermstad",
    title: "Rektor",
    department: "ledelsen",
    kontor: "C253",
  },
  {
    navn: "Svein Ofstad",
    title: "Ass.rektor",
    department: "ledelsen",
    kontor: "C252",
  },

  {
    navn: "Øystein Øverkil Vie",
    title: "Avdelingsleder Studiespesialisering",
    department: "ledelsen",
    kontor: "C250",
  },
  {
    navn: "Hilde Rudi Bråten",
    title: "Avdelingsleder Yrkesfag",
    department: "ledelsen",
    kontor: "C255",
  },
];

export default ansatte
  .map((ansatt) => {
    return `<div id="ansatt">
        <h2>${ansatt.navn}</h2>
        <h6>${ansatt.title}</h6>
        <p>Kontor: <span id="ansatt-room">${ansatt.kontor}</span></p>
</div>`;
  })
  .join(" ");
