
let books;

 async function renderBook(filter)
{

  const booksWrapper = document.querySelector('.books');

  booksWrapper.classList += ' books__loading'

  if(!books){
    books = await getBooks();
  }
  booksWrapper.classList.remove('books__loading');
  if(filter === "LOW__TO__HIGH"){
    books.sort(function(a,b){
      return (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice);
    })    
  }
  

  if(filter === "HIGH__TO__LOW"){
    books.sort(function(a,b){
      return (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice);
    })    
  }
  
  if(filter === "RATING"){
    books.sort(function(a,b){
      return b.rating - a.rating;
    })    
  }



  const booksHTML =  books.map((book) =>{
      return `<div class="book">
      <figure class="book__img--wrapper">
          <img class="book__img" src="${book.url}" alt="">
      </figure>
      <div class="book__title">
          ${book.title}
      </div>
      <div class="book__ratings">
      ${ratingHTML(book.rating)}
      </div>
      <div class="book__price">
          ${priceHTML(book.originalPrice,book.salePrice)}
      </div>
      </div>`
  }).join(" ");

  booksWrapper.innerHTML = booksHTML;

}

function priceHTML(originalPrice , salePrice){
  if(!salePrice){
    return `$${originalPrice.toFixed(2)}`
  }
  else{
    return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span>$${salePrice.toFixed(2)}`
  }
}

function ratingHTML(rating){
  let ratingHTML ="";

  for (let i = 0; i < Math.floor(rating); i++) {
    ratingHTML += '<i class="fas fa-star"></i>'
  }

  if(!Number.isInteger(rating)){
    ratingHTML += '<i class="fas fa-star-half-alt"></i>'
  }

  return ratingHTML;
}


function filterBooks(event){
  renderBook(event.target.value);
}




// setInterval(()=>{
//     renderBook();
// })



// json.sort(function(a, b){
//   return a.id - b.id;
// });




// FAKE DATA
function getBooks(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve([ {
        id: 1,
        title: "Crack the Coding Interview",
        url: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 2,
        title: "Atomic Habits",
        url: "https://covers.openlibrary.org/b/id/10958382-L.jpg",
        originalPrice: 39,
        salePrice: null,
        rating: 5,
      },
      {
        id: 3,
        title: "Can't Hurt Me",
        url: "https://covers.openlibrary.org/b/id/10425061-L.jpg",
        originalPrice: 29,
        salePrice: null,
        rating: 5,
      },
      {
        id: 4,
        title: "Deep Work",
        url: "https://covers.openlibrary.org/b/id/10088428-L.jpg",
        originalPrice: 44,
        salePrice: 19,
        rating: 4.5,
      },
      {
        id: 5,
        title: "The 10X Rule",
        url: "https://covers.openlibrary.org/b/id/9978588-L.jpg",
        originalPrice: 32,
        salePrice: null,
        rating: 5,
      },
      {
        id: 6,
        title: "Sell Or Be Sold",
        url: "https://covers.openlibrary.org/b/id/7737110-L.jpg",
        originalPrice: 70,
        salePrice: 12.5,
        rating: 5,
      },
      {
        id: 7,
        title: "Rich Dad Poor Dad",
        url: "https://covers.openlibrary.org/b/id/2380224-L.jpg",
        originalPrice: 11,
        salePrice: 10,
        rating: 4,
      },
      {
        id: 8,
        title: "Cashflow Quadrant",
        url: "https://covers.openlibrary.org/b/id/1954899-L.jpg",
        originalPrice: 38,
        salePrice: 17.95,
        rating: 4.5,
      },
      {
        id: 9,
        title: "48 Laws of Power Summary",
        url: "https://covers.openlibrary.org/b/id/8906626-L.jpg",
        originalPrice: 35,
        salePrice: 19.95,
        rating: 4.5,
      },
      {
        id: 10,
        title: "The 5 Second Rule",
        url: "https://covers.openlibrary.org/b/id/8114155-L.jpg",
        originalPrice: 40,
        salePrice: null,
        rating: 5,
      },
      {
        id: 11,
        title: "How to Win Friends & Influence People",
        url: "https://covers.openlibrary.org/b/id/7895280-L.jpg",
        originalPrice: 30,
        salePrice: 20,
        rating: 5,
      },
      {
        id: 12,
        title: "Mastery",
        url: "https://covers.openlibrary.org/b/id/8479576-L.jpg",
        originalPrice: 30,
        salePrice: 12.95,
        rating: 4.5,
      },])
    },1000)
  })

}