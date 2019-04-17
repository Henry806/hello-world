<div class="content">
            <div class="contact-form">
                <form onsubmit="if(!validateContactForm()) event.preventDefault();">
                    <div class="contact-form-line">
                        <label>Name</label><br />
                        <input title="Name" id="name"/>
                    </div>
                    <div class="contact-form-line">
                        <label>E-mail</label><br />
                        <input title="E-mail" id="email" />
                    </div>
                    <div class="contact-form-line">
                        <label>Feedback</label><br />
                        <textarea title="feedback" id="feedback"></textarea>
                    </div>
                    <div class="contact-form-line" style="text-align: right">
                        <button id="contact-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>

function validateContactForm() {
    if (document.getElementById("name").value === "") {
        alert("The name field is required.");
        return false;
    }

    if (document.getElementById("email").value === "" || !validateEmail(document.getElementById("email").value)) {
        alert("The e-mail field is required and the e-mail should be a valid one.");
        return false;
    }

    if (document.getElementById("feedback").value === "") {
        alert("The feedback field is required.");
        return false;
    }

    alert("Your feedback will be submitted. Thank you.");
    return true;
}

function validateEmail(email) {
    var re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}