import { elements } from "./views/base";
import { pages } from "./views/pages";

import '../css/style.scss';


//controller
elements.menuItem.forEach(el=>{
    el.addEventListener('click', router)
})

function router (event){
    clearCentral();
    insertCentral(event.target.name);

    // if home document.querySelector('.wrapper').classList.toggle("bright");
}

function clearCentral(){
    elements.central.removeChild(elements.central.firstElementChild)
}

function insertCentral(section){
    elements.central.insertAdjacentHTML("afterbegin", pages[section])
}