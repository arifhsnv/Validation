const validationMessage = [
  {
    message: "Şifrə ən az 5 simvoldan ibarət olmalıdır",
  },
  {
    message: "Şifrə daxilində ən az bir rəqəm olmalıdır",
  },
  {
    message: "Şifrə daxilində ən az bir böyük hərf olmalıdır",
  },
];
const inputOfValidation = document.querySelector("#addPassword");
const buttonCheck = document.querySelector(".button-check");
const validationList = document.querySelector(".validation");

checkLength = () => inputOfValidation.value.length > 5;

const checkNumber=function () {
    let text = inputOfValidation.value
for (let index = 0; index < text.length; index++) {
  if (!isNaN(text.charAt(index))&&text !="") {
      return true;
    } return false;

    }
}
let secondText=inputOfValidation.value.toUpperCase()
const checkUpperCharacter = function () {

    for (let index = 0; index < secondText.length; index++) {
       let character=secondText.charAt(index)

      if (secondText.charAt(index)==character) {
          return true;
      }

  }
}
const checkList = function () {
    validationList.innerHTML = ""
    inputOfValidation.innerHTML=""
  if (!checkLength()) {
    validationList.innerHTML += `<div id="alertmessage" class="text-danger mt-3">${validationMessage[0].message}</div>`;
    }
    if (!checkNumber()) {
        validationList.innerHTML+= `<div id="alertmessage" class="text-danger mt-3">${validationMessage[1].message}</div>`
    }
    if (!checkUpperCharacter()) {
        validationList.innerHTML+=`<div id="alertmessage" class="text-danger mt-3">${validationMessage[2].message}</div>`
    }
};

buttonCheck.addEventListener("click", checkList);


