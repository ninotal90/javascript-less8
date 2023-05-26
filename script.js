"use strict";
1;
function ajax() {
  let mainDiv = document.querySelector(".post-Div");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
  })
    .then(function (mosuliinfo) {
      return mosuliinfo.json();
    })
    .then(function (response) {
      response.forEach((element) => {
        createpost(element);
      });
      console.log(response);
    })
    .catch(function (errorResponse) {
      console.log(errorResponse);
    });

  function createpost(item) {
    let mainPostDiv = document.createElement("div");
    let h2Teg = document.createElement("h2");
    h2Teg.innerText = `${item.id}`;
    let h3Teg = document.createElement("h3");
    h3Teg.innerText = `${item.title}`;

    mainPostDiv.appendChild(h2Teg);
    mainPostDiv.appendChild(h3Teg);

    mainDiv.appendChild(mainPostDiv);
    console.log(mainPostDiv);
  }
}

ajax();

2;
fetch("https://reqres.in/api/users?page=2", {
  method: "get",
})
  .then(function (linkInfo) {
    return linkInfo.json();
  })
  .then(function (mosuliInfo) {
    mosuliInfo.data.forEach((dataElement) => {
      let ulElement = document.querySelector(".ulItem");
      let liElement = document.createElement("li");
      liElement.innerText = `${dataElement.email} / ${dataElement.last_name}`;
      ulElement.appendChild(liElement);
      document.querySelector(".wraper").appendChild(ulElement);
    });
  })

  .catch(function (errorInfo) {
    console.log(errorInfo);
  });

3;
let currentPage = 1;
// let totalPages;
// function getUsers(page) {
//   fetch("https://reqres.in/api/users?page=" + page, {
//     method: "get",
//   })
//     .then(function (getInfo) {
//       if (getInfo.status !== 200) {
//         throw getInfo.status;
//       }
//       return getInfo.json();
//     })
// .then(function (response) {
//   console.log(response);
//   const fragment = new DocumentFragment();
//   response.data.forEach((element) => {
//     let liItem = document.createElement("li");
//     liItem.textContent = `${element.email} / ${element.last_name}`;
//     fragment.appendChild(liItem);
//   });
//   document.querySelector(".ulItem").innerHTML = " ";
//       document.querySelector(".ulItem").appendChild(fragment);
//       totalPages = response.total_pages;
//       console.log(totalPages);
//     })
//     .catch(function (errorElement) {
//       console.log(errorElement);
//       if (errorElement == 404) {
//         let pElement = document.querySelector(".p");
//         pElement.textContent = "Page Not Found";
//         document.querySelector(".wraper").appendChild(pElement);
//       } else if (errorElement == 500) {
//         let pElement = document.querySelector(".p");
//         pElement.textContent = "Server Error";
//         document.querySelector(".wraper").appendChild(pElement);
//       } else {
//         let pElement = document.querySelector(".p");
//         pElement.textContent = "Error";
//         document.querySelector(".wraper").appendChild(pElement);
//       }
//     });
// }
// document.querySelector(".loadPrev").addEventListener("click", function () {
//   if (currentPage == 1) {
//     return;
//   }
//   getUsers(currentPage);
//   currentPage -= 1;
// });
// document.querySelector(".loadNext").addEventListener("click", function () {
//   if (currentPage == totalPages) {
//     return;
//   }
//   getUsers(currentPage);
//   currentPage += 1;
// });
// getUsers(currentPage);
