export default function validateInfo(values) {

    let errors = {}
    
    if (!values.email) {
        errors.email = "Valid email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if(values.password.length < 6 ){
        errors.password = "Password needs to be 6 characters or more";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Please confirm password";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}