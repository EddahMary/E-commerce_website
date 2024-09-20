// // Using template literals to display html response
// // Key points:
// // Template literals
// // async function
// // await keyword in async
// // object distructing

async function getData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("Learning", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// getData();

async function displayData() {
  const products = await getData();

  let bag = document.getElementById("products_container");
  bag.innerHTML = products?.map((items) => {
    const { category, description, id, image, price, rating, title } = items;
    return `
    <div class= "products">
     <div class="image">
       <img src="${image}" alt="">
       </div><br><br>

       <div class="details">
       <h3>${category}</h3><br>
       <h4>${description}</h4><br>
       <p>${id}</p><br>
       <p1>${price}</p1><br>
       <p>${title}</p>
      </div><br><br>

      <div class= "button">
       <button>Add to cart</button>
      </div>
    </div>

    `;
  });
}
displayData();
// // const fetchProducts = async () => {};
// // async function getData() {
// //   try {
// //     const response = await fetch("https://fakestoreapi.com/products");
// //     console.log("Hello there am learning how to consume APIs", response.json());
// //     let responseData = await response.json();
// //     console.log("learning here", responseData);
// //     return responseData;
// //   } catch (error) {
// //     console.log(error);
// //   }
// //   async function displayData() {
// //     let products = await fetchProducts();
// //     let container = document.getElementById("main_nav_container");
// //     container.innerHTML = product.map((product) => {
// //       return `
// //         <div class="card">
// //       <div class="image">
// //        <img src="${image}" alt="${Cars}">
// //       </div>

// //       <div class="h2">
// //        <h2>${make}</h2>
// //       </div>

// //       <div class="h3">
// //        <h3>${model}</h3>
// //       </div>

// //       <div class="desc">
// //        <p>${Description}</p>
// //       </div>

// //       <div class="p">
// //        <p>${price}</p>
// //       </div>
// //     </div>
// //         `;
// //     });
// //   }
// // }
// // fetchProducts();
