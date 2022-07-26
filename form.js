// Form powered by FormSubmit: https://formsubmit.co/
// 
// Ajax via fetch info here: https://formsubmit.co/ajax-documentation

const formName = document.getElementById("formName").value;
const formEmail = document.getElementById("formEmail").value;
const formMessage = document.getElementById("formMessage").value;


function formSubmit() {
    console.log("button has been clicked");
    fetch("https://formsubmit.co/ajax/dr.unit@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${formName}`,
            email: `${formEmail}`,
            message: `${formMessage}`,
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

}

