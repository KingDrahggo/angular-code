//* Fetching API data.
  const URL = "http://localhost:4232/movies";

  fetch(URL)
    .then(response => response.json())
    .then(idData => {
        console.log(idData)
       let id = idData
       console.log(id)
       showData(id)
    })

//* Function for displaying data
 const showData = (id) => {
    console.log(id);
    console.log(id[1].imgUrl);
    console.log(id[1].name);
    console.log(id[1].outlineInfo);

    const movieUl = document.querySelector('.movie__container')
    let template = ""; //li template
    id // represents item
      .sort((a, b) => b.id - a.id) // compare function a n b/ ids below in delete function
      .forEach((item) => {
       console.log(item)
        template += `
                <li><img src="${item.imgUrl}">
                <p class="p__name">${item.name}</p> 
                <p class="p__info">${item.outlineInfo}</p>
                </li>
            `; //// add edit function to update the text patch or put
      });

    movieUl.innerHTML = template;
 }
 
 //* Function for scrolling
 function buttonScroll (){
    const ul = document.querySelector('.movie__container')
    var scrollAmount = 0;
    var scrollMin = 0
    var scrollMax = 50;
    
    document.querySelector('.right__button').onclick = function () {
       ul.scrollTo({
         top: 0,
         left: Math.max(scrollAmount += 500, scrollMax),
         behavior: 'smooth'
       });
     };
   
     document.querySelector('.left__button').onclick = function () {
       ul.scrollTo({
         top: 0,
         left: Math.min(scrollAmount -= 500, scrollMin),
         behavior: 'smooth'
       });
     }; 
 }
 buttonScroll()