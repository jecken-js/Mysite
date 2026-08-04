const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.8s";
    observer.observe(card);
});
const text = "Student • Future Programmer • Gamer";
let i = 0;

function type(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type,70);
    }
}

type();