const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
document.getElementById("button").addEventListener("click", function () {
  event.preventDefault();
  const form = document.getElementById("form").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  form.addEventListener('submit', e=>{
    e.preventDefault();
    validateInputs();
  });

  const setError = (element,message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')

  }

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

}






//   email.addEventListener("textInput", email_Verify);
//   password.addEventListener("textInput", password_Verify);

//   function validated() {
//     if (email.value.length < 8) {
//       email.style.border = "1px solid red";
//       email_error.style.display = "block";
//       email.focus();
//       return false;
//     }
//     if (password.value.length <= 8) {
//       password.style.border = "1px solid red";
//       password_error.style.display = "block";
//       password.focus();
//       return false;
//     }
//   }
//   function email_Verify() {
//     if (email.value.length >= 7) {
//       email.style.border = "1px solid silver";
//       email_error.style.display = "none";
//       return true;
//     }
//   }

//   function password_Verify() {
//     if (password.value.length >= 7) {
//       password.style.border = "1px solid silver";
//       password_error.style.display = "none";
//       return true;
//     }
//   }
});
