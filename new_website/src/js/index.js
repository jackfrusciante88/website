import { elements } from "./views/base";

import '../css/style.scss';

console.log('hello 3 world')
elements.navbar.addEventListener('click', e=>{
    console.log(e.target)
})