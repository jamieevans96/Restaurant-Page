import homeTab from './home'
import menuTab from './menu'
import contactTab from './contact'

document.querySelector("#mainTitle").addEventListener('click', homeTab);
document.querySelector("#homeClick").addEventListener('click', homeTab);
document.querySelector("#menuClick").addEventListener('click', menuTab);
document.querySelector("#contactClick").addEventListener('click', contactTab);