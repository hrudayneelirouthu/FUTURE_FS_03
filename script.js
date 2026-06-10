document.addEventListener("DOMContentLoaded",()=>{

console.log(
"Spice Garden Restaurant Website Loaded Successfully"
);

});

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=
"0 10px 30px rgba(0,0,0,0.2)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow=
"0 5px 20px rgba(0,0,0,0.1)";

});

});
