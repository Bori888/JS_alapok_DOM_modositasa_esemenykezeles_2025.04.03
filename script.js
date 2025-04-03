window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
   
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("section h2")[0]
    ELEM.innerHTML ="Kiirt szöveg"
    console.log(ELEM)
   
}
function elemekElerese2() {
    const ELEM2=document.querySelector("#ide")
    ELEM2.innerHTML ="<p>Jó reggelt!<p/>"
   
    
}
function elemekElerese3() {
    const ELEM=document.querySelectorAll(".ide")[0]
    ELEM.innerHTML="<p>Jó reggelt!<p/>"
    
}
function elemekElerese4() {
    const ELEM2=document.querySelector(".lista")
    ELEM2.innerHTML +="<ol>"
    for (let index = 0; index < 5; index++) {
        let veletlenszam =Math.floor(Math.random()*41+10)
        ELEM2.innerHTML +=`<li>${veletlenszam}</li>`
    }
    ELEM2.innerHTML +="</ol>"
 
    
}