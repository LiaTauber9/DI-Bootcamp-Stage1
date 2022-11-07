const formElement = document.querySelector("form");
// const formData = new FormData(formElement);
formElement.addEventListener('submit', (event) => {
     // Prevent the form from submitting.
     event.preventDefault();
     // Build the data object.
     const data = {};
     data['firstName'] = formElement.firstName.value;
     data['lastName'] = formElement.lastName.value;
    //convert the object to string and
     const json = JSON.stringify(data);
     console.log(json);
     document.getElementById('p').textContent = json;
})


  