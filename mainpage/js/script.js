
const currentuser = JSON.parse(localStorage.getItem("lastuser"));
if (!currentuser) {
   window.location.href = "../index.html";

}

let reservations = JSON.parse(localStorage.getItem("reservations"));

if (!reservations) {

   reservations = [];
   localStorage.setItem("reservations", JSON.stringify(reservations))

}
let userreservations = reservations.filter(item => item.user == currentuser.username);

showtable();
function showtable() {
   let tableblock = document.querySelector("table");
   tableblock.innerHTML = "";
   if ((reservations.length > 0 && currentuser.username == "admin@mail.com") || userreservations.length > 0) {
      tableblock.parentNode.style.display = "block";
      let titlerow = document.createElement("tr");
      titlerow.innerHTML = "<th>User</th><th>Hotel</th><th>Remaining days</th><th>Check in date</th><th>Check out date</th><th>Rooms</th><th>Adults</th><th>Childs</th>"
      tableblock.append(titlerow)
      reservations.forEach((element, index) => {
         if (element.user == currentuser.username || currentuser.username == "admin@mail.com") {
            console.log(element)
            let newrow = document.createElement("tr");
            newrow.innerHTML = `<td>${element.user}</td><td>${element.hotelname}</td><td>${diffInDays(new Date(), new Date(element.checkin))}</td><td>${element.checkin}</td> <td>${element.checkout}</td><td>${element.rooms}</td><td>${element.adults}</td><td>${element.childs}</td><button>DELETE</button>`
            newrow.id = `${index}reservation`
            tableblock.append(newrow);
         }

      });
      let btns = tableblock.querySelectorAll("button");
      btns.forEach(element => {
         element.addEventListener("click", (e) => {

            let index = parseInt(e.target.parentElement.id)
            let x = reservations.splice(index, 1)
            localStorage.setItem("reservations", JSON.stringify(reservations))
            showtable();

         })

      });

   } else {
      console.log(tableblock.parentNode);
      tableblock.parentNode.style.display = "none";


   }
}

let chekbtn = document.querySelector(".availability .btn");

chekbtn.addEventListener("click", (e) => {
   // e.preventDefault();
   let newreserv = {
      user: currentuser.username,
      hotelname: ``,
      checkin: document.querySelector(".availability .check_in").value,
      checkout: document.querySelector(".availability .check_out").value,
      rooms: document.querySelector(".availability .rooms").value,
      adults: document.querySelector(".availability .adults").value,
      childs: document.querySelector(".availability .childs").value
   }

   localStorage.setItem("newreserv", JSON.stringify(newreserv))


})

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