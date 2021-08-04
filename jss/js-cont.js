
var  element=document.querySelectorAll('.partie');

// alert();
var haut= window.innerHeight;
onscroll = function (){

    var Position = document.documentElement.scrollTop;
     
    if( element[2].offsetTop <= Position + haut)
       element[2].classList.add('anim');
    else
      element[2].classList.remove('anim');

    if( element[3].offsetTop <= Position + haut)
      element[3].classList.add('anim2');
    else
     element[3].classList.remove('anim2');

    if( element[4].offsetTop <= Position + haut)
      element[4].classList.add('anim');
    else
      element[4].classList.remove('anim');

    if( element[5].offsetTop <= Position + haut)
      element[5].classList.add('anim2');
   else
     element[5].classList.remove('anim2');


};