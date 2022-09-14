const close_tab = document.querySelector('.icon-close-page')

burger.addEventListener('click', () => idnavlittle1.classList.contains('navactive') ? closeNav() : openNav());
function openNav () {
    burger.classList.toggle('burger_active');
    idnavlittle1.classList.toggle('nav_activee');
}

close_tab.addEventListener('click', () => idnavlittle1.classList.contains('navactive') ? closeNav() : openNav1());
function openNav () {
    burger.classList.toggle('burger_active');
    idnavlittle1.classList.toggle('nav_activee');
    
}

function closeNav () {
    burger.classList.toggle('serginltss');
    idnavlittle1.classList.toggle('serginltss1');
}



