const buttonp = document.querySelectorAll('.button')[0];
//console.log(buttonp);
const button = buttonp.querySelector('button');
//console.log(button);
const color = document.querySelectorAll('.color')[0];
//console.log(color);
const allcolor = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
//console.log(allcolor);
var body = document.getElementsByTagName('body')[0];
button.addEventListener('click' , () => {
    color.textContent  = '#';
    let c1;
    for( let i = 0 ; i< 6 ; i++){
      c1=    color.textContent += allcolor[getcolor()];
    }
   // console.log('on click is working smoothly');
  //color.textContent = allcolor[getcolor()];
    body.style.backgroundColor = c1;
    getcolor();
});
function getcolor(){
    let m =   Math.floor(Math.random()*allcolor.length);
    return m;
}