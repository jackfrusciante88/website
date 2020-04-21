import { elements } from "./views/base";
import { pagerView } from "./views/pager";

import { pagerController } from "./models/pagerController";
import { typeController } from "./models/typeController";

import '../css/style.scss';


//todo for controller

//init function

//listener for event

//ervent handler

//page router(clear block, reload the new one, update the url)



//dynamic text controller( get from url cookie decoder etc)


//contain all websitedata status data
let data= {
    state : {},
};


//click controller
elements.wrapper.addEventListener('click',e=>{
    const element = e.target;
    if (element.matches('.navbar-nav *')) {
        let page = element.closest('li').getAttribute('name');
        router(page);
    } else if(true){
        // inserisci qui altri tipi di click da tracciare
    }
})



function router (page){
    
    pagerController.dataUpdate(data.state, page);
    pagerController.historyUpdate(data.state);
    
    pagerView.clear();
    pagerView.insert(data.state.currentPage);

    
    if (page =='home'){
        //carica scritta typewriting
    }
    
    
    // if home document.querySelector('.wrapper').classList.toggle("bright");
}

const init = ()=>{
    data.state.currentPage = 'home';
    //load view of the home
    pagerView.insert(data.state.currentPage);
    //load the history with current state
    window.history.replaceState(data.state, data.state.currentPage, "");

    // load status home message from param or cookies
    typeController.setMessage2(data);

    console.log(data)
};


//retrive state from history and reload pages
window.onpopstate = (event) =>{
    if (event.state && event.state.state_related !== "info") {
         data.state = event.state;
         pagerView.clear();
         pagerView.insert(data.state.currentPage);
    }
};

init();