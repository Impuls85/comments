let form = document.querySelector(".form");
let button = document.querySelector(".button");
let message = document.querySelector(".message");
let user = document.querySelector(".input");
let calendar = document.querySelector(".calendar");
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) minutes = "0" + minutes;
let time = hour + ":" + minutes;
const nameError = document.getElementById("name-error");
const formElem = form.querySelectorAll(".input");
//const form = document.getElementById("form-massege");

function send() {
  let div = document.createElement("div");
  div.className = "comment";
  document.body.append(div);

  let nameUser = document.createElement("span");
  nameUser.className = "name-text";
  nameUser.textContent = user.value;
  div.append(nameUser);

  let commentText = document.createElement("p");
  commentText.className = "comment-text";
  commentText.textContent = message.value;
  div.append(commentText);

  let context = document.createElement("div");
  context.className = "context";
  div.append(context);

  let like = document.createElement("div");
  like.className = "dislike";
  like.onclick = addLike;
  context.append(like);

  let data = document.createElement("span");
  data.className = "data-text";
  if (calendar.value === "") {
    data.textContent = "дата:" + " " + "сегодня" + " " + "в:" + " " + time;
  } else {
    data.textContent = "дата:" + " " + calendar.value + " " + "в:" + " " + time;
  }
  context.append(data);

  let del = document.createElement("img");
  del.className = "del-img";
  del.src = "img/delete.svg";
  del.onclick = delComment;
  context.append(del);
}

function addLike() {
  this.classList.toggle("like");
}

function validate() {
  if (user.value.length <= 1) {
    user.style.border = " 2px solid red";
    nameError.textContent = "Это поле не должно быть пустым";
    return false;
  }

  return true;
}

user.addEventListener("focus", function () {
  user.style.border = "none";
  nameError.textContent = "";
});

function delComment() {
  this.parentNode.parentNode.remove();
}

button.addEventListener("click", function (event) {
  if (message.value === "") return;
  if (validate()) {
    send();
    formElem.forEach((input) => {
      input.value = "";
    });
  }
});
