import { elements } from "./base";
export const  pagerView = {
    home : `<div class="home-block background-image">
                <div class="container typing-container">
                    <h1>Hello Recruiter</h1>
                </div>
            </div>`,
    about : `<div class="container about-block">
                <div class=" title">
                    <h2>04 : About_me</h2>
                </div>
                <div class=" description">
                    <article>
                        <h3>Consectetur adipiscing elit</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices hendrerit nisl.</p>
                        <h3>Ut enim ad minim </h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h3>Maecenas luctus at sem quis varius</h3>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis elit sagittis, at hendrerit lorem venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit nisl.</p>
                    </article>
                    <img src="img/pinguino.png">
                </div>
            </div>`,
    works : `<h2>hello world</h2>`,
    skills : `<h2>hello world</h2>`,
    contact : `<h2>hello world</h2>`,

    clear(){
        elements.central.removeChild(elements.central.firstElementChild)
    },

    insert(section){
        elements.central.insertAdjacentHTML("afterbegin", this[section]);
        elements.wrapper.classList.toggle("bright",section!='home')
    }

}

