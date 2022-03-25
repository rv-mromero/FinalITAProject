const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#808080", "#808080", "#808080", "#808080", "#808080"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// call to db
function userPost() {
  const respData = fetch("http://localhost:8080/users", {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },

    body: JSONUser
  });

  body.innerHTML = createProductHTML(respData, "post");

}
// userPost();


// get request for sinlge product
function getProduct(id) {
console.log("view product was clicked");

axios
  .get("http://localhost:8080/products/" + id)

  .then(response => {
    body.innerHTML = createProductHTML(response, "single");
    console.log(response.data);
  });
}

// get request for all or product category
function getProducts(param) {
  if (param === "all") {
    axios
      .get("http://localhost:8080/products")

      .then(response => {
        document.querySelectorAll(".cards-wrapper")[0].innerHTML = createProductHTML(response, "all");
        console.log(response);
        Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
          item.onclick = () => {
            console.log('hello')
            item.parentElement.parentElement.classList.toggle("change");
          };
        });
      });
  } else {
    axios
      .get("http://localhost:8080/products/sort/" + param)

      .then(response => {
        document.querySelectorAll(".cards-wrapper")[0].innerHTML = createProductHTML(response);
        Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
          item.onclick = () => {
            console.log('hello')
            item.parentElement.parentElement.classList.toggle("change");
          };
        });
      })
  }
}
  

// dynamic content loading for client product page
function createProductHTML(response) {
console.log(response);
var responseData = response.data;
var output = "";

  for (i = 0; i < responseData.length; i++) {
    output += 
         `<div class="card">
          <div class="front-side">
            <img src= "${responseData[i].img_main}" alt="Night Swag" class="card-image" />
            <h1 id="section1" class="cloth-name">${responseData[i].category}</h1>
            <ul class="card-list">
              <li class="card-list-item">${responseData[i].name}</li>
              <li class="card-list-item">${responseData[i].size}</li>
              <li class="card-list-item">${responseData[i].rating}</li>
              <li class="card-list-item">${responseData[i].description}.</li>
            </ul>
             <button class="navigation-button">
                price &gt;&gt;
              </button>
            </div>
            <div class="back-side center">
              <button class="navigation-button">
                &lt;&lt; back
              </button>
            <h3 class="cloth-price">${responseData[i].price}</h3>
            <button class="card-button"onclick="document.location='../individualPage/individual_product.html'">See More Details</button>
          </div>
        </div>`;
  }

return output;
}



function getHomeProduct() {
  axios
    .get("http://localhost:8080/products")

    .then(response => {
      document.querySelectorAll(".cards-wrapper")[0].innerHTML = homePageProduct(response);
      console.log(response);
Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    console.log('hello')
    item.parentElement.parentElement.classList.toggle("change");
  };
});
    });
}

// display 1-4 as feture products on home page
function homePageProduct(response) {
  console.log(response);
  var responseData = response.data;
  var output = "";
  
    for (i = 0; i < 4; i++) {
      output += 
           `<div class="card">
            <div class="front-side">
              <img src= "${responseData[i].img_main}" alt="Night Swag" class="card-image" />
              <h1 id="section1" class="cloth-name">${responseData[i].category}</h1>
              <ul class="card-list">
                <li class="card-list-item">${responseData[i].name}</li>
                <li class="card-list-item">${responseData[i].size}</li>
                <li class="card-list-item">${responseData[i].rating}</li>
                <li class="card-list-item">${responseData[i].description}.</li>
              </ul>
               <button class="navigation-button">
                  price &gt;&gt;
                </button>
              </div>
              <div class="back-side center">
                <button class="navigation-button">
                  &lt;&lt; back
                </button>
              <h3 class="cloth-price">${responseData[i].price}</h3>
              <button class="card-button"onclick="document.location='../individualPage/individual_product.html'">See More</button>
            </div>
          </div>`;
    }
  
  return output;
  }

  function getHomeProduct() {
      axios
        .get("http://localhost:8080/products")
    
        .then(response => {
          document.querySelectorAll(".cards-wrapper")[0].innerHTML = homePageProduct(response);
          console.log(response);
    Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
      item.onclick = () => {
        console.log('hello')
        item.parentElement.parentElement.classList.toggle("change");
      };
    });
        });
  }

  // function createIndividualProduct(data){
  // console.log(response);
  // var responseData = response.data;
  // var output = "";
  //   output +=
  
  //   for (i = 0; i < responseData.length; i++) {
  //     output += 
  //   `<div id="product_layout_1">
  //       <div class="top">
  //       <div class="product_images">
  //         <div class="product_image_1">
  //           <img src="${responseData[i].img_main}"/>
  //         </div>
  //         <div class="product_image_small">
  //           <div class="product_image_2">
  //             <img src="${responseData[i].img_main}"/>
  //           </div>
  //                     <div class="product_image_3">
  //             <img src="${responseData[i].img_main}"/>
  //           </div>
  //                     <div class="product_image_4">
  //             <img src="${responseData[i].img_main}"/>
  //           </div>
  //         </div>
  //         </div>
  //         <div class="product_info">
  //           <h1>
  //           ${responseData[i].name}</h1>
  //           <div class="price">
  //           <h2 class="original_price">${responseData[i].price}</h2>
  //           <h2 class="sale_price">$40</h2>
  //           </div>
  //           <div class="rating">
  //             <i class="fa fa-star fa-3x"></i><i class="fa fa-star fa-3x"></i><i class="fa fa-star fa-3x"></i><i class="fa fa-star-half-o fa-3x"></i><i class="fa fa-star-o fa-3x"></i>
  //           </div>
  //           <div class="product_description">
  //           <p>${responseData[i].description}</p>
  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  //           </div>
  //          <div class="related_info">
  //            <span class="sku">SKU:1234567</span><span class="quantity">QTY:7</span>
  //          </div>`
  //   }
  // return output;
  // }