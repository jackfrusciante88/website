// url = new URL(window.location.href);
// var c = url.searchParams.get('c');

export const typeController = {
    
    //set the message in memory
    setMessage(data){
        let message;
        try{
            let url = new URL(window.location.href);
            if(url.searchParams.get('i')){
                message = atob(url.searchParams.get('i'))
            } else throw 'unvalid parameter';
        }
        catch{
            if(localStorage.getItem('homeMessage')){
                message = atob(localStorage.getItem('homeMessage'));
            }else {
                message = 'Welcome dear Visitor'
            }
        }
        finally{
            data.message = message;
            localStorage.setItem('homeMessage', btoa(message) )
        }
    },


}
