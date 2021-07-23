/* ========= Show menu ==========*/
const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu("nav-toggle","nav-menu")

/*======= ACTIVE AND REMOVE MENU ========== */
const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active links //
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',linkAction))

/*============== skills animation ============= */
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleskills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleskills)
})

/*======== contact form =========== */

            window.addEventListener("DOMContentLoaded", function () {
              
                var form = document.getElementById("my-form");
                var status = document.getElementById("status");
              
                // Success and Error functions for after the form is submitted
              
                function success() {
                  form.reset();
                  status.classList.add("success");
                  status.innerHTML = "Thanks!";
                }
              
                function error() {
                  status.classList.add("error");
                  status.innerHTML = "Oops! There was a problem.";
                }
              
                // handle the form submission event
              
                form.addEventListener("submit", function (ev) {
                  ev.preventDefault();
                  var data = new FormData(form);
                  ajax(form.method, form.action, data, success, error);
                });
              });
              
              // helper function for sending an AJAX request
              
              function ajax(method, url, data, success, error) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onreadystatechange = function () {
                  if (xhr.readyState !== XMLHttpRequest.DONE) return;
                  if (xhr.status === 200) {
                    success(xhr.response, xhr.responseType);
                  } else {
                    error(xhr.status, xhr.response, xhr.responseType);
                  }
                };
                xhr.send(data);
              }
              
  // DARK MODE //
  
      var mode = document.getElementById("mode");

      mode.onclick = function(){
          document.body.classList.toggle("dark-theme");
          if(document.body.classList.contains("dark-theme")){
              mode.scr = "assets/img/sun.png";
          }else{
            mode.scr = "assets/img/moon.png"
          }
          
      }
  