// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let dataCount = document.querySelector(".dataCount");
const filterOptions = [
   { display: "Free Cancellation", key: "hasFreeCancellation" },
   { display: "Breakfast Included", key: "includesBreakfast" },
   { display: "Bestsellers", key: "isBestSeller" },
   { display: "Parking", key: "hasParking" },
   { display: "Pets Allowed", key: "allowsPets" },
   { display: "Room Service", key: "hasRoomService" },
   { display: "Fitness Centre", key: "hasFitnessCenter" }
 ];
 
 
 
 let hotels = [
  
   {
     id: 123,
     name: "Ruby International Hotel",
     rating: 8.3,
     reviewCount: 2393,
     pricePerNight: 308.34,
     imageSrc:
       "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-photo-164595.jpeg",
     roomsRemaining: 9,
     hasFreeCancellation: true,
     includesBreakfast: true,
     isBestSeller: false,
     hasParking: false,
     allowsPets: false,
     hasRoomService: false,
     hasFitnessCenter: false
   },
   {
     id: 124,
     name: "Hotel Jackson",
     rating: 5.6,
     reviewCount: 40642,
     pricePerNight: 240.0,
     imageSrc:
       "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-castorly-stock-3682238-scaled.jpg",
     roomsRemaining: 22,
     hasFreeCancellation: false,
     includesBreakfast: true,
     isBestSeller: true,
     hasParking: true,
     allowsPets: false,
     hasRoomService: true,
     hasFitnessCenter: true
   },
   {
     id: 125,
     name: "Atom Suites Hotel",
     rating: 8.7,
     reviewCount: 5301,
     pricePerNight: 314,
     imageSrc:
       "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-engin-akyurt-2725675-scaled.jpg",
     roomsRemaining: 2,
     hasFreeCancellation: false,
     includesBreakfast: false,
     isBestSeller: true,
     hasParking: true,
     allowsPets: false,
     hasRoomService: false,
     hasFitnessCenter: true
   },
   {
     id: 126,
     name: "JS Plaza Hotel",
     rating: 7.7,
     reviewCount: 1519,
     pricePerNight: 427,
     imageSrc:
       "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-pixabay-271619-scaled.jpg",
     roomsRemaining: 14,
     hasFreeCancellation: true,
     includesBreakfast: false,
     isBestSeller: false,
     hasParking: false,
     allowsPets: true,
     hasRoomService: false,
     hasFitnessCenter: true
   },
   {
     id: 127,
     name: "State Street Hotel",
     rating: 8.5,
     reviewCount: 1271,
     pricePerNight: 289,
     imageSrc:
       "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-photo-545034.jpeg",
     roomsRemaining: 8,
     hasFreeCancellation: true,
     includesBreakfast: false,
     isBestSeller: false,
     hasParking: true,
     allowsPets: false,
     hasRoomService: true,
     hasFitnessCenter: false
   }
 ];

 let dataCountLenght = hotels.length;
 dataCount.append(` (${dataCountLenght})`);
 console.log(hotels);

 let elems = document.querySelector(".append-elements");
 function generetaProducts() {
   hotels.forEach((item, index) => {

     let docelems = document.createElement("div");
     docelems.classList.add('element-box')
     docelems.innerHTML = `
     <div class="top-element-box"> 
       <img class="img-overflow" src=${item.imageSrc} />
     </div>
     <div class="bottom-element-box">
       <div class="bottom-element-box-border">
         <span class="frstSpan">
           <p class="raiting">Рейтинг ${item.rating}</p>
           <p class="stock">(${item.roomsRemaining}) отзывов</p>
         </span>
           <p class="dis">${item.pricePerNight} $</p>
         </span>
       </div>
       <button type="submit" value="Submit" class="col-1-4" id="arm">забронирават</button>
   
     </div>
         `;
     elems.append(docelems);
   });
 }
 generetaProducts();
 
let modal = document.querySelector("#myModal");
let account = document.querySelector(".col-1-4");
let span = document.getElementsByClassName("close")[0];



account.addEventListener('click', function () {
	modal.style.display = "block";
})

span.addEventListener('click', function () {
	modal.style.display = "none";
})

window.addEventListener('click', function (e) {
	if (e.target == modal) {
		modal.style.display = "none";
	}
})