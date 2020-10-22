var one = document.queryselector("#one")



one.addEventlistener("click", () => {
    one.textcontent = "am clicked";
    one.style.color = "red";


})

var two = document.querySelector("#two")
two.addeventlistener("dblclick", () => {
    two.style.color = "green";
    two.textContent = "doubleclicked";


})
var three = document.querySelector("#three");
three.addeventlistener("mouseover", () => {
    three.style.color = "yellow";
    three.textcontent = "mouse currently over me"


})