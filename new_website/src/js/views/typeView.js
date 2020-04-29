export const typeView ={

    render(selector, text, speed=75){

        let count = 0;
        let length = text.length;

        (function setText () {
            setTimeout(()=>{
                selector.textContent = selector.textContent + text.charAt(count);
                count++;
                if (count <= length) {
                  setText();
                }
            },speed)
        })()
    },

    renderBar(selector, text, speed=80){
        let count = 0;
        let length = text.length*2;
        selector.textContent= '|';
        function setText () {
            setTimeout(()=>{
                if (count%2 == 0){
                    selector.textContent = selector.textContent.slice(0, -1);
                    selector.textContent = selector.textContent + text.charAt(count/2);            
                }
                else{
                    selector.textContent = selector.textContent +'|'
                }
                count++;
                if (count <= length) {
                    setText();
                }
            },speed)
        }
        setTimeout(setText,speed)
    }
}


/* example code 

var typeWriter = document.getElementById('type-writer');
var dataText = 'questo e il mio test ';
var speed = 175

function wrapper(typeWriter, dataText, speed=75){

  var count = 0;
  var dataTextLength = dataText.length;

  var setText = function () {
    setTimeout(function () {
      typeWriter.textContent = typeWriter.textContent + dataText.charAt(count);
      count++;
      if (count <= dataTextLength) {
        setText();
      }
    }, speed);
  }
  setText()
  }


wrapper(typeWriter, dataText)

*/