import { elements } from "./base";


export const  pagerView = {
    home : `<div class="home-block background-image">
                <div class="container typing-container">
                    <h1 id="typeMessage"></h1>
                </div>
            </div>`,
    about : `<div class="container about-block">
                <div class=" title">
                    <h2>About_me</h2>
                </div>
                <div class=" description">
                    <article>
                        <h3>What I Know</h3>
                        <p>Manage SQL and NOSQL database (MySQL MongoDB) 
                        <br>JavaScript ES Next HTML CSS3 PHP React </p>
                        <h3>What I'm working on</h3>
                        <p>ReactNative and Learning NODE.JS more in general Backend development</p>
                        <h3>What I will Achive</h3>
                        <p>be proficient in Python and big Data manipulation</p>
                    </article>
                    <!--
                    <img src="img/me.jpg">
                    -->
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
        elements.wrapper.classList.toggle("bright",section!='home');

        
    }

}

