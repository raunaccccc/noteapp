
let sun = document.getElementById('sun');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mount = document.getElementById('mount');
let sea = document.getElementById('sea');
let img = document.querySelectorAll('.src');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    sun.style.top = value * -0.3 + '% ';
    mount.style.top = value * -0.05 + '% ';
    bird1.style.top = value * -0.15 + '% ';
    bird1.style.left = value * 0.01 + '% ';
    bird2.style.top = value * -0.15 + '% ';
    bird2.style.right = value * 0.05 + '% ';
    text.style.top = value * -0.22 + '% ';
    // btn.style.top= value * -0.22 + '% ';


    img.forEach(ele => {
        let speed = ele.dataset.speed;
        console.log(speed)
        ele.style.transform = `translateY(${value * speed}px)`
    })
})


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}