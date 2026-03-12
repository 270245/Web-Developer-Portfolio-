const welcomeScreen=document.getElementById('welcomeScreen');
const mainContent=document.getElementById('mainContent');

function enterPortfolio(){welcomeScreen.style.display='none';mainContent.style.display='block';}
welcomeScreen.addEventListener('click',enterPortfolio);
setTimeout(enterPortfolio,3000);

// Fade-in sections on scroll
const sections=document.querySelectorAll('section');
window.addEventListener('scroll',()=>{const triggerBottom=window.innerHeight*0.85;sections.forEach(section=>{if(section.getBoundingClientRect().top<triggerBottom)section.classList.add('visible');});});