let btn = document.getElementById("btn");
 btn.addEventListener("click", function(){
    alert("Alright");
    this.innerText = "hi";
    this.style.color = "black";
 })

 let img = document.getElementById("img");
 img.addEventListener("mouseover", function(){
    this.src = "Project2.png";
 })