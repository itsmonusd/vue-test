import { Validator } from 'vee-validate';


// Register validation rule for email field;
Validator.extend('email', {
    getMessage: field => 'The ' + field + ' is not valid.',
    validate: value => {
        let reg = /^(([^<>()\[\]\\.,;:\s-@#!$%&*+=^"]+(\.[^<>()\[\]\\.,;:\s-@#!$%&*+=^"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reg.test(value)) return false;
        return true;
    }
});

// Register validation rule for password field;
Validator.extend('password', {
    getMessage: field => 'The ' + field + ' field can not have space and minimum six characters required.',
    validate: value => {
        let reg = /^[^\s]\S{4}\S+$/;
        if (!reg.test(value)) return false;
        return true;
    }
});

// Register validation rule for Company Name or firm name or client name field;
//Allow dot, numeric, alphabetic and one space between word
Validator.extend('comp_name', {
    getMessage: field => 'The ' + field + ' field can not have multiple spaces and special characters  other than . and &.',
    validate: value => {
        let reg = /^([A-Za-z0-9.&]+[A-Za-z0-9&. ]{0,1}[A-Za-z0-9.]+)*$/;
        if (!reg.test(value)) return false;
        return true;
    }
});


Validator.extend('address', {
    getMessage: field => 'The ' + field + ' field can contain only valid characters for address.',
    validate: value => {
        let reg = /^[_A-z0-9]*((\.|-|,|#|\/|\s)*[A-z0-9])*$/;
        if (!reg.test(value)) return false;
        return true;
    }
});

// Register validation rule for Name  field;
//allow only character and dot with one space between word
Validator.extend('name', {
    getMessage: field => 'The ' + field + ' field can not have multiple spaces, numbers and special characters.',
    validate: value => {
        let reg = /^([A-Za-z][. ]{0,1}[A-Za-z]*)*$/;
        if (!reg.test(value)) return false;
        return true;
    }
});


Validator.extend('url_format', {
    getMessage: field => 'The ' + field + ' field can contain only valid characters .',
    validate: value => {
        let reg = /^([A-z-A-z0-9]+)\.([A-z]{2,})/
        let regex = /(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        if (!reg.test(value) && !regex.test(value)) return false;
        return true;

        // let reg = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
        // if (reg.test(value))
        //   return true;
        // else
        //   return false;
    }
})


