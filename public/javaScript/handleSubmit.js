function handleSubmit(){

    // get data from form to display it in thank you message
    const form = document.querySelector("#contact-form");
    const data = new FormData(form);
    const email = data.get("email");
    const user = data.get("name") + " " + data.get("surname");
    console.log(data);

    // add data to message, display it and let the user close it when he
    // clicks outside of the message
    const element = document.querySelector("#contact-success");
    element.querySelector("#email").innerText = email;
    element.querySelector("#user").innerText = user;
    element.classList.remove("d-none");
    element.addEventListener("click", (e) => {
        e.target.classList.add("d-none");
    });
}