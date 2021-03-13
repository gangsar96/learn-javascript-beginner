const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");
const userList = document.querySelector(".name-list")

addListBtn.addEventListener("click", function () {
  //create an li out of thin air
  const newLi = document.createElement('li');
  const liContent = document.createTextNode(listInput.value);
  //add the input value inside that new li
  newLi.appendChild(liContent);
  //attaching the li to user list
  userList.appendChild(newLi);
});

// changeColor.addEventListener("click", function() {
//     text.classList.toggle("change");
// });

// const userList = document.querySelectorAll(".name-list li")

// for (user of userlist){
//     user.addEventListener("click", function () {
//         this.style.color = "red";
//     })
// }
