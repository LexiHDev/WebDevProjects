const msgElement = document.getElementById("message");
const cellElement = document.getElementById("cellphone");
const emailElement = document.getElementById("email");
const nameElement = document.getElementById("name");
const errorElement = document.getElementById("error");
const submitBtn = document.getElementById("submitBtn");
const contactForm = $("#contactform");

const emailRegex = new RegExp
    (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)
const cellRegEx = new RegExp(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/i);


let valid = { Name: false, "E-Mail": false, "Cellphone-Number": false, Message: false }

const validateInputs = () => {
    console.log("changed!");
    validateCell();
    validateEmail();
    validateMessage();
    validateName();

    console.log(valid);
    const invalid = [];
    for (const item of Object.keys(valid)) {
        if (!valid[item]) {
            invalid.push(item);
        }
    }
    if (invalid.length == 0) {
        errorElement.style.display = "none";
        errorElement.innerText = "";
        submitBtn.disabled=false;
    } else {
        errorElement.style.display = "block";
        console.log(invalid);
        errorElement.innerText = `Invalid: ${invalid}`;
        submitBtn.disabled=true;
    }
}
const validateName = () => {
    valid.Name = nameElement.value !== "";
}

const validateEmail = () => {
    valid["E-Mail"] = emailRegex.test(emailElement.value);
}

const validateCell = () => {
    valid["cellphone number"] = cellRegEx.test(cellElement.value);
}

const validateMessage = () => {
    valid.Message = msgElement.value.length < 250;
}

// nameElement.on("change", validateName());
// emailElement.on("change", validateEmail());
// cellElement.on("change", validateCell());
// msgElement.on("change", validateMessage());
contactForm.change(validateInputs)
validateInputs(); // run on load to disable button if cached response is not valid.