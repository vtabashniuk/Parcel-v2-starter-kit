import template from "./handlebars/template.hbs";
import onClickFoo from "./js/onClick";

console.log("Hi this is consoled message");
document.querySelector(".button").insertAdjacentHTML("afterbegin", template());
document.querySelector(".button").addEventListener("click", onClickFoo);

