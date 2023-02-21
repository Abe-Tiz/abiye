/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


 /******************************MENU SHOW*************************************/
 /* validate if constant exists*/
 if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
 }

  /******************************MENU HIDDEN*************************************/
 /* validate if constant exists*/
 if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
 }


/*=============== VALIDATE FullName ===============*/

function validate(){
    var regName =/^[a-zA-Z\s]{2,50}$/;
    var name = document.getElementById('fullname').value;
    if(regName.test(name)){
      document.getElementById('nm').innerHTML="valid";
      document.getElementById('nm').style.color="green";
      document.getElementById('nm').style.visibility="visible";

        return true;
    }else{
      document.getElementById('nm').innerHTML="*Please, Enter only alphabets!";
      document.getElementById('nm').style.color="red";
      document.getElementById('nm').style.visibility="visible";

        return false;
    }
}

/****       validate email          ***/
function validateEmail(){

     var reg=/[a-zA-Z0-9]+@[gmail|yahoo]+\.+[A-Za-z]/i;

    var input = document.getElementById("emails").value;

    if(!reg.test(input))
        {
            document.getElementById('em').innerHTML="* Email is not valid!!!!";
            document.getElementById('em').style.color="red";
            document.getElementById('em').style.visibility="visible";
            return false;
        }
    else
        {

            document.getElementById('em').innerHTML="valid";
            document.getElementById('em').style.color="green";
            document.getElementById('em').style.visibility="visible";

            return true;
        }
    }

/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


 function skilDescription(){

     var dm=document.getElementById('demo');

     dm.innerHTML="This text indicates <br>the level of this skil.";
     dm.style.color="white";
     dm.style.background="Blue";
     dm.style.fontStyle="bold";
     dm.style.fontSize="1rem";

 }

 function removeDescription(){
     var remov=document.getElementById('demo');
     remov.innerHTML=null;
     remov.style.color=null;
     remov.style.background=null;
     remov.style.fontStyle=null;
     remov.style.fontSize=null;

 }

function switchcase(){
    var user="admin";
    switch (user) {
       case "admin":
           console.log("This is Admin.");
           break;
       case "suadmin":
           console.log("This is Subadmin.");
           break;
        default:
        .console.log("The trial user.");
            break;
    }
}
