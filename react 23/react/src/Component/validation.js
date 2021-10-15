

const validation = (values) => {

  
    let errors = {};

    if (!values.name) {
        errors.name = "Name is required"
    }

    if (!values.age) {
        errors.age = "Age is required"
    } else if ( values.age > 65 ) {

        errors.age = " age must be less 65 "

    }
    

    if (!values.gender) {
        errors.gender = "gender is required"
    }

    if (!values.phone) {
        errors.phone = "Phone Number is required"
    } else if (values.phone.length < 10) {

        errors.phone = "Phone Number must be of length 10 required"

    }


    if (!values.email) {
        errors.email = "Email is required"
    } 
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is Invalid"
    }
    
    



    if (!values.password) {
        errors.password = "password is required"
    }
    else if (values.password.length < 5) {
        errors.password = "Password must be more than 5 characters"
    }

    return errors;

}




export default validation;