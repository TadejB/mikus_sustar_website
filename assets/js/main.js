var showInfoLara = document.querySelector('#show-info-lara');
var infoLara = document.querySelector('#info-lara');
var showInfoSabina = document.querySelector('#show-info-sabina');
var infoSabina = document.querySelector('#info-sabina');
var clientHeight = window.innerHeight;
var fixedNavbar = document.querySelector('.wrapper-navbar-logo-holder-sm');
var sectionWelcome = document.querySelector('#section-welcome');
var downButton = document.querySelector('#down-button');
var body = document.querySelector('body');
var html = document.querySelector('html');
var changeOverflow = document.querySelectorAll('.change-overflow');
var sectionContact = document.querySelector('#section-contact');
var fakeNavbar = document.querySelector('.fake-navbar');

var url = window.location.href;
console.log(url);
// solution to keep changed style on refresh
if (url !== 'http://127.0.0.1:8080/') {
    sectionWelcome.style.display = 'none';
    body.style.overflow = 'scroll';
    body.style.height = '100%';
    html.style.overflow = 'hidden';
    html.style.height = '100%';
    fakeNavbar.style.height =  fixedNavbar.offsetHeight + 'px';
    fixedNavbar.style.width = fakeNavbar.offsetWidth + 'px';
    fakeNavbar.style.opacity = '0'; 
    fixedNavbar.style.position = 'fixed';
    fixedNavbar.style.top = '0';
    fixedNavbar.style.left = '0';
}

var affectedElement = [];

changeOverflow.forEach(function(element) {
    affectedElement.push(element);
});
affectedElement.push(downButton);

affectedElement.forEach(function(element) {
    element.addEventListener('click', function() {
        sectionWelcome.style.display = 'none';
        body.style.overflow = 'scroll';
        body.style.height = '100%';
        html.style.overflow = 'hidden';
        html.style.height = '100%';
        fakeNavbar.style.height =  fixedNavbar.offsetHeight + 'px';
        fixedNavbar.style.width = fakeNavbar.offsetWidth + 'px';
        fakeNavbar.style.opacity = '0'; 
        fixedNavbar.style.position = 'fixed';
        fixedNavbar.style.top = '0';
        fixedNavbar.style.left = '0';
    });
});

var fixedNavbarPosition = fixedNavbar.getBoundingClientRect().top;
console.log(fixedNavbarPosition);

/* window.addEventListener('scroll', function () {
    var x = sectionWelcome.scrollTop;

    console.log(x);
}); */


showInfoLara.addEventListener('click', function() {
    
    if (!showInfoLara.classList.contains('open')) {
        infoLara.style.display = 'block';
        showInfoLara.innerHTML = '<i class="fas fa-minus-circle heading-14 ml-5 animated rotateIn"></i>';
        sectionContact.style.height = clientHeight + 173 + 'px';
        infoLara.classList.remove('fadeOut');
        infoLara.classList.add('animated', 'fadeIn');
        showInfoLara.classList.add('open');
    } else  {
        showInfoLara.innerHTML = '<i class="fas fa-plus-circle heading-14 ml-5 animated rotateIn"></i>';
        sectionContact.style.height = clientHeight + 'px';
        infoLara.classList.add('animated', 'fadeOut');
        showInfoLara.classList.remove('open');
        infoLara.classList.remove('fadeIn');
        infoLara.style.display = 'none';
    }
});

showInfoSabina.addEventListener('click', function() {
    
    if (!showInfoSabina.classList.contains('open')) {
        infoSabina.style.display = 'block';
        showInfoSabina.innerHTML = '<i class="fas fa-minus-circle heading-14 ml-5 animated rotateIn"></i>';
        var sectionContact = document.querySelector('#section-contact');
        sectionContact.style.height = clientHeight + 173 + 'px';
        infoSabina.classList.remove('fadeOut');
        infoSabina.classList.add('animated', 'fadeIn');
        showInfoSabina.classList.add('open');
    } else  {
        showInfoSabina.innerHTML = '<i class="fas fa-plus-circle heading-14 ml-5 animated rotateIn"></i>';
        var sectionContact = document.querySelector('#section-contact');
        sectionContact.style.height = clientHeight + 'px';
        infoSabina.classList.add('animated', 'fadeOut');
        showInfoSabina.classList.remove('open');
        infoSabina.classList.remove('fadeIn');
        infoSabina.style.display = 'none';
    }
});

