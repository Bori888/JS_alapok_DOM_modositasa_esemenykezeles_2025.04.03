window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    esemenyformazas();
    esemenykezeleles1();
    esemenykezeleles2();
    esemenykezeleles3();
    esemeykezeles4();
   
});

function elemekElerese1() {
    const ELEM1=document.querySelectorAll("section h2")[0]
    ELEM1.innerHTML ="Kiirt szöveg"
    console.log(ELEM1)
   
}
function elemekElerese2() {
    const ELEM2=document.querySelector("#ide")
    ELEM2.innerHTML ="<p>Jó reggelt!<p/>"
}

function elemekElerese3() {
    const ELEM3=document.querySelectorAll(".ide")[0]
    ELEM3.innerHTML="<p>Jó reggelt!<p/>"
}

function elemekElerese4() {
    const LISTAELEM=document.querySelector(".lista")
    LISTAELEM.innerHTML +="<ol>"
    for (let index = 0; index < 5; index++) {
        let veletlenszam =Math.floor(Math.random()*41+10)
        LISTAELEM.innerHTML +=`<li>${veletlenszam}</li>`
    }
    LISTAELEM.innerHTML +="</ol>" 
}

 function esemenyformazas(){
    const LISTAELEM=document.querySelector(".lista")
    LISTAELEM.classList.add("formazott")
}

function esemenykezeleles1(){
    const LISTAELEM=document.querySelector(".lista")
    const FELADATELEM=document.querySelector(".kattintasutan")
    LISTAELEM.addEventListener("click", ()=>{
            FELADATELEM.innerHTML =LISTAELEM
    })

}

function esemenykezeleles2(){
    const GOMBELEM = document.querySelectorAll(".feladat")[0]
    GOMBELEM.innerHTML = "<button id='feladat button'>OK</button>"
    const OKGOMB = document.querySelectorAll(".feladat")[0]
    OKGOMB.addEventListener("click",()=>{
        GOMBELEM.innerHTML +="<img src='kep.webp' alt='kep'></img>"
    })
    
}
function esemenykezeleles3(){
    const GOMBELEM = document.querySelectorAll(".feladat")[0]
    GOMBELEM.innerHTML = "<button id='feladat button'>OK</button>"
    const OKGOMB = document.querySelectorAll(".feladat")[0]
    OKGOMB.addEventListener("click",()=>{
        GOMBELEM.innerHTML +="<img  id ='kep' src='kep.webp' alt='kep'></img>"
        const KEP_ELEM = document.querySelector("#kep");
        KEP_ELEM.addEventListener("mouseover",  ()=> {
            GOMBELEM.innerHTML ="<img  id ='kepKicsi' src='kepKicsi.jpg' alt='kepKicsi'></img>"
          
        });
      });
}
function esemeykezeles4() {
    const TAROLOELEM = document.querySelectorAll(".tarolo > .elem")//listát add vissz le tudom kérdezi a hosszát
    const MEGJELENITO_ELEM = document.querySelector(".megjelenito")
    let kiv_Szam;
    for (let i = 0; i < TAROLOELEM.length; i++) {
        TAROLOELEM[i].addEventListener("click",()=>{
            kiv_Szam =i+1
            MEGJELENITO_ELEM.innerHTML=`${kiv_Szam}`
        })
        
        
    }
    
}
