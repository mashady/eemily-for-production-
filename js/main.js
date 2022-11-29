
// Select HTML Element Selector
let about = document.getElementById("about");// give him a name

window.onscroll = function () {

    
    // when make a scroll do that .. but by this rules. 
    // rules:
    let aboutOffsetTop = about.offsetTop;

    let aboutOuterHeight = about.offsetHeight;

    let windowsHeight = this.innerHeight;

    //let windowsScrollTop = this.pageYOffset;
    let windowsScrollTop = document.body.scrollTop;
    //document.documentElement.scrollTop
    // what we will do:
    if ( windowsScrollTop > ( aboutOffsetTop + aboutOuterHeight - windowsHeight ) ) {

        let allAbout = document.getElementById("counter");

        allAbout.innerHTML = 'red';


    };

};

//*****************************
//**the header section codes*** 
//************************ *****

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() { 
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "5px 0px 5px 0px";
    document.getElementById("nav").style.background = "rgb(22 19 66)";
    document.getElementById("logo").style.fontSize = "1.5rem";
    document.getElementById("logo").style.marginTop = ".5rem";
  } else {
    document.getElementById("nav").style.padding = "30px 20px 30px 20px";
    document.getElementById("nav").style.background = "none";
    document.getElementById("logo").style.fontSize = "2rem";
  }
}

var x = document.getElementById('txt');
var txtArray = ['SERVICES', 'SOLUTIONS', 'TEMPLATES'];
setInterval(() => {

  // get random number 
  let randomNumber = Math.floor(Math.random() * txtArray.length);

  // change background image url
  x.innerHTML = txtArray[randomNumber];

}, 3000);

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("section");

let lastId; 
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    //let section = document.querySelector(link.hash);
    let section = document.querySelector(".about");

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      //link.classList.add("active");
      //let mainNavLinks = document.querySelectorAll("nav ul li a");
      document.getElementById('about-red').style.color = '#ffa62b';



        function counter(id, start, end, duration) {
          let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
            clearInterval(timer);
          }
          }, step);
        }
        counter("count1", 0, 250, 3000);
        counter("count2", 0, 250, 3000);
        counter("count3", 0, 250, 3000);
      



    } else {
      document.getElementById('about-red').style.color = '#FFF';
    }
  });
});

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  let headerSection = document.querySelector("header");
  if (
    headerSection.offsetTop <= fromTop &&
    headerSection.offsetTop + headerSection.offsetHeight > fromTop
  ) {

    document.getElementById('headerLink').style.color = '#ffa62b';

  } else {

    document.getElementById('headerLink').style.color = '#FFF';
    document.getElementById('headerLink').classList.remove("active");
  }
  });

  // animation with scroll not now
  /*
  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    let troy = document.querySelector("#troy");
    let intro = document.querySelector(".intro-container");
    let introImage = document.querySelector(".intro .img-fluid");
    if (
      troy.offsetTop <= fromTop &&
      troy.offsetTop + troy.offsetHeight > fromTop
    ) {
      troy.innerHTML = 'hi iam troy';
      intro.style.display = 'block';
      introImage.style.display = 'block'
      intro.classList.add("animate__backInLeft");
      introImage.classList.add("animate__backInRight");
    } else {
      troy.innerHTML = 'yes iam okay';
    }

  });
*/

  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    let headerSection = document.querySelector(".intro");
    if (
      headerSection.offsetTop <= fromTop &&
      headerSection.offsetTop + headerSection.offsetHeight > fromTop
    ) {
  
      document.getElementById('introLink').style.color = '#ffa62b';
      let introContainer = document.querySelector(".intro-container");
      //introContainer.style.display = 'block';
      //introContainer.classList.add("animate__backInRight");  
    } else {
  
      document.getElementById('introLink').style.color = '#FFF';
  
    }
  });

  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    let headerSection = document.querySelector(".services");
    if (
      headerSection.offsetTop <= fromTop &&
      headerSection.offsetTop + headerSection.offsetHeight > fromTop
    ) {
  
      document.getElementById('servicesLink').style.color = '#ffa62b';
  
    } else {
  
      document.getElementById('servicesLink').style.color = '#FFF';
  
    }
  });

    window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    let headerSection = document.querySelector(".call-me");
    if (
      headerSection.offsetTop <= fromTop &&
      headerSection.offsetTop + headerSection.offsetHeight > fromTop
    ) {
  
      document.getElementById('callMeLink').style.color = '#ffa62b';
  
    } else {
  
      document.getElementById('callMeLink').style.color = '#FFF';
  
    }
  });

  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    let headerSection = document.querySelector(".projects");
    if (
      headerSection.offsetTop <= fromTop &&
      headerSection.offsetTop + headerSection.offsetHeight > fromTop
    ) {
  
      document.getElementById('projectsLink').style.color = '#ffa62b';
  
    } else {
  
      document.getElementById('projectsLink').style.color = '#FFF';
  
    }
  });

  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    let headerSection = document.querySelector(".contact");
    if (
      headerSection.offsetTop <= fromTop &&
      headerSection.offsetTop + headerSection.offsetHeight > fromTop
    ) {
  
      document.getElementById('contactLink').style.color = '#ffa62b';
  
    } else {
  
      document.getElementById('contactLink').style.color = '#FFF';
  
    }
  });
//*********************** */
//**services section */
//********************* */


// acc
var accora1 = document.getElementById('hCol-1'); 
accora1.onclick = function () {

    var colCon = document.getElementById('span-acc-1');
    var colConn = document.getElementById('h5-acc-1');
    
    var colOne = document.getElementById('collapseOne');
    var colTwo = document.getElementById('collapseTwo');
    var colThree = document.getElementById('collapseThree');

    colCon.classList.toggle('active-acc');
    colConn.classList.toggle('active-acc');
/*
    if (colTwo.style.display === 'block' || colThree.style.display === 'block') {
        colTwo.style.display = 'none';
        colThree.style.display = 'none';        
    }
*/
}

var accora2 = document.getElementById('hCol-2'); 
accora2.onclick = function () {

    var colCon = document.getElementById('span-acc-2');
    var colConn = document.getElementById('h5-acc-2');
    
    var colOne = document.getElementById('collapseOne');
    var colTwo = document.getElementById('collapseTwo');
    var colThree = document.getElementById('collapseThree');

    colCon.classList.toggle('active-acc');
    colConn.classList.toggle('active-acc');
/*
    if ((colOne.style.display === 'block' || colThree.style.display === 'block') {
        colOne.style.display = 'none';
        colThree.style.display = 'none';
    }
*/
}

var accora3 = document.getElementById('hCol-3'); 
accora3.onclick = function () {

    var colCon = document.getElementById('span-acc-3');
    var colConn = document.getElementById('h5-acc-3');
    
    var colOne = document.getElementById('collapseOne');
    var colTwo = document.getElementById('collapseTwo');
    var colThree = document.getElementById('collapseThree');

    colCon.classList.toggle('active-acc');
    colConn.classList.toggle('active-acc');
/*
    if (colOne.style.display === 'block' || colTwo.style.display === 'block') {
        colOne.style.display = 'none';
        colTwo.style.display = 'none';
    }
    */
}
























/* Card Slider - Swiper */

	var cardSlider = new Swiper('.swiper-container', {
		/*autoplay: {
            delay: 5000,
            disableOnInteraction: false
		},*/
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });
