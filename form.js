// Form powered by FormSubmit: https://formsubmit.co/
// 
// Ajax via fetch info here: https://formsubmit.co/ajax-documentation

const formName = document.getElementById("formName");
const formEmail = document.getElementById("formEmail");
const formMessage = document.getElementById("formMessage");


function formSubmit() {
    fetch("https://formsubmit.co/ajax/dr.unit@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${formName.value}`,
            email: `${formEmail.value}`,
            message: `${formMessage.value}`,
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
