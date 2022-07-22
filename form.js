// Form powered by FormSubmit: https://formsubmit.co/
// 
// Ajax via fetch info here: https://formsubmit.co/ajax-documentation

function formSubmit() {
    fetch("https://formsubmit.co/ajax/dr.unit@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: "FormSubmit",
            message: "I'm from Devro LABS"
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
