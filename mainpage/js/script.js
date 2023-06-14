
const currentuser = JSON.parse(localStorage.getItem("lastuser"));
if (!currentuser) {
   window.location.href = "../index.html";

}

let reservations = JSON.parse(localStorage.getItem("reservations"));

if (!reservations) {

   // let userreservations = reservations.filter(item => item.user == currentuser.username);
   let userreservations = []; 
   if (userreservations.length == 0) {

      for (let index = 0; index < 10; index++) {
         let newreserv = {
            user: currentuser.username,
            hotelname: `Hotel ${index}`,
            checkin: new Date(`2023-07-2${index}`),
            checkout: new Date(`2023-08-2${index}`),            
            rooms: index + 1,
            adults: 2,
            childs: 2
         }
         userreservations.push(newreserv)
      }

   }
   
   if (userreservations.length > 0) {

      let tableblock = document.querySelector("table");
      console.log(tableblock)
      // tableblock.innerHTML = "";
      tableblock.style.display = "block";
      let titlerow = document.createElement("tr");
      titlerow.innerHTML = "<td>User</td><td>Hotel</td><td>Remaining days</td><td>Check in date</td><td>Check out date</td><td>Rooms</td><td>Adults</td><td>Childs</td><td></td>"
      tableblock.append(titlerow)
      userreservations.forEach((element, index) => {

         let newrow = document.createElement("tr");
         newrow.innerHTML = `<td>${element.user}</td><td>${element.hotelname}</td><td>${diffInDays(new Date(), element.checkin)}</td><td>${element.checkin.toLocaleDateString()}</td> <td>${element.checkout.toLocaleDateString()}</td><td>${element.rooms}</td><td>${element.adults}</td><td>${element.childs}</td><button>DELETE</button>`
         newrow.id = `reservation${index}`
         tableblock.append(newrow);
      });
      console.log(userreservations)

   }
}


function diffInDays(date1, date2) {

   const diffInDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
   return diffInDays

}



let usersection = document.querySelector('.user');
usersection.innerHTML = currentuser.username;
usersection.addEventListener("click", () => {
   localStorage.removeItem("lastuser");
})

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () => {
      faqBox.parentElement.classList.toggle('active');
   }
});

var swiper = new Swiper(".home-slider", {
   loop: true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".gallery-slider", {
   loop: true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
         slidesPerView: 1,
      },
      991: {
         slidesPerView: 2,
      },
   },
});