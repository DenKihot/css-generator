const options = document.querySelector(".bs");
let optionVal = "solid";
options.onchange = function () {
  optionVal = this.value;
  renderCss();
};

const Sett = {
  red: "0",
  green: "0",
  blue: "0",
  w: "200",
  h: "200",
  tl: "0",
  tr: "0",
  bl: "0",
  br: "0",
  bw: "0",
  bc: "0",
};

document.querySelectorAll("input").forEach((El) => {
  El.oninput = function () {
    if (this.id == "abr") {
      Sett.tl = Sett.tr = Sett.br = Sett.bl = this.value;

      document
        .querySelectorAll(".border-rad")
        .forEach((elem) => (elem.value = this.value));
    } else if (this.id == "bc") {
      Sett.bc = this.value;
    } else {
      Sett[this.id] = this.value;
    }

    renderCss();
  };
});

function renderCss() {
  document.querySelector("div").style.cssText = `
        background: rgb(${Sett.red}, ${Sett.green}, ${Sett.blue});
        width: ${Sett.w}px;
        height: ${Sett.h}px;
        border-radius: ${Sett.tl}% ${Sett.tr}% ${Sett.br}% ${Sett.bl}%;      
       
        border: ${Sett.bw}px ${optionVal} ${Sett.bc};
        `;
        
  document.querySelector("article").innerHTML = `
        
        <p> background: rgb(${Sett.red}, ${Sett.green}, ${Sett.blue}); </p>
        <p> width: ${Sett.w}px; </p>
        <p> height: ${Sett.h}px; </p>
        <p> border-radius: ${Sett.abr}%; </p>  
        <p> border-top-left-radius: ${Sett.tl}%; </p>
        <p> border-top-right-radius: ${Sett.tr}%; </p>
        <p> border-bottom-left-radius: ${Sett.bl}%; </p>
        <p> border-bottom-right-radius: ${Sett.br}%; </p>
        <p> border-width: ${Sett.bw}px; </p>
         <p> border-color: ${Sett.bc}; </p>
        `;
}
