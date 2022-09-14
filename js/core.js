(function () {
    const burger = document.querySelector('.icon-active-deactive');
    const navactive = document.querySelector('.nav-little-tool');
    const close_tab = document.querySelector('.icon-close-page')
    const close_block_nav = document.querySelector('.ul-block-for0lowlittle')
    const close_tab_anim2 = document.querySelector('.serginltss');
    const close_tab_anim = document.querySelector('.nav_activee');


    burger.addEventListener('click', () => {
        setTimeout(() => idnavlittle1.classList.remove('serginltss'), 1);
        setTimeout(() => idnavlittle2.classList.remove('serginltss1'), 1);
        setTimeout(() => burger.classList.toggle('burger_active'), 1.5);
        setTimeout(() => navactive.classList.toggle('nav_activee'), 1.5);
        
        



    });

    close_tab.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        navactive.classList.toggle('serginltss');
        close_block_nav.classList.toggle('serginltss1');
        setTimeout(() => idnavlittle1.classList.remove('nav_activee'), 900);
        setTimeout(() => idnavlittle2.classList.remove('serginltss1'), 900);    
    });


}());


// Variables
const el = document.querySelector(".marquee");

// Variables ~ Widths
let elWidth = el.offsetWidth;
let windowWidth = window.innerWidth;

// Variables ~ Mouse
let mouseX = 0;
let prevMouseX = 0;

// Target: value we want to animate to
let skewTarget = 0;
let translateTarget = 0;

// WithEasing: value we use to animate
let skewWithEasing = 0;
let translateWithEasing = 0;

// EasingFactor: determines how quick the animation/interpolation goes
let skewEasingFactor = 0.1;
let translateEasingFactor = 0.05;

// Events
window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleWindowResize);

// Functions
function handleMouseMove(e) {
  mouseX = e.pageX;
}

function handleWindowResize(e) {
  elWidth = el.offsetWidth;
  windowWidth = window.innerWidth;
}

function lerp(start, end, factor) {
  return (1 - factor) * start + factor * end;
}

function animateMe() {
  // Get difference between current and previous mouse position
  skewTarget = mouseX - prevMouseX;
  prevMouseX = mouseX;

  // Calc how much we need to translate our el
  translateTarget = (elWidth - windowWidth) / windowWidth * mouseX * -1;

  // Ease between start and target values (skew)
  skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);

  // Limit our skew to a range of 75 degrees so it doesn't "over-skew"
  skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75);

  // Ease between start and target values (translate)
  translateWithEasing = lerp(
  translateWithEasing,
  translateTarget,
  translateEasingFactor);


  el.style.transform = `
    translateX(${translateWithEasing}px)
    skewX(${skewWithEasing}deg)
  `;

  // RAF
  window.requestAnimationFrame(animateMe);
}

window.requestAnimationFrame(animateMe);

// Hoverbtn pg3

function hoveron_btn() {
    setTimeout(() =>  wrapper_card1.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card1.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial.classList.remove('media_disable'), 30);
}


function hoveron_out() {
    
    setTimeout(() =>  wrapper_card1.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card1.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial.classList.add('media_disable'), 30);
}


function hoveron_btn2() {
    setTimeout(() =>  wrapper_card2.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card2.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial2.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial2.classList.remove('media_disable'), 30);
}

function hoveron_out2() {
    
    setTimeout(() =>  wrapper_card2.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card2.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial2.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial2.classList.add('media_disable'), 30);
}

function hoveron_btn3() {
    setTimeout(() =>  wrapper_card3.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card3.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial3.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial3.classList.remove('media_disable'), 30);
}

function hoveron_out3() {
    
    setTimeout(() =>  wrapper_card3.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card3.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial3.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial3.classList.add('media_disable'), 30);
}

function hoveron_btn4() {
    setTimeout(() =>  wrapper_card4.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card4.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial4.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial4.classList.remove('media_disable'), 30);
}

function hoveron_out4() {
    
    setTimeout(() =>  wrapper_card4.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card4.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial4.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial4.classList.add('media_disable'), 30);
}

function hoveron_btn5() {
    setTimeout(() =>  wrapper_card5.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card5.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial5.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial5.classList.remove('media_disable'), 30);
}

function hoveron_out5() {
    
    setTimeout(() =>  wrapper_card5.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card5.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial5.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial5.classList.add('media_disable'), 30);
}

function hoveron_btn6() {
    setTimeout(() =>  wrapper_card6.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card6.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial6.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial6.classList.remove('media_disable'), 30);
}

function hoveron_out6() {
    
    setTimeout(() =>  wrapper_card6.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card6.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial6.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial6.classList.add('media_disable'), 30);
}

function hoveron_btn7() {
    setTimeout(() =>  wrapper_card7.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card7.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial7.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial7.classList.remove('media_disable'), 30);
}

function hoveron_out7() {
    
    setTimeout(() =>  wrapper_card7.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card7.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial7.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial7.classList.add('media_disable'), 30);
}

function hoveron_btn8() {
    setTimeout(() =>  wrapper_card8.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card8.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial8.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial8.classList.remove('media_disable'), 30);
}

function hoveron_out8() {
    
    setTimeout(() =>  wrapper_card8.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card8.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial8.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial8.classList.add('media_disable'), 30);
}

function hoveron_btn9() {
    setTimeout(() =>  wrapper_card9.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card9.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial9.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial9.classList.remove('media_disable'), 30);
}

function hoveron_out9() {
    
    setTimeout(() =>  wrapper_card9.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card9.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial9.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial9.classList.add('media_disable'), 30);
}

function hoveron_btn10() {
    setTimeout(() =>  wrapper_card10.classList.remove('trantision-iner'), 30);
    setTimeout(() =>  wrapper_card10.classList.add('trantision'), 40);
    setTimeout(() =>  mediasocial10.classList.add('media_active'), 40);
    setTimeout(() =>  mediasocial10.classList.remove('media_disable'), 30);
}

function hoveron_out10() {
    
    setTimeout(() =>  wrapper_card10.classList.remove('trantision'), 40);
    setTimeout(() =>  wrapper_card10.classList.add('trantision-iner'), 30);
    setTimeout(() =>  mediasocial10.classList.remove('media_active'), 40);
    setTimeout(() =>  mediasocial10.classList.add('media_disable'), 30);
}


// Hoverbtn over pg3


//Плавний скрол
// Put all links in a variable
const links = document.querySelectorAll('.js-scroll');

// Add event listener to all links
links.forEach(function (elem) {
    elem.addEventListener('click', smoothScroll);
});

// Magic function to scroll smooth!
function smoothScroll(e) {
    // Prevent default anchor behaviour
    e.preventDefault();

    // Get clicked links href attribute
    const link = this.getAttribute("href");

    // Get the targets position
    const offsetTop = document.querySelector(link).offsetTop;

    // Finally scroll to target
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

