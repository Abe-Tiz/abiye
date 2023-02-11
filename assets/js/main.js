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


/*=============== REMOVE MENU MOBILE ===============*/

const navLink=document.querySelectorAll('.nav__link')

const linkAction= () => {
    const navMenu=document.getElementById('nav__menu')

    //when we click on each nav__link,we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))


/*=============== VALIDATE FullName ===============*/

function validate(){
    var regName =/^[a-zA-Z]{2,16}$/;
    var name = document.getElementById('fullname').value;
    if(regName.test(name)){
      document.getElementById('nm').innerHTML="valid";
      document.getElementById('nm').style.color="green";
      document.getElementById('nm').style.visibility="visible";

        return true;
    }else{
      document.getElementById('nm').innerHTML="*invalid";
      document.getElementById('nm').style.color="red";
      document.getElementById('nm').style.visibility="visible";
        return false;
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


/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
      contactName=document.getElementById('contact-name'),
      contactEmail=document.getElementById('contact-email'),
      contactProject=document.getElementById('contact-project'),
      contactMessage=document.getElementById('contact-message')

const sendEmail =(e) =>{
     e.preventDefault()

     //check if the field has a value
     if(contactName.value === '' || contactEmail.value === '' || contactProject.value=== '' ){
           //Add or Remove color
           contactMessage.classList.remove('color-blue')
           contactMessage.classList.add('color-red')

           //show message
           contactMessage.textContent = 'Writr all the input feilds'

     }else{
      //serviceId - templateID - #form - publickey
      emailjs.sendForm('service_3wivq0n','template_4grnx28','#contact-form','qOflpMzk_ImuzmC8e')
        .then(() =>{
          //show message and color
          contactMessage.classList.add('color-blue')
          contactMessage.textContent='Message  sent'

          //remove message after 5 seconds
          setTimeout(() =>{
            contactMessage.textContent=''
          },5000)
        },(error)=>{
          alert('oops! SOMETHING HAS FAILED...')
        })
      // To clear the input feild
      contactName.value=''
      contactEmail.value=''
      contactProject.value=''

      }
 }
contact-form.addEventListener('submit', sendEmail)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.getElementById('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

  sections.forEach(current =>{
     const sectionHeight = current.offsetHeight,
           sectionTop = current.offsetTop - 58,
           sectionId = current.getAttribute('id'),
           sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


           if(scrollY > sectionTop && scrollY <= sectionTop + sectionsHeight){
            sectionsClass.classList.add('active-link')
           }else{
            sectionsClass.classList.remove('active-link')
           }
  })
}
window.addEventListener('scroll',scrollActive)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const ScrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 500 ?  ScrollUp.classList.add('show-scroll')
						:  ScrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is  greater than 50 viewport height, and the scrol-header class
    this.scrollY >=50 ? header.classList.add('bg-header')
                    :header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  //reset:true /*Animations repeate*/
})
sr.reveal('.home__data, .projects__container')
sr.reveal('.home__info div',{ delay:600,origin:'bottom',interval:100})
sr.reveal('.skills__content:nth-child(1)',{ origin:'left' })
sr.reveal('.skills__content:nth-child(2)',{ origin:'right' })
sr.reveal('.qualification__content',{ interval:100})

// form validation

var form=document.getElementById('form');

var error=[];
form.addEventListener('submit',function(e){
  e.preventDefault() //prevents auto submition of the form
   var username= document.getElementById('contact-name');
   var emails=document.getElementById('contact-email');

   if(username.value==""){
    error.push("please enter the user name");
   }
   if(emails.value==""){
    error.push("please enter email");
   }

   var message= document.getElementById("message");

   message.innerText = error;
})
