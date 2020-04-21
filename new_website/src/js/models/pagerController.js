// pager controller
export const pagerController = {

    dataUpdate(state, page){
        state.previousPage = state.currentPage;
        state.currentPage = page;
        
    },
    
    historyUpdate(state){
        history.pushState( state, state.currentPage, null);
    }

}