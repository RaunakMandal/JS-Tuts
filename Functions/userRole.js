var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `Hey ${name}, Admin with all access`;
        case "subadmin":
            return `Hey ${name}, Sub Admin CRUD Courses`;
        case "testprep":
            return `Hey ${name}, you are a Testprep`;
        case "user":
            return `Hey ${name}, User with all course access`;
        case "other":
            return `Hey ${name}, Trial user`;
        default:
            return `Wrong input`;
    }
}

console.log(getUserRole("Raunak","admin"));

var getRole = getUserRole("Riju", "s");
console.log(getRole);