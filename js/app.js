/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Engineer', 'Backend Engineer', 'FullStack Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




























// const body = document.querySelector('body');

// const header = document.createElement('header');
// header.setAttribute('class', 'header');

// const logoAnchor = document.createElement('a');
// logoAnchor.setAttribute('href', '#contact');
// logoAnchor.textContent = 'Portfolio';
// header.append(logoAnchor);

// const navButton = document.createElement('i');
// navButton.setAttribute('class', 'bx bx-menu');
// navButton.setAttribute('id', 'menu-icon');
// header.append(navButton);

// const navbar = document.createElement('nav');
// navbar.setAttribute('class', 'navbar');

// const homeAnchor = document.createElement('a');
// homeAnchor.setAttribute('class', '#home');
// homeAnchor.setAttribute('class', 'active');
// homeAnchor.textContent = 'Home';
// navbar.append(homeAnchor);

// const aboutAnchor = document.createElement('a');
// aboutAnchor.setAttribute('class', '#about');
// aboutAnchor.textContent = 'About';
// navbar.append(aboutAnchor);

// const servicesAnchor = document.createElement('a');
// servicesAnchor.setAttribute('class', '#services');
// servicesAnchor.textContent = 'Services';
// navbar.append(servicesAnchor);

// const portfolioAnchor = document.createElement('a');
// portfolioAnchor.setAttribute('class', '#portfolio');
// portfolioAnchor.textContent = 'Portfolio';
// navbar.append(portfolioAnchor);

// const contactAnchor = document.createElement('a');
// contactAnchor.setAttribute('class', '#contact');
// contactAnchor.textContent = 'Contact';
// navbar.append(contactAnchor);
// header.append(navbar);
// body.append(header);
// console.log(header);













// const section = document.createElement('section');
// section.setAttribute('class', 'home');
// section.setAttribute('id', 'home');

// const homeDiv = document.createElement('div');
// homeDiv.setAttribute('class', 'home-content');
// const helloH3 = document.createElement('h3');
// helloH3.textContent = 'Hello Its Me';
// homeDiv.append(helloH3);

// const nameH1 = document.createElement('h3');
// nameH1.textContent = 'DaRon Benson';
// homeDiv.append(nameH1);

// const jobH3 = document.createElement('h3');
// jobH3.textContent = 'And Im a frontend engineer';
// homeDiv.append(jobH3);

// const pTag = document.createElement('p');
// pTag.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vel consequuntur similique est laborenulla dolorum sed?';
// homeDiv.append(pTag);

// const mediaDiv = document.createElement('div');
// mediaDiv.setAttribute('class', 'social-media');
// homeDiv.append(mediaDiv);

// const fbAnchor = document.createElement('a');
// fbAnchor.setAttribute('href', '#');
// const fbButton = document.createElement('i');
// fbButton.setAttribute('class', 'bx bxl-facebook');
// mediaDiv.append(fbAnchor);


// const twitterAnchor = document.createElement('a');
// twitterAnchor.setAttribute('href', '#');
// const twitterButton = document.createElement('i');
// twitterButton.setAttribute('class', 'bx bxl-twitter');
// mediaDiv.append(twitterAnchor);

// const igAnchor = document.createElement('a');
// igAnchor.setAttribute('href', '#');
// const igButton = document.createElement('i');
// igButton.setAttribute('class', 'bx bxl-instagram');
// mediaDiv.append(igAnchor);

// const linkedInAnchor = document.createElement('a');
// linkedInAnchor.setAttribute('href', '#');
// const linkedInButton = document.createElement('i');
// linkedInButton.setAttribute('class', 'bx bxl-linkedin');
// mediaDiv.append(linkedInAnchor);

// const cvAnchor = document.createElement('a');
// cvAnchor.setAttribute('href', '#');
// cvAnchor.setAttribute('class', 'btn');
// cvAnchor.textContent = 'Download CV';
// homeDiv.append(cvAnchor);

// const imgDiv = document.createElement('div');
// imgDiv.setAttribute('class', 'home-img');

// const personaPicture = document.createElement('img');
// personaPicture.setAttribute('src', './images/personal-portfolio-pic.png');
// personaPicture.setAttribute('alt', 'Personal Porfolio');
// imgDiv.append(personaPicture);
// section.append(homeDiv);
// section.append(imgDiv);
// body.append(section);

// console.log(body);

