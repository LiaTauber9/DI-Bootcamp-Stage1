const msgDiv = document.getElementById('msgDiv')
const registerForm = document.getElementById('registerForm')
const loginForm = document.getElementById('loginForm')
loginForm.style.display = 'none'

function submitLogin(event){
    event.preventDefault();
    const username = event.target.userName.value;
    const password = event.target.password.value;
    fetch('/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username,password}),
      })
        .then((response) => response.json())
        .then(response=>{
            msgDiv.textContent = response.msg
        })
        .catch((err) => {
            msgDiv.textContent = err.msg
          console.log(err);
        });
}

function submitRegister(event){
    event.preventDefault();
    const firstname = event.target.firstName.value;
    const lastname = event.target.lastName.value;
    const email = event.target.email.value;
    const username = event.target.userName.value;
    const password = event.target.password.value;
    fetch('/register', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({firstname,lastname,email,username,password}),
      })
        .then((response) => response.json())
        .then(response=>{
            console.log(response)
            if(response.status===200){
                registerForm.style.display='none';
                loginForm.style.display='block';
            }           
            msgDiv.textContent = response.msg
        })
        .catch((err) => {
            msgDiv.textContent = err.msg
          console.log(err);
        });
}

// const button = (e)=>{
//     console.log(e.target);
// }