const react = require('react')
import("./CustomerRegister.css");

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const pinRegex = /^\d{4}$/;
const phoneRegex = new RegExp(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/i);

const defaultState = {
    name: "",
    email: "",
    pin: "",
    number: "",
};

export const CustomerRegistration = () => {
    const [state, setState] = react.useState(defaultState)

    let valid = { FullName: false, EMail: false, Pin: false, PhoneNumber: false }

    const handleChanges = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };



    const validateEmail = () => {
        valid.EMail = emailRegex.test(state.email);
    }
    const validatePin = () => {
        valid.Pin = pinRegex.test(state.pin);
    }
    const validateName = () => {
        valid.FullName = state.name.length > 0;
    }

    const validatePhone = () => {
        valid.PhoneNumber = phoneRegex.test(state.phone);
    }

    const handleSubmit = (e) => {
        console.log("Default disabled...?");
        e.preventDefault();

        console.log("Message to Console...");
        validateEmail();
        validateName();
        validatePin();
        validatePhone()

        const invalid = [];
        for (const item of Object.keys(valid)) {
            if (!valid[item]) {
                invalid.push(item);
            }
        }
        
        if (invalid.length !== 0) {
            alert(`${invalid.join(", ")} ${invalid.length > 1 ? "are all" : "is"} invalid.`)
        }

        this.props.addCustomer({ name: state.name, email: state.email, pin: state.pin, phone: state.number });
        setState(defaultState)
    };

    return (
        <form className='CustomerRegistration' onSubmit={handleSubmit} >
            <label>Full Name:
                <input type="text" name="name" onChange={handleChanges} value={state.name} />
            </label><br />
            <label>Pin:
                <input type="text" name="pin" onChange={handleChanges} value={state.pin} />
            </label><br />
            <label>E-mail Address:
                <input type="text" name="email" onChange={handleChanges} value={state.email} />
            </label><br />
            <label>Phone Number:
                <input type="text" name="phone" onChange={handleChanges} value={state.phone} />
            </label><br />
            <input
                type="submit"
                value="Submit"
            />
        </form>
    )
}

export default CustomerRegistration;