const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-model-container')
function showBuyTickets(){
    modal.classList.add('open')
}

function hideBuyTickets(){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets )
}

modalClose.addEventListener('click',hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})

var header = document.getElementById('header');
var mobleMenu = document.getElementById('js-menu-btn');
var headerHight = header.clientHeight;
mobleMenu.onclick = function(){
    var isClose = header.clientHeight === headerHight
    if(isClose){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; ++i){
    var menuItem = menuItems[i];

    menuItem.onclick = function(event){ 
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu){
            header.style.height = null;
        }
        else{
            event.preventDefault();
        }
        
    }
}

/*slide show */
var i = 0;
var images = [];
var slideTime = 3000; 

images[0] = 'assets/img/slider/backgroud1.jpg';
images[1] = 'assets/img/slider/backgroud2.jpg';
images[2] = 'assets/img/slider/backgroud3.jpg';

function changePicture() {
    document.getElementById('slider').style.backgroundImage = "url(" + images[i] + ")";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;


