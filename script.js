/*let heading = document.querySelector("h2")
console.dir(heading.innerText);
h2.innerText = h2.innerText  +   " from Mandla "


let divs = document.querySelectorAll(".box")
let idx =1
for(div of divs){
    div.innerText = `new value = ${idx}`
    idx++
}

let div = document.querySelector("div");
console.log(div)
let id = div.getAttribute("id");
console.log(id);
let id1 = div.setAttribute("id", "myId");
console.log(id1);

let div1 = document.querySelector("div")
div.style.backgroundColor = "green"
div.style.fontSize = "280px"


let name1 = div.getAttribute("name");
console.log(name1);
/* can be done this way but not smart programming
divs[0].innerText = "new unique value 1"
divs[1].innerText = "new unique value 1"

divs[2].innerText = "new unique value 1"



//insert elemenst

let newBtn = document.createElement("button")
newBtn.innerText = "click me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn) */

 //Question1
let newBtn = document.createElement("button")
newBtn.innerText = "click me"
newBtn.style.color = "white"
newBtn.style.backgroundColor = "red"
document.querySelector("body").prepend(newBtn)

//Question 2
let para = document.querySelector(p)
para.classList.add("newClass")
