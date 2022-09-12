import Sessions from "./Sessions.js";

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};

//Sessions
const homeContent = new Sessions("Hi, I'm Jonatha.", "Contact Me");

const homeSession = `
<header><span class="titleHome">${homeContent.sessionTitleHome}</span></header>

            <a class="btnContactme">
                <div class="btnContainer"><span class="btnText">${homeContent.sessionButton}</span></div>
`;

const main = document.querySelector(".maincontent");

main.innerHTML = homeSession;
