// lista er dynamisk, og "where" må være riktig rom
const detteSkjerDenneUken = [
  { title: "Foreldremmøte - Rom: B101", where: "B101" },
  { title: "Styremmøte GSk - Rom: B207", where: "B207" },
  { title: "Foreldremmøte - Rom: B101", where: "B101" },
];

const detteSkjerTemplate = detteSkjerDenneUken
  .map((el) => {
    return ` <div><a id="detteSkjer-btn" room=${el.where} href="#">${el.title}</a>
  <img id="tap-icon" src="bilder/tap.png" alt="" />
</li>
<li></div>`;
  })
  .join(" ");

export default detteSkjerTemplate;
