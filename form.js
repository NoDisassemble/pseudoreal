// Form powered by FormSubmit: https://formsubmit.co/
// Ajax via fetch info here: https://formsubmit.co/ajax-documentation

const formName = document.getElementById("formName").value;
const formEmail = document.getElementById("formEmail").value;
const formMessage = document.getElementById("formMessage").value;

async function formSubmit() {
    response = await fetch("https://formsubmit.co/ajax/dr.unit@gmail.com", {
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
    data = await response.json();
    console.log(data);
}
// Alerts using bootstrap component
// https://getbootstrap.com/docs/5.2/components/alerts/

const messageSent = document.getElementById('alertSuccess')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    messageSent.append(wrapper)
}

const alertTrigger = document.getElementById('submit')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Message Sent!', 'success')
    })
}
