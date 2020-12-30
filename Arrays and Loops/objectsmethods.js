var user = { // stored as key-value pair in objects
    firstName : "Raunak", // kets are like string indices
    lastName : "Mandal",
    phone : "+91-9932810125",
    mail : "iamriju2000@gmail.com",
    frnds: [],
    addFrnds : function(name) {
        this.frnds.push(name); // this means the context where the method is in
    },
    getcount : function() {
        return `${this.firstName} has: ${this.frnds.length} friends`;
    },

    // Info displays all //
    info : function() {
        return `${this.firstName} ${this.lastName} with Phone and emails as ${this.phone} ${this.mail} has total ${this.frnds.length} friends called ${this.frnds}`;
    }
};

console.log(user.getcount());
user.addFrnds("Cool dude 69");
user.addFrnds("Un cool dude 69");
console.log(user.getcount());
console.log(user.frnds);
console.log(user.info());